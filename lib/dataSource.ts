import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

// Only create DataSource if DATABASE_URL exists
export const AppDataSource = process.env.DATABASE_URL
  ? new DataSource({
      type: "postgres",
      url: process.env.DATABASE_URL,
      synchronize: process.env.NODE_ENV !== "production", // Only sync in development
      logging: process.env.NODE_ENV === "development",
      entities: [User],
      ssl:
        process.env.NODE_ENV === "production"
          ? {
              rejectUnauthorized: false,
            }
          : false,
      extra:
        process.env.NODE_ENV === "production"
          ? {
              ssl: {
                rejectUnauthorized: false,
              },
            }
          : {},
    })
  : null;

let isInitialized = false;

export const initializeDatabase = async () => {
  // Return early if no DATABASE_URL
  if (!process.env.DATABASE_URL) {
    console.log("DATABASE_URL not provided, skipping database initialization");
    return null;
  }

  // Return early if no DataSource
  if (!AppDataSource) {
    console.log("DataSource not available, skipping database initialization");
    return null;
  }

  if (!isInitialized) {
    try {
      // Check if already initialized
      if (AppDataSource.isInitialized) {
        console.log("Database already initialized");
        isInitialized = true;
        return AppDataSource;
      }

      await AppDataSource.initialize();
      isInitialized = true;
      console.log("Database connected successfully");
      return AppDataSource;
    } catch (error) {
      console.error("Error connecting to database:", error);

      // Don't throw error in production to prevent app crashes
      if (process.env.NODE_ENV === "development") {
        throw error;
      }

      return null;
    }
  }

  return AppDataSource;
};

export const getDataSource = () => {
  if (!AppDataSource) {
    throw new Error(
      "DATABASE_URL not provided. Database operations unavailable."
    );
  }

  if (!isInitialized) {
    throw new Error(
      "Database not initialized. Call initializeDatabase() first."
    );
  }

  return AppDataSource;
};

// Graceful shutdown
export const closeConnection = async () => {
  if (isInitialized && AppDataSource && AppDataSource.isInitialized) {
    await AppDataSource.destroy();
    isInitialized = false;
    console.log("Database connection closed");
  }
};
