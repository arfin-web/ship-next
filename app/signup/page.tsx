import { signUp } from "@/app/actions/authActions";
import { AuthCard } from "@/components/auth/AuthCard";
import { SubmitButton } from "@/components/landing-page/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
    return (
        <AuthCard
            title="Create your account"
            subtitle="Start collecting feedback and building better products today"
        >
            <form action={signUp} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="h-11"
                    />
                </div>
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
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="h-11"
                    />
                </div>
                <SubmitButton />
            </form>

            <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="font-semibold text-primary hover:underline underline-offset-4">
                        Sign in
                    </Link>
                </p>
            </div>
        </AuthCard>
    );
}
