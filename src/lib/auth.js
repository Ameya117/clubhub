/* eslint-disable @typescript-eslint/no-unsafe-return */
const { PrismaAdapter } = require("@auth/prisma-adapter");
const { PrismaClient } = require("@prisma/client");
const { GoogleProvider } = require("next-auth/providers");

const prisma = new PrismaClient();

// Define authentication options using NextAuthOptions interface
const authOptions = {
    // Customize authentication pages
    pages: {
        signIn: "/login", // Redirect users to "/login" when signing in
    },
    // Configure session management
    session: {
        strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
    },
    // added secret key
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        signIn({ account, profile }) {
            if (account && account.provider === "google" && profile?.email) {
                const result = profile.email.endsWith("@vitstudent.ac.in");
                return Promise.resolve(result);
            }

            // Default case, return a resolved Promise with a boolean value
            return Promise.resolve(false);
        },
    },

    adapter: PrismaAdapter(prisma),
    // Configure authentication providers
    providers: [
        GoogleProvider({
            // Configure Google authentication provider with environment variables
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // authorization:"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code&hd=vitstudent.ac.in",
        }),
        // CredentialsProvider({}), // Include a Credentials provider (username/password)
    ],
};

module.exports = {
    authOptions,
};
