import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Features } from "@/components/landing-page/Features";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Stats } from "@/components/landing-page/Stats";
import { CTA } from "@/components/landing-page/CTA";
import { ProductPreview } from "@/components/landing-page/ProductPreview";
import { Footer } from "@/components/landing-page/Footer";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <ProductPreview />
            <CTA />
            <Footer />
        </main>
    );
}