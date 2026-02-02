"use client";

import { Bell, Search, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface DashboardHeaderProps {
    productName?: string;
    productSlug?: string;
}

export function DashboardHeader({ productName, productSlug }: DashboardHeaderProps) {
    return (
        <header className="h-20 border-b border-border bg-card flex items-center justify-between px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold tracking-tight">
                    {productName || "Select a Product"}
                </h2>
                {productSlug && (
                    <Button variant="outline" size="sm" className="h-8 gap-2 text-xs" asChild>
                        <Link href={`/board/${productSlug}`} target="_blank">
                            Public Board
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                    </Button>
                )}
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden lg:block w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search requests..."
                        className="pl-10 h-10 bg-muted/50 border-none focus-visible:ring-1"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-card" />
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <User className="w-4 h-4 text-primary" />
                    </div>
                </div>
            </div>
        </header>
    );
}
