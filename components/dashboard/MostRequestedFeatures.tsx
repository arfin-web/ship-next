import { ThumbsUp, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureWithCounts } from "@/types";

interface MostRequestedFeaturesProps {
    features: FeatureWithCounts[];
}

export function MostRequestedFeatures({ features }: MostRequestedFeaturesProps) {
    return (
        <Card className="border-border shadow-sm">
            <CardHeader className="flex flex-row items-center gap-2 pb-4">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                    <Trophy className="w-4 h-4 text-orange-500" />
                </div>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80 italic">
                    Most Requested
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {features.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic text-center py-4">No requests with votes yet.</p>
                ) : (
                    features.map((feature, index) => (
                        <div key={feature.id} className="flex items-center justify-between gap-4 group">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="text-xs font-black text-muted-foreground/30 w-4">
                                    {index + 1}
                                </span>
                                <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">
                                    {feature.title}
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 text-[10px] font-black shrink-0">
                                <ThumbsUp className="w-3 h-3 text-primary" />
                                {feature._count.votes}
                            </div>
                        </div>
                    ))
                )}
            </CardContent>
        </Card>
    );
}
