import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-primary -z-10" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-white/10 -skew-x-12 translate-x-1/2 -z-10" />

            <Container>
                <div className="text-center text-primary-foreground max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to ship what your users actually want?</h2>
                    <p className="text-xl text-primary-foreground/80 mb-10">
                        Join 500+ founders who are building better products with ShipNext. Start your free board today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-bold text-primary hover:bg-white shadow-xl group" asChild>
                            <Link href="/signup">
                                Get Started for Free
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base font-bold bg-transparent text-white border-white/30 hover:bg-white/10" asChild>
                            <Link href="/coming-soon">View Live Demo</Link>
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-primary-foreground/60 italic font-medium">
                        No credit card required. Cancel anytime.
                    </p>
                </div>
            </Container>
        </section>
    );
}
