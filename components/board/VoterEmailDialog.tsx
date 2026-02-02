"use client";

import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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

interface VoterEmailDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    email: string;
    isVoting: boolean;
    onSubmit: (email: string) => void;
}

export function VoterEmailDialog({ open, onOpenChange, email, isVoting, onSubmit }: VoterEmailDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[400px]">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const emailInput = formData.get("email") as string;
                    onSubmit(emailInput);
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
    );
}
