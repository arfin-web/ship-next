import { prisma } from "@/lib/prisma";
import { Container } from "@/components/landing-page/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Ship, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function BoardsDirectoryPage() {
    const products = await prisma.product.findMany({
        include: {
            _count: {
                select: { features: true },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="min-h-screen bg-muted/20">
            <nav className="h-20 border-b border-border bg-background flex items-center">
                <Container>
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Ship className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">ShipNext</span>
                    </Link>
                </Container>
            </nav>

            <main className="py-20 animate-in fade-in duration-700">
                <Container>
                    <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                            Community <span className="text-primary italic">Boards</span>
                        </h1>
                        <p className="text-muted-foreground text-lg font-medium italic">
                            Discover products and share your ideas to make them better.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link key={product.id} href={`/board/${product.slug}`} className="block group">
                                <Card className="h-full border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                                    <CardHeader className="p-8">
                                        <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors">{product.name}</CardTitle>
                                        <CardDescription className="italic text-sm font-medium line-clamp-3">
                                            {product.description || "Shape the future of this product."}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-0">
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                                <MessageSquare className="w-4 h-4 text-primary" />
                                                {product._count.features} Ideas
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {products.length === 0 && (
                        <div className="text-center py-20 bg-background border border-border rounded-3xl shadow-sm italic">
                            <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground/20" />
                            <p>No boards available yet.</p>
                        </div>
                    )}
                </Container>
            </main>
        </div>
    );
}

import { Package } from "lucide-react";
