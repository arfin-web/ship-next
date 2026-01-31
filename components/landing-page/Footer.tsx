import Link from "next/link";
import { Container } from "./Container";
import { Ship, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-card">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Ship className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">ShipNext</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                            Empowering early-stage SaaS founders to build products that users love through collaborative feedback and roadmap prioritization.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-xs">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-xs">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} ShipNext. All rights reserved. Made for founders by founders.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Status</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Cookies</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">Security</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
