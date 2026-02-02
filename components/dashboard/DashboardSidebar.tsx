"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Settings, LogOut, Ship } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Product } from "@/types";

interface DashboardSidebarProps {
    products: Product[];
    currentProductId?: string;
}

export function DashboardSidebar({ products, currentProductId }: DashboardSidebarProps) {
    const pathname = usePathname();

    const mainNav = [
        { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
        { label: "Products", icon: Package, href: "/dashboard/products" },
        { label: "Settings", icon: Settings, href: "/dashboard/settings" },
    ];

    return (
        <aside className="w-64 border-r border-border bg-card flex flex-col h-screen fixed left-0 top-0 z-40">
            <div className="p-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Ship className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">ShipNext</span>
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-8">
                {/* Main Navigation */}
                <nav className="space-y-1">
                    {mainNav.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Products List */}
                <div className="space-y-2">
                    <div className="px-3 flex items-center justify-between">
                        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-muted-foreground/40">Recent Products</h4>
                    </div>
                    <nav className="space-y-1">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/dashboard/products/${product.id}`}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                    currentProductId === product.id
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                <Package className="w-4 h-4" />
                                <span className="truncate">{product.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-border">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/5" asChild>
                    <Link href="/api/auth/sign-out">
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign out
                    </Link>
                </Button>
            </div>
        </aside>
    );
}
