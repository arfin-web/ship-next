import { getProducts } from "@/app/actions/productActions";
import { CreateProductModal } from "@/components/dashboard/CreateProductModal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Package, ExternalLink } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProductsPage() {
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

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1">My Products</h1>
                    <p className="text-muted-foreground text-sm font-medium italic">Manage and configure your SaaS feature boards.</p>
                </div>
                <CreateProductModal />
            </div>

            {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-border rounded-3xl text-muted-foreground bg-card">
                    <Package className="w-16 h-16 mb-4 opacity-10" />
                    <h2 className="text-xl font-bold mb-2">No products found</h2>
                    <p className="italic text-sm mb-6">Create your first product to start collecting feedback.</p>
                    <CreateProductModal />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="border-border shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href={`/board/${product.slug}`} target="_blank" className="text-muted-foreground hover:text-primary">
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                            <Link href={`/dashboard/products/${product.id}`} className="block">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</CardTitle>
                                    <CardDescription className="italic text-xs font-medium uppercase tracking-widest text-primary/60">{product.slug}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-6">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Requests</p>
                                            <div className="flex items-center gap-2 text-lg font-black">
                                                <MessageSquare className="w-4 h-4 text-primary" />
                                                {product._count.features}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
