import { CreateProductModal } from "./CreateProductModal";
import { DashboardStats } from "./DashboardStats";
import { ProductList } from "./ProductList";
import { ProductWithCounts } from "@/types";

interface DashboardOverviewProps {
    products: ProductWithCounts[];
    totalVotes: number;
}

export function DashboardOverview({ products, totalVotes }: DashboardOverviewProps) {
    const totalFeatures = products.reduce((acc, p) => acc + p._count.features, 0);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight mb-1">Founder Overview</h1>
                    <p className="text-muted-foreground text-sm font-medium italic">Manage your entire product portfolio in one place.</p>
                </div>
                <CreateProductModal />
            </div>

            <DashboardStats
                totalProducts={products.length}
                totalFeatures={totalFeatures}
                totalVotes={totalVotes}
            />

            <ProductList products={products} />
        </div>
    );
}
