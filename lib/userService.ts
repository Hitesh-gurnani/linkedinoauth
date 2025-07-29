import { getDataSource } from "./dataSource";
import { User } from "../entities/User";

export class UserService {
  private getUserRepository() {
    try {
      const dataSource = getDataSource();
      return dataSource.getRepository(User);
    } catch (error) {
      console.error("Database not available:", error);
      throw new Error(
        "Database operations unavailable - DATABASE_URL not configured"
      );
    }
  }

  private async checkDatabaseAvailability(): Promise<boolean> {
    try {
      this.getUserRepository();
      return true;
    } catch (error) {
      console.log("Database unavailable, skipping operation");
      return false;
    }
  }

  async findUserByEmail(email: string): Promise<User | null> {
    if (!(await this.checkDatabaseAvailability())) {
      return null;
    }

    const userRepository = this.getUserRepository();
    return await userRepository.findOne({ where: { email } });
  }

  async findUserByProviderInfo(
    provider: string,
    providerId: string
  ): Promise<User | null> {
    if (!(await this.checkDatabaseAvailability())) {
      return null;
    }

    const userRepository = this.getUserRepository();
    return await userRepository.findOne({ where: { provider, providerId } });
  }

  async createUser(userData: {
    email: string;
    name: string;
    image?: string;
    provider: string;
    providerId: string;
  }): Promise<User> {
    if (!(await this.checkDatabaseAvailability())) {
      throw new Error("Cannot create user - database unavailable");
    }

    const userRepository = this.getUserRepository();
    const user = userRepository.create(userData);
    return await userRepository.save(user);
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User | null> {
    if (!(await this.checkDatabaseAvailability())) {
      return null;
    }

    const userRepository = this.getUserRepository();
    await userRepository.update(id, userData);
    return await userRepository.findOne({ where: { id } });
  }

  async findOrCreateUser(userData: {
    email: string;
    name: string;
    image?: string;
    provider: string;
    providerId: string;
  }): Promise<User> {
    if (!(await this.checkDatabaseAvailability())) {
      // Return a mock user object when database is unavailable
      console.log(
        "Database unavailable, returning mock user for authentication"
      );
      return {
        id: `mock-${userData.providerId}`,
        email: userData.email,
        name: userData.name,
        image: userData.image || null,
        provider: userData.provider,
        providerId: userData.providerId,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as User;
    }

    let user = await this.findUserByProviderInfo(
      userData.provider,
      userData.providerId
    );

    if (!user) {
      user = await this.findUserByEmail(userData.email);

      if (user) {
        user = await this.updateUser(user.id, {
          provider: userData.provider,
          providerId: userData.providerId,
          image: userData.image || user.image,
          name: userData.name || user.name,
        });
      } else {
        user = await this.createUser(userData);
      }
    }

    return user!;
  }
}

export const userService = new UserService();
