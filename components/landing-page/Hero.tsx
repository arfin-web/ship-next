import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { ArrowRight, ChevronRight, PlayCircle, Ship } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <Container>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        ShipNext V1.0 is now live
                        <ChevronRight className="w-3 h-3" />
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.1]">
                        Build better products with <span className="text-primary italic">User Feedback</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                        The simplest way to collect feature requests, let users vote, and prioritize your roadmap. Built for early-stage SaaS founders.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 group" asChild>
                            <Link href="/signup">
                                Start building for free
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base group" asChild>
                            <Link href="#demo">
                                <PlayCircle className="mr-2 w-5 h-5 text-muted-foreground" />
                                See how it works
                            </Link>
                        </Button>
                    </div>

                    {/* Product Mockup Placeholder */}
                    <div className="mt-20 relative w-full aspect-video rounded-3xl border border-border bg-card shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-4 text-muted-foreground/50">
                                <Ship className="w-16 h-16" />
                                <p className="font-medium">Product Dashboard Preview</p>
                            </div>
                        </div>
                        {/* Visual Glass Effect Top Bar */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
