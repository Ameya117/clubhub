import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
    const token = await getToken({ req });
    if (token) {
        const data = await prisma.user.findUnique({
            where: { email: token.email },
        });

        return NextResponse.json(data, { status: 200 });
    }

    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

export async function PATCH(req) {
    const token = await getToken({ req });
    if (token) {
        try {
            const { contact, school } = await req.json();
            if (contact && school) {
                const isValidMobileNumber = /^[0-9]{10,12}$/.test(contact);
                const isValidSchool = /^[A-Za-z]+$/.test(school);
                if (isValidMobileNumber && isValidSchool) {
                    const data = await prisma.user.update({
                        data: {
                            school,
                            contact,
                        },
                        where: { email: token.email },
                    });

                    return NextResponse.json(data, { status: 200 });
                } else {
                    return NextResponse.json(
                        { error: "Invalid school or contact type" },
                        { status: 400 }
                    );
                }
            } else {
                return NextResponse.json(
                    { error: "school or contact not found in json body" },
                    { status: 400 }
                );
            }
        } catch (err) {
            return NextResponse.json(
                { error: "Invalid PUT request" },
                { status: 400 }
            );
        }
    } else {
        return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }
}
