import { Container } from "./Container";
import { MessageSquare, ThumbsUp, LayoutDashboard, Bell, BarChart3, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Public Feature Board",
        description: "Launch a dedicated page for your product where users can submit and view feature requests.",
        icon: MessageSquare,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Upvote System",
        description: "Let your community tell you what matters most. Anyone can upvote existing requests with a single click.",
        icon: ThumbsUp,
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        title: "Founder Dashboard",
        description: "Manage all requests in one place. Sort by most voted or newest to prioritize your backlog.",
        icon: LayoutDashboard,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: "Status Updates",
        description: "Keep users in the loop. Automatically notify voters when a feature moves to 'Planned' or 'Completed'.",
        icon: Bell,
        color: "bg-green-500/10 text-green-500",
    },
    {
        title: "Light Insights",
        description: "Track trends and identify user pain points with simple, valuable requested feature summaries.",
        icon: BarChart3,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Simple Access Control",
        description: "Public boards for everyone, while founder dashboards are secured with Supabase authentication.",
        icon: ShieldCheck,
        color: "bg-cyan-500/10 text-cyan-500",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary tracking-wide uppercase mb-3">Core Features</h2>
                    <p className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to ship what users love</p>
                    <p className="text-lg text-muted-foreground">
                        Simple, powerful features designed to help early-stage founders build better products through user collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-border bg-card hover:bg-card/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
