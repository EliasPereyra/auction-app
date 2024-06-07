import NextAuth, { DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";

import { accounts, users, sessions, verificationTokens } from "./db/schema";

import { db } from "./db/db";

declare module "next-auth" {
  interface Sesion {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const { handlers } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: accounts as any,
    usersTable: users as any,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [Google],
});
