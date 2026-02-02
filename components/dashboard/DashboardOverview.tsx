import { Package, MessageSquare, ThumbsUp, Plus, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreateProductModal } from "./CreateProductModal";

interface Product {
    id: string;
    name: string;
    slug: string;
    _count: {
        features: number;
    };
}

interface DashboardOverviewProps {
    products: Product[];
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

            {/* Aggregate Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest italic">Total Products</CardTitle>
                        <div className="p-2 rounded-lg bg-blue-500/10">
                            <Package className="w-4 h-4 text-blue-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black tracking-tighter">{products.length}</div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest italic">Total Requests</CardTitle>
                        <div className="p-2 rounded-lg bg-primary/10">
                            <MessageSquare className="w-4 h-4 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black tracking-tighter">{totalFeatures}</div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest italic">Total Upvotes</CardTitle>
                        <div className="p-2 rounded-lg bg-orange-500/10">
                            <ThumbsUp className="w-4 h-4 text-orange-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black tracking-tighter">{totalVotes}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Products Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight">Your Products</h2>
                    <Button variant="ghost" size="sm" asChild className="text-xs font-bold gap-1 italic">
                        <Link href="/dashboard/products">
                            View All <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </Button>
                </div>

                {products.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-2xl text-muted-foreground bg-card shadow-sm">
                        <Package className="w-12 h-12 mb-4 opacity-20" />
                        <p className="font-bold italic">No products added yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Link key={product.id} href={`/dashboard/products/${product.id}`} className="block group">
                                <Card className="h-full border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</CardTitle>
                                        <CardDescription className="line-clamp-2 text-xs italic">{product.slug}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            <div className="flex items-center gap-1.5">
                                                <MessageSquare className="w-3.5 h-3.5" />
                                                {product._count.features} Requests
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
