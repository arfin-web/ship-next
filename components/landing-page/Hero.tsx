import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden pb-24 bg-linear-to-b from-background to-background/50">

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-8 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-1000">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            ShipNext V1.0 is now live
                            <ChevronRight className="w-3 h-3" />
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.1]">
                            Build better products with <span className="text-primary italic">User Feedback</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            The simplest way to collect feature requests, let users vote, and prioritize your roadmap. Built for early-stage SaaS founders.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 group" asChild>
                                <Link href="/signup">
                                    Start building for free
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base group" asChild>
                                <Link href="/coming-soon">
                                    <PlayCircle className="mr-2 w-5 h-5 text-muted-foreground" />
                                    See how it works
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div className="lg:col-span-5 relative w-full aspect-square lg:aspect-auto lg:h-[700px] animate-in fade-in zoom-in duration-1000 order-1 lg:order-2">
                        <div className="relative w-full h-full overflow-hidden group">
                            <Image
                                src="/hero.png"
                                alt="ShipNext Platform Preview"
                                fill
                                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
