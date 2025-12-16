import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // Use JWT sessions
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Find user in DB
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          return null;
        }

        // This object is what goes into the JWT
        return {
          id: user.id,
          name: user.name ?? undefined,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // Put user data into the JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    // Put data from JWT into session (what useSession() sees)
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        session.user.name = token.name as string | undefined;
        session.user.email = token.email as string | undefined;
      }
      return session;
    },
  },
};
