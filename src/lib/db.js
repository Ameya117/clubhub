const { PrismaClient } = require("@prisma/client");
const { env } = require("~/env");

const globalForPrisma = globalThis;

const db =
    globalForPrisma.prisma ||
    new PrismaClient({
        log:
            env.NODE_ENV === "development"
                ? ["query", "error", "warn"]
                : ["error"],
    });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

module.exports = { db };
