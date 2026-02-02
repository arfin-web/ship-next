import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) return null;

    const products = await prisma.product.findMany({
        where: { ownerId: session.user.id },
        include: {
            _count: {
                select: { features: true },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    const totalVotesCount = await prisma.vote.count({
        where: {
            feature: {
                product: {
                    ownerId: session.user.id
                }
            }
        }
    });

    return (
        <DashboardOverview
            products={products}
            totalVotes={totalVotesCount}
        />
    );
}
