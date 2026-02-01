import { signIn } from "@/app/actions/authActions";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
    return (
        <AuthCard
            title="Welcome back"
            subtitle="Sign in to your founder account to manage feature requests"
        >
            <form action={signIn} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="h-11"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-sm font-medium text-primary hover:underline underline-offset-4">
                            Forgot password?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="h-11"
                    />
                </div>
                <Button type="submit" className="w-full h-11 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Sign in
                </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-semibold text-primary hover:underline underline-offset-4">
                        Sign up for free
                    </Link>
                </p>
            </div>
        </AuthCard>
    );
}
