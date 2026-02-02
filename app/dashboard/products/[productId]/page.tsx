import { getProductBySlug } from "@/app/actions/productActions";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { FeatureTable } from "@/components/dashboard/FeatureTable";
import { CreateProductModal } from "@/components/dashboard/CreateProductModal";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductDashboardPage({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    const product = await prisma.product.findUnique({
        where: { id: productId },
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

    if (!product) {
        notFound();
    }

    const stats = {
        totalRequests: product.features.length,
        planned: product.features.filter((f) => f.status === "PLANNED").length,
        inProgress: product.features.filter((f) => f.status === "IN_PROGRESS").length,
        completed: product.features.filter((f) => f.status === "COMPLETED").length,
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1">Product Overview</h1>
                    <p className="text-muted-foreground text-sm font-medium italic">Track and manage feature requests for {product.name}</p>
                </div>
                <CreateProductModal />
            </div>

            <StatsOverview {...stats} />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold tracking-tight">Feature Requests</h2>
                </div>
                <FeatureTable features={product.features} />
            </div>
        </div>
    );
}
