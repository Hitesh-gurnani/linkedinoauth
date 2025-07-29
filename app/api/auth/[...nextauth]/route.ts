import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { userService } from "../../../../lib/userService";
import { initializeDatabase } from "../../../../lib/dataSource";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  useSecureCookies: process.env.NODE_ENV === "production",

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        console.log("Sign-in attempt:", {
          email: user.email,
          provider: account?.provider,
          hasDbUrl: !!process.env.DATABASE_URL,
        });

        if (process.env.DATABASE_URL) {
          try {
            await initializeDatabase();

            if (account?.provider === "google" && user.email) {
              const dbUser = await userService.findOrCreateUser({
                email: user.email,
                name: user.name || "",
                image: user.image || undefined,
                provider: account.provider,
                providerId: account.providerAccountId,
              });

              console.log("User saved to database:", dbUser.email);
            }
          } catch (dbError) {
            console.error("Database operation failed:", dbError);
          }
        } else {
          console.log("No DATABASE_URL provided, skipping database operations");
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);

        return true;
      }
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect - URL:", url, "Base URL:", baseUrl);

      const redirectUrl = `${baseUrl}/dashboard`;
      console.log("Final redirect URL:", redirectUrl);
      return redirectUrl;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
