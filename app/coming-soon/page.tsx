import Link from "next/link";
import { Ship, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing-page/Container";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5" />
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    {/* Logo Section */}
                    <div className="group">
                        <div className="bg-primary/10 p-5 rounded-2xl group-hover:bg-primary/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-xl shadow-primary/10">
                            <Ship className="w-12 h-12 text-primary" />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
                            COMING SOON
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
                            We're currently building something extraordinary for you.
                            <br className="hidden md:block" /> Stay tuned for the revolution in product shipping.
                        </p>
                    </div>

                    {/* Action Section */}
                    <div className="pt-4">
                        <Button asChild size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold gap-2">
                            <Link href="/">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Minimalist Footer */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/30">
                    © 2026 ShipNext. All rights reserved.
                </p>
            </div>
        </main>
    );
}
