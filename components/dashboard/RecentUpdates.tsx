import { History, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { FeatureStatus } from "@/types";
import { cn } from "@/lib/utils";

interface Update {
    id: string;
    featureId: string;
    oldStatus: FeatureStatus;
    newStatus: FeatureStatus;
    message: string | null;
    createdAt: Date;
    feature: {
        title: string;
    };
}

interface RecentUpdatesProps {
    updates: Update[];
}

const statusConfig: Record<string, { label: string; color: string }> = {
    OPEN: { label: "Under Review", color: "text-slate-500" },
    PLANNED: { label: "Planned", color: "text-orange-500" },
    IN_PROGRESS: { label: "In Progress", color: "text-purple-500" },
    COMPLETED: { label: "Completed", color: "text-green-500" },
};

export function RecentUpdates({ updates }: RecentUpdatesProps) {
    return (
        <Card className="border-border shadow-sm">
            <CardHeader className="flex flex-row items-center gap-2 pb-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                    <History className="w-4 h-4 text-blue-500" />
                </div>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80 italic">
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {updates.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic text-center py-4">No updates recently.</p>
                ) : (
                    updates.map((update) => (
                        <div key={update.id} className="relative pl-6 space-y-1">
                            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-muted border-2 border-primary/20" />
                            {update !== updates[updates.length - 1] && (
                                <div className="absolute left-[3px] top-4 w-[2px] h-full bg-muted" />
                            )}

                            <div className="flex items-center justify-between gap-2">
                                <p className="text-xs font-bold truncate">
                                    {update.feature.title}
                                </p>
                                <span className="text-[10px] font-black uppercase text-muted-foreground/40 shrink-0">
                                    {formatDistanceToNow(new Date(update.createdAt), { addSuffix: true })}
                                </span>
                            </div>

                            <p className="text-[10px] font-medium italic text-muted-foreground leading-relaxed">
                                Status changed from <span className={cn("font-bold uppercase tracking-widest", statusConfig[update.oldStatus]?.color)}>{statusConfig[update.oldStatus]?.label}</span> to <span className={cn("font-bold uppercase tracking-widest", statusConfig[update.newStatus]?.color)}>{statusConfig[update.newStatus]?.label}</span>
                            </p>
                        </div>
                    ))
                )}
            </CardContent>
        </Card>
    );
}
