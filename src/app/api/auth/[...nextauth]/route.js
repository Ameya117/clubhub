// pages/api/auth/[...nextauth].js

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuth } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export default authOptions({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async signIn(user, account, profile) {
            // Your signIn callback logic here
        },
        async jwt(token, user, account, profile, isNewUser) {
            // Your jwt callback logic here
        },
        async session(session, token) {
            // Your session callback logic here
        },
        async redirect(url, baseUrl) {
            // Your redirect callback logic here
        },
        async signInCallback(user, account, metadata) {
            // Your signInCallback logic here
        },
        async jwtCallback(token, user, account, profile, isNewUser) {
            // Your jwtCallback logic here
        },
        async sessionCallback(session, user, sessionToken) {
            // Your sessionCallback logic here
        },
        async error(error, request, response) {
            // Your error callback logic here
        },
    },
});
