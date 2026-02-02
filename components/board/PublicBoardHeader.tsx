import { Container } from "@/components/landing-page/Container";
import { Ship } from "lucide-react";
import Link from "next/link";
import { SubmitFeatureModal } from "./SubmitFeatureModal";

interface PublicBoardHeaderProps {
    productName: string;
    productDescription: string | null;
    productId: string;
}

export function PublicBoardHeader({ productName, productDescription, productId }: PublicBoardHeaderProps) {
    return (
        <header className="bg-background border-b border-border sticky top-0 z-40">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center justify-between py-6 md:h-24 gap-4">
                    <div className="space-y-1">
                        <Link href="/" className="flex items-center gap-2 group mb-1">
                            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Ship className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-bold tracking-tight">ShipNext</span>
                        </Link>
                        <h1 className="text-2xl font-black tracking-tighter">{productName}</h1>
                        {productDescription && (
                            <p className="text-muted-foreground text-xs font-medium italic max-w-lg">
                                {productDescription}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <SubmitFeatureModal productId={productId} />
                    </div>
                </div>
            </Container>
        </header>
    );
}
