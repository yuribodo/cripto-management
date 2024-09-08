// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        e
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, name: user.username, email: user.email };
        }

        
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', 
    signOut: '/logout', 
    error: '/auth/error', 
    verifyRequest: '/auth/verify-request', 
    newAccount: '/auth/new-account' 
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your .env file
});
