import { MessageSquare } from "lucide-react";
import { FeatureItem } from "./FeatureItem";
import { FeatureWithCounts } from "@/types";

interface PublicFeatureListProps {
    features: FeatureWithCounts[];
}

export function PublicFeatureList({ features }: PublicFeatureListProps) {
    if (features.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-muted/20 border-2 border-dashed border-border rounded-3xl text-center px-6">
                <MessageSquare className="w-16 h-16 text-muted-foreground/20 mb-4" />
                <h3 className="text-xl font-bold mb-2">No ideas yet</h3>
                <p className="text-muted-foreground text-sm font-medium italic max-w-xs">
                    Be the first to suggest a brilliant feature or improvement!
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
            ))}
        </div>
    );
}