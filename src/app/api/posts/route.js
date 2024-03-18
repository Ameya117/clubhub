import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
    const token = await getToken({ req });
    if (token) {
        const user = await prisma.user.findUnique({
            where: { email: token.email },
        });
        if (user) {
            const cardData = await prisma.post.findMany();
        }
        return NextResponse.json(cardData, { status: 200 });
    } else {
        return NextResponse("Unauthorized", { status: 401 });
    }
}

export async function POST(req) {
    const token = await getToken({ req });
    if (token) {
        const user = await prisma.user.findUnique({
            where: {
                email: token.email,
            },
        });

        if (user) {
            const { title, content } = req.body;

            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: user.id,
                },
            });

            return NextResponse.json(newPost, { status: 201 });
        } else {
            return NextResponse.json("Not found user", { status: 404 });
        }
    } else {
        return NextResponse.json("Unauthorized", { status: 401 });
    }
}
