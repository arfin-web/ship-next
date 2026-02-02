"use client";

import { useState } from "react";
import { User, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { updateUserProfile } from "@/app/actions/userActions";

interface SettingsFormProps {
    user: {
        name: string;
        email: string;
        image?: string | null;
    };
}

export function SettingsForm({ user }: SettingsFormProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(event.currentTarget);
        try {
            await updateUserProfile(formData);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error("Failed to update profile", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className="border-border shadow-sm">
            <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Profile Information
                </CardTitle>
                <CardDescription className="italic text-sm">
                    Update your public name and avatar.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                defaultValue={user.name}
                                placeholder="Your Name"
                                required
                                className="h-11 border-border bg-muted/30 focus-visible:ring-primary/20"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={user.email}
                                disabled
                                className="h-11 border-border bg-muted/10 opacity-60 cursor-not-allowed"
                            />
                            <p className="text-[10px] text-muted-foreground italic">Email changes are currently disabled.</p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Avatar URL</Label>
                            <Input
                                id="image"
                                name="image"
                                defaultValue={user.image || ""}
                                placeholder="https://example.com/avatar.jpg"
                                className="h-11 border-border bg-muted/30 focus-visible:ring-primary/20"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <Button
                            type="submit"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold px-8"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : "Save Changes"}
                        </Button>
                        {success && (
                            <div className="flex items-center gap-2 text-green-500 text-sm font-bold animate-in fade-in zoom-in duration-300">
                                <CheckCircle2 className="w-4 h-4" />
                                Profile updated!
                            </div>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
