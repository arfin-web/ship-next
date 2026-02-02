"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getBoardInsights(productId: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    // Verify ownership
    const product = await prisma.product.findUnique({
        where: { id: productId },
    });

    if (!product || product.ownerId !== session.user.id) {
        throw new Error("Unauthorized or not found");
    }

    const mostRequested = await prisma.featureRequest.findMany({
        where: { productId },
        include: {
            _count: {
                select: { votes: true },
            },
        },
        orderBy: {
            votes: {
                _count: "desc",
            },
        },
        take: 5,
    });

    const recentUpdates = await prisma.statusUpdate.findMany({
        where: {
            feature: {
                productId,
            },
        },
        include: {
            feature: {
                select: { title: true },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    });

    return {
        mostRequested,
        recentUpdates,
    };
}
