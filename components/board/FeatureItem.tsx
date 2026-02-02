import { Clock, MessageSquare, ThumbsUp as ThumbsUpIcon, CheckCircle2 } from "lucide-react";
import { VoteButton } from "./VoteButton";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { FeatureWithCounts } from "@/types";

interface FeatureItemProps {
    feature: FeatureWithCounts;
}

const statusConfig: Record<string, { label: string; icon: any; color: string; border: string }> = {
    OPEN: { label: "Under Review", icon: Clock, color: "text-slate-500 bg-slate-500/10", border: "border-slate-500/20" },
    PLANNED: { label: "Planned", icon: MessageSquare, color: "text-orange-500 bg-orange-500/10", border: "border-orange-500/20" },
    IN_PROGRESS: { label: "In Progress", icon: ThumbsUpIcon, color: "text-purple-500 bg-purple-500/10", border: "border-purple-500/20" },
    COMPLETED: { label: "Completed", icon: CheckCircle2, color: "text-green-500 bg-green-500/10", border: "border-green-500/20" },
};

export function FeatureItem({ feature }: FeatureItemProps) {
    const config = statusConfig[feature.status] || statusConfig.OPEN;
    return (
        <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
            <VoteButton featureId={feature.id} initialVoteCount={feature._count.votes} />

            <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                        {feature.title}
                    </h3>
                    <div className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shrink-0",
                        config.color,
                        config.border
                    )}>
                        <config.icon className="w-3 h-3" />
                        {config.label}
                    </div>
                </div>

                <p className="text-muted-foreground text-[13px] leading-relaxed italic line-clamp-2">
                    {feature.description || "No description provided."}
                </p>

                <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest pt-1">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDistanceToNow(new Date(feature.createdAt), { addSuffix: true })}
                    </span>
                </div>
            </div>
        </div>
    );
}
