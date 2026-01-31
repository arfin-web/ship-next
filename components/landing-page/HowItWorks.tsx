import { Container } from "./Container";
import { PlusCircle, Vote, CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "1. Users request",
        description: "Your users submit their feedback and ideas directly on your public board.",
        icon: PlusCircle,
    },
    {
        title: "2. Community votes",
        description: "Other users upvote requests they also want to see, helping you prioritize.",
        icon: Vote,
    },
    {
        title: "3. You ship & notify",
        description: "You build the feature and update the status. Voters get notified automatically.",
        icon: CheckCircle2,
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
                    <p className="text-lg text-muted-foreground">
                        A simple 3-step loop to bridge the gap between you and your users.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-border to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-6 shadow-xl shadow-primary/20 relative z-10">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
