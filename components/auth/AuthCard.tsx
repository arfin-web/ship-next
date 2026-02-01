import { ReactNode } from "react";
import { Ship } from "lucide-react";
import Link from "next/link";

interface AuthCardProps {
    children: ReactNode;
    title: string;
    subtitle: string;
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/40">
            {/* Logo Link */}
            <Link href="/" className="mb-8 flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Ship className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight">ShipNext</span>
            </Link>

            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-8 pb-0 text-center">
                    <h1 className="text-2xl font-bold tracking-tight mb-2">{title}</h1>
                    <p className="text-muted-foreground">{subtitle}</p>
                </div>
                <div className="p-8">
                    {children}
                </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground text-center">
                By continuing, you agree to our{" "}
                <Link href="#" className="underline underline-offset-4 hover:text-primary transition-colors">Terms of Service</Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-4 hover:text-primary transition-colors">Privacy Policy</Link>.
            </p>
        </div>
    );
}
