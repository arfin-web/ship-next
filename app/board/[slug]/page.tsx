import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PublicBoardHeader } from "@/components/board/PublicBoardHeader";
import { PublicFeatureList } from "@/components/board/PublicFeatureList";
import { Container } from "@/components/landing-page/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/landing-page/Footer";

export default async function PublicBoardPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: { slug },
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

    const features = product.features;
    const openFeatures = features.filter((f) => f.status === "OPEN");
    const inProgressFeatures = features.filter((f) => f.status === "IN_PROGRESS" || f.status === "PLANNED");
    const completedFeatures = features.filter((f) => f.status === "COMPLETED");

    return (
        <div className="min-h-screen bg-muted/20">
            <PublicBoardHeader
                productName={product.name}
                productDescription={product.description}
                productId={product.id}
            />

            <main className="py-12">
                <Container>
                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <TabsList className="bg-background border border-border h-12 p-1">
                                <TabsTrigger value="all" className="px-6 font-bold text-xs uppercase tracking-widest">All Ideas</TabsTrigger>
                                <TabsTrigger value="under-review" className="px-6 font-bold text-xs uppercase tracking-widest">Under Review</TabsTrigger>
                                <TabsTrigger value="in-progress" className="px-6 font-bold text-xs uppercase tracking-widest">In Progress</TabsTrigger>
                                <TabsTrigger value="completed" className="px-6 font-bold text-xs uppercase tracking-widest">Completed</TabsTrigger>
                            </TabsList>

                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest italic flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                {features.length} Community Ideas
                            </div>
                        </div>

                        <TabsContent value="all" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <PublicFeatureList features={features} />
                        </TabsContent>
                        <TabsContent value="under-review" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <PublicFeatureList features={openFeatures} />
                        </TabsContent>
                        <TabsContent value="in-progress" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <PublicFeatureList features={inProgressFeatures} />
                        </TabsContent>
                        <TabsContent value="completed" className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <PublicFeatureList features={completedFeatures} />
                        </TabsContent>
                    </Tabs>
                </Container>
            </main>

            <Footer />
        </div>
    );
}