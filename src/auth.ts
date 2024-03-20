import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
//import GitHub from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
  theme: {
    logo: "https://i.pinimg.com/736x/dd/8a/e9/dd8ae96bf695b42adbcfe756ea2e04e6.jpg",
    colorScheme: "light"
  },
providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID ?? "",
        clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
            }
        }
    }),
],
debug: true,
} satisfies NextAuthConfig;

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut
} = NextAuth(authConfig)

