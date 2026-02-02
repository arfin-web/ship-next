"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { voteForFeature } from "@/app/actions/featureActions";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"

interface VoteButtonProps {
    featureId: string;
    initialVoteCount: number;
}

export function VoteButton({ featureId, initialVoteCount }: VoteButtonProps) {
    const [votes, setVotes] = useState(initialVoteCount);
    const [isVoting, setIsVoting] = useState(false);
    const [showEmailDialog, setShowEmailDialog] = useState(false);
    const [email, setEmail] = useState("");
    const [userVoted, setUserVoted] = useState(false);

    // Sync votes with initialVoteCount when it changes from server revalidation
    useEffect(() => {
        setVotes(initialVoteCount);
    }, [initialVoteCount]);

    // Load email and specific feature vote status from localStorage on mount
    useEffect(() => {
        const savedEmail = localStorage.getItem("shipnext_voter_email");
        if (savedEmail) {
            setEmail(savedEmail);
        }

        const votedFeatures = JSON.parse(localStorage.getItem("shipnext_voted_features") || "[]");
        if (votedFeatures.includes(featureId)) {
            setUserVoted(true);
        }
    }, [featureId]);

    async function handleVoteClick() {
        const savedEmail = localStorage.getItem("shipnext_voter_email");
        if (!savedEmail) {
            setShowEmailDialog(true);
            return;
        } else {
            toast("You have already voted for this feature");
        }

        submitVote(savedEmail);
    }

    async function submitVote(voterEmail: string) {
        setIsVoting(true);

        // Optimistic update
        const isRemovingVote = userVoted;
        setVotes(prev => isRemovingVote ? prev - 1 : prev + 1);
        setUserVoted(!isRemovingVote);

        try {
            await voteForFeature(featureId, voterEmail);

            // Save email
            localStorage.setItem("shipnext_voter_email", voterEmail);

            // Update voted features list in localStorage
            const votedFeatures = JSON.parse(localStorage.getItem("shipnext_voted_features") || "[]");
            let newVotedFeatures;
            if (isRemovingVote) {
                newVotedFeatures = votedFeatures.filter((id: string) => id !== featureId);
            } else {
                newVotedFeatures = [...votedFeatures, featureId];
            }
            localStorage.setItem("shipnext_voted_features", JSON.stringify(newVotedFeatures));

        } catch (error) {
            console.error("Voting failed", error);
            // Revert optimistic update on failure
            setVotes(prev => isRemovingVote ? prev + 1 : prev - 1);
            setUserVoted(isRemovingVote);
        } finally {
            setIsVoting(false);
            setShowEmailDialog(false);
        }
    }

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-[50px] border-border transition-all active:scale-95 group",
                    userVoted ? "bg-primary/10 border-primary shadow-sm" : "hover:border-primary hover:bg-primary/5"
                )}
                onClick={handleVoteClick}
                disabled={isVoting}
            >
                {isVoting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                ) : (
                    <ThumbsUp className={cn(
                        "w-4 h-4 transition-colors",
                        userVoted ? "text-primary fill-primary/20" : "group-hover:text-primary"
                    )} />
                )}
                <span className={cn(
                    "text-xs font-black tracking-tighter",
                    userVoted ? "text-primary" : "text-foreground"
                )}>{votes}</span>
            </Button>

            <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
                <DialogContent className="sm:max-w-[400px]">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const emailInput = formData.get("email") as string;
                        submitVote(emailInput);
                    }}>
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                                <ThumbsUp className="w-5 h-5 text-primary" />
                                Vote for this idea
                            </DialogTitle>
                            <DialogDescription className="italic text-xs font-medium">
                                Please enter your email to register your vote. We only use it to prevent duplicate voting.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                    defaultValue={email}
                                    className="h-11 border-border bg-muted/30 focus-visible:ring-primary/20"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20"
                                disabled={isVoting}
                            >
                                {isVoting ? "Registering..." : "Submit Vote"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
