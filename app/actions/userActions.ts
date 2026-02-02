"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateUserProfile(formData: FormData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    const name = formData.get("name") as string;
    const image = formData.get("image") as string;

    const user = await prisma.user.update({
        where: {
            id: session.user.id,
        },
        data: {
            name,
            image,
        },
    });

    revalidatePath("/dashboard/settings");
    return user;
}
