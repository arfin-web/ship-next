"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function createFeatureRequest(productId: string, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const feature = await prisma.featureRequest.create({
        data: {
            title,
            description,
            productId,
        },
    });

    revalidatePath(`/board/${productId}`);
    return feature;
}

export async function updateFeatureStatus(featureId: string, newStatus: any, message?: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const oldFeature = await prisma.featureRequest.findUnique({
        where: { id: featureId },
    });

    if (!oldFeature) throw new Error("Feature not found");

    const feature = await prisma.featureRequest.update({
        where: { id: featureId },
        data: {
            status: newStatus,
        },
    });

    await prisma.statusUpdate.create({
        data: {
            featureId,
            oldStatus: oldFeature.status,
            newStatus,
            message,
        },
    });

    revalidatePath(`/board/${feature.productId}`);
    revalidatePath(`/dashboard`);
    return feature;
}

export async function voteForFeature(featureId: string, voterEmail: string) {
    const existingVote = await prisma.vote.findUnique({
        where: {
            featureId_voterEmail: {
                featureId,
                voterEmail,
            },
        },
    });

    if (existingVote) {
        await prisma.vote.delete({
            where: {
                id: existingVote.id,
            },
        });
    } else {
        await prisma.vote.create({
            data: {
                featureId,
                voterEmail,
            },
        });
    }

    const feature = await prisma.featureRequest.findUnique({
        where: { id: featureId },
        select: { productId: true },
    });

    if (feature) {
        revalidatePath(`/board/${feature.productId}`);
    }
}
