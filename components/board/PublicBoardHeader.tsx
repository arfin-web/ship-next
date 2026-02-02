import { Container } from "@/components/landing-page/Container";
import { SubmitFeatureModal } from "./SubmitFeatureModal";
import { Navbar } from "../landing-page/Navbar";

interface PublicBoardHeaderProps {
    productName: string;
    productDescription: string | null;
    productId: string;
}

export function PublicBoardHeader({ productName, productDescription, productId }: PublicBoardHeaderProps) {
    return (
        <>
            <Navbar />
            <header className="bg-background border-b border-border sticky top-0 z-40">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between py-6 mt-20 md:h-24 gap-4">
                        <div className="space-y-1">
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
        </>
    );
}
