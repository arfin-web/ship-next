import { Ship } from "lucide-react";

export default function RootLoading() {
    return (
        <div className="fixed inset-0 min-h-screen w-full bg-background flex flex-col items-center justify-center z-[100]">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="relative flex flex-col items-center space-y-8 animate-in fade-in zoom-in duration-500">
                {/* Logo with Animation */}
                <div className="relative group">
                    {/* Pulsing Outer Rings */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl animate-pulse scale-110" />
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl animate-pulse scale-150 delay-700" />

                    {/* Core Logo Box */}
                    <div className="relative bg-card border border-border p-5 rounded-2xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 duration-300">
                        <Ship className="w-12 h-12 text-primary animate-bounce-slow" />
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold tracking-tight bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent italic">
                        ShipNext
                    </h3>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Minimalist Footer Text */}
            <div className="absolute bottom-12 text-center opacity-30 select-none">
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Navigating your success
                </p>
            </div>

        </div>
    );
}
