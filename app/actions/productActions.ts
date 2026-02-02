"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    const product = await prisma.product.create({
        data: {
            name,
            description,
            slug,
            ownerId: session.user.id,
        },
    });

    revalidatePath("/dashboard");
    return product;
}

export async function getProducts() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return [];
    }

    return await prisma.product.findMany({
        where: {
            ownerId: session.user.id,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findUnique({
        where: {
            slug,
        },
        include: {
            features: {
                include: {
                    _count: {
                        select: { votes: true },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });
}
