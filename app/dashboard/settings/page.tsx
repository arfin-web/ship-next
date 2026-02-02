import { SettingsForm } from "@/components/dashboard/SettingsForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/getUser";

export default async function SettingsPage() {
    const user = await getUser()

    if (!user) return null;

    return (
        <div className="max-w-4xl space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight mb-1">Account Settings</h1>
                <p className="text-muted-foreground text-sm font-medium italic">Manage your profile and security preferences.</p>
            </div>

            <SettingsForm user={user} />

            <Card className="border-destructive/20 border-2 bg-destructive/5 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2 text-destructive">
                        <Shield className="w-5 h-5" />
                        Danger Zone
                    </CardTitle>
                    <CardDescription className="text-destructive/80 italic text-sm">
                        Irreversible actions for your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-destructive/20 bg-background/50">
                        <div className="space-y-1">
                            <p className="font-bold text-sm">Delete Account</p>
                            <p className="text-xs text-muted-foreground italic">Permanently remove your account and all associated products.</p>
                        </div>
                        <Button variant="destructive" className="font-black h-11 px-6 shadow-lg shadow-destructive/20">
                            Delete My Account
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
