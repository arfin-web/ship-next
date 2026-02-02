import { MessageSquare, Clock, CheckCircle2, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsOverviewProps {
    totalRequests: number;
    planned: number;
    inProgress: number;
    completed: number;
}

export function StatsOverview({ totalRequests, planned, inProgress, completed }: StatsOverviewProps) {
    const stats = [
        {
            title: "Total Requests",
            value: totalRequests,
            icon: MessageSquare,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Planned",
            value: planned,
            icon: Clock,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "In Progress",
            value: inProgress,
            icon: ThumbsUp,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            title: "Completed",
            value: completed,
            icon: CheckCircle2,
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <Card key={stat.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-muted-foreground italic">
                            {stat.title}
                        </CardTitle>
                        <div className={`p-2 rounded-lg ${stat.bg}`}>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
