import { Package, MessageSquare, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardStatsProps {
    totalProducts: number;
    totalFeatures: number;
    totalVotes: number;
}

export function DashboardStats({ totalProducts, totalFeatures, totalVotes }: DashboardStatsProps) {
    const stats = [
        {
            label: "Total Products",
            value: totalProducts,
            icon: Package,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            label: "Total Requests",
            value: totalFeatures,
            icon: MessageSquare,
            color: "text-primary",
            bg: "bg-primary/10",
        },
        {
            label: "Total Upvotes",
            value: totalVotes,
            icon: ThumbsUp,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <Card key={stat.label} className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-widest italic">{stat.label}</CardTitle>
                        <div className={`p-2 rounded-lg ${stat.bg}`}>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
