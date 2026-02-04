import Image from "next/image";
import { Container } from "./Container";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ProductPreview() {
    return (
        <section className="py-24 bg-muted/30">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            Premium Dashboard Interface
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
                            Everything you need to <span className="text-primary italic">manage feedback</span> in one place
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Stop using scattered spreadsheets and chaotic email threads. ShipNext provides a centralized hub to track, categorize, and act on user feedback with ease.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Visual roadmap management",
                                "One-click status updates",
                                "Community voting insights",
                                "Public/Private board toggle"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 group" asChild>
                                <Link href="/signup">
                                    Explore the dashboard
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative w-full aspect-video rounded-3xl border border-border bg-card shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5 transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 bg-muted">
                                <Image
                                    src="/dashboard.png"
                                    alt="Dashboard Preview"
                                    fill
                                    className="mt-2.5 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    priority
                                />
                            </div>
                            {/* Visual Glass Effect Top Bar */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}