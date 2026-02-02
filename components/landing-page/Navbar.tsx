import Link from "next/link";
import { Ship, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { getUser } from "@/lib/getUser";

export async function Navbar() {
    const user = await getUser()
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Ship className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">ShipNext</span>
                    </Link>

                    {/* Mobile Menu Toggle (Checkbox Hack) */}
                    <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
                        <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it works</Link>
                        <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
                        {user ? (
                            <Button size="sm" className="shadow-lg shadow-primary/20" asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                        ) : (
                            <div className="flex items-center gap-4 border-l border-border pl-8">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/login">Log in</Link>
                                </Button>
                                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                                    <Link href="/signup">Get Started</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button - Label for Checkbox */}
                    <label
                        htmlFor="mobile-menu-toggle"
                        className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer select-none peer-checked:[&_.menu-icon]:hidden peer-checked:[&_.close-icon]:block"
                    >
                        <Menu className="w-6 h-6 menu-icon" />
                        <X className="w-6 h-6 close-icon hidden" />
                    </label>
                </div>

                {/* Mobile Nav - Visible when checkbox is checked */}
                <div className="md:hidden hidden peer-checked:block py-4 border-t border-border animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col gap-4">
                        <Link href="#features" className="text-base font-medium text-muted-foreground hover:text-primary">Features</Link>
                        <Link href="#how-it-works" className="text-base font-medium text-muted-foreground hover:text-primary">How it works</Link>
                        <Link href="#pricing" className="text-base font-medium text-muted-foreground hover:text-primary">Pricing</Link>
                        <div className="flex flex-col gap-2 pt-4 border-t border-border">
                            <Button variant="ghost" className="justify-start" asChild>
                                <Link href="/login">Log in</Link>
                            </Button>
                            <Button className="w-full bg-primary text-primary-foreground" asChild>
                                <Link href="/signup">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}
