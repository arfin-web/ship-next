import { ThumbsUp, MessageSquare, Clock } from "lucide-react";
import { StatusUpdateDropdown } from "./StatusUpdateDropdown";
import { formatDistanceToNow } from "date-fns";

interface Feature {
    id: string;
    title: string;
    description: string | null;
    status: string;
    createdAt: Date;
    _count: {
        votes: number;
    };
}

interface FeatureTableProps {
    features: Feature[];
}

export function FeatureTable({ features }: FeatureTableProps) {
    if (features.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-xl text-muted-foreground">
                <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-medium italic">No feature requests yet.</p>
            </div>
        );
    }

    return (
        <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-muted/50 border-b border-border">
                        <tr>
                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Title & Description</th>
                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px] text-center">Votes</th>
                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px] text-center">Status</th>
                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px] text-right whitespace-nowrap">Requested</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {features.map((feature) => (
                            <tr key={feature.id} className="hover:bg-accent/5 transition-colors group">
                                <td className="px-6 py-5 align-top">
                                    <div className="max-w-md">
                                        <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                                        <p className="text-muted-foreground line-clamp-2 text-[13px] leading-relaxed italic">
                                            {feature.description || "No description provided."}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-5 align-top text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10">
                                        <ThumbsUp className="w-3.5 h-3.5" />
                                        {feature._count.votes}
                                    </div>
                                </td>
                                <td className="px-6 py-5 align-top text-center">
                                    <StatusUpdateDropdown featureId={feature.id} currentStatus={feature.status} />
                                </td>
                                <td className="px-6 py-5 align-top text-right whitespace-nowrap">
                                    <div className="flex items-center justify-end gap-1.5 text-muted-foreground/60 text-[11px] font-medium italic">
                                        <Clock className="w-3 h-3" />
                                        {formatDistanceToNow(new Date(feature.createdAt), { addSuffix: true })}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
