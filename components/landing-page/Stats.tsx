import { Container } from "./Container";

export function Stats() {
    return (
        <section className="py-20 bg-primary/5">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">User Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-primary mb-2">10k+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Features Shipped</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-primary mb-2">500+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">SaaS Founders</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Active Voting</div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
