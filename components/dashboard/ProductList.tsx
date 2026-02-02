import { Package, MessageSquare, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductWithCounts } from "@/types";

interface ProductListProps {
    products: ProductWithCounts[];
}

export function ProductList({ products }: ProductListProps) {
    return (
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
    );
}
