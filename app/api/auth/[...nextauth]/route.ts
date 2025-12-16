// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Email + Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null;

        // 1) find user in DB
        const user = await prisma.user.findUnique({
          where: { email: creds.email },
        });

        if (!user || !user.password) {
          return null;
        }

        // 2) check password (hashed)
        const isValid = await bcrypt.compare(creds.password, user.password);
        if (!isValid) return null;

        // 3) return basic user info → goes into JWT
        return {
          id: user.id,
          name: user.name ?? undefined,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login", // our login page
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // put user in JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    // put JWT into session (what useSession() reads)
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
