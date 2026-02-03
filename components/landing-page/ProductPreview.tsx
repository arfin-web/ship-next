import Image from "next/image";

export function ProductPreview() {
    return (
        <div className="mt-20 relative w-full aspect-video rounded-3xl border border-border bg-card shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-blue-500/5" />
            <div className="absolute inset-0 bg-muted">
                <Image
                    src="/dashboard.png"
                    alt="Dashboard Preview"
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    priority
                />
            </div>
            {/* Visual Glass Effect Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
        </div>
    );
}