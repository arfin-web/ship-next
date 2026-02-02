"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { voteForFeature } from "@/app/actions/featureActions";
import { VoterEmailDialog } from "./VoterEmailDialog";

interface VoteButtonProps {
    featureId: string;
    initialVoteCount: number;
}

export function VoteButton({ featureId, initialVoteCount }: VoteButtonProps) {
    const [isVoting, setIsVoting] = useState(false);
    const [showEmailDialog, setShowEmailDialog] = useState(false);
    const [email, setEmail] = useState("");

    // Load email from localStorage on mount
    useEffect(() => {
        const savedEmail = localStorage.getItem("shipnext_voter_email");
        if (savedEmail) {
            setEmail(savedEmail);
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
                <span className="text-xs font-black tracking-tighter">{initialVoteCount}</span>
            </Button>

            <VoterEmailDialog
                open={showEmailDialog}
                onOpenChange={setShowEmailDialog}
                email={email}
                isVoting={isVoting}
                onSubmit={submitVote}
            />
        </>
    );
}
