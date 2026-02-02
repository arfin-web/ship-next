"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { voteForFeature } from "@/app/actions/featureActions";
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

    // Load email from localStorage on mount
    useEffect(() => {
        const savedEmail = localStorage.getItem("shipnext_voter_email");
        if (savedEmail) {
            setEmail(savedEmail);
            // We don't know for sure if they voted on THIS specific feature,
            // but we have their email. The server action handles toggling.
        }
    }, []);

    async function handleVoteClick() {
        const savedEmail = localStorage.getItem("shipnext_voter_email");
        if (!savedEmail) {
            setShowEmailDialog(true);
            return;
        }

        submitVote(savedEmail);
    }

    async function submitVote(voterEmail: string) {
        setIsVoting(true);
        try {
            await voteForFeature(featureId, voterEmail);
            localStorage.setItem("shipnext_voter_email", voterEmail);
            // Optimistic update is tricky for toggle, but server revalidates.
            // For now, let the page revalidate.
        } catch (error) {
            console.error("Voting failed", error);
        } finally {
            setIsVoting(false);
            setShowEmailDialog(false);
        }
    }

    return (
        <>
            <Button
                variant="outline"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-[50px] border-border hover:border-primary hover:bg-primary/5 transition-all active:scale-95 group"
                onClick={handleVoteClick}
                disabled={isVoting}
            >
                {isVoting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                ) : (
                    <ThumbsUp className="w-4 h-4 group-hover:text-primary transition-colors" />
                )}
                <span className="text-xs font-black tracking-tighter">{votes}</span>
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
