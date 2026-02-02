"use client";

import { useState } from "react";
import { Plus, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createFeatureRequest } from "@/app/actions/featureActions";

interface SubmitFeatureModalProps {
    productId: string;
}

export function SubmitFeatureModal({ productId }: SubmitFeatureModalProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        try {
            await createFeatureRequest(productId, formData);
            setOpen(false);
        } catch (error) {
            console.error("Failed to submit feature", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    <Plus className="w-4 h-4" />
                    Submit Idea
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            Suggest an Idea
                        </DialogTitle>
                        <DialogDescription className="italic text-xs font-medium">
                            Have a feature in mind? Share it with the founder and help shape the product.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Dark mode support"
                                required
                                className="h-11 border-border bg-muted/30 focus-visible:ring-primary/20"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Briefly describe how this feature would work and why it's important..."
                                className="min-h-[120px] border-border bg-muted/30 focus-visible:ring-primary/20 italic"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Post Idea"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
