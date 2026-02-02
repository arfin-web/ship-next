"use client";

import { useState } from "react";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateFeatureStatus } from "@/app/actions/featureActions";
import { cn } from "@/lib/utils";

const statuses = [
    { value: "OPEN", label: "Open", color: "bg-slate-500/10 text-slate-500 border-slate-500/20" },
    { value: "PLANNED", label: "Planned", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { value: "IN_PROGRESS", label: "In Progress", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { value: "COMPLETED", label: "Completed", color: "bg-green-500/10 text-green-500 border-green-500/20" },
];

interface StatusUpdateDropdownProps {
    featureId: string;
    currentStatus: string;
}

export function StatusUpdateDropdown({ featureId, currentStatus }: StatusUpdateDropdownProps) {
    const [isUpdating, setIsUpdating] = useState(false);
    const activeStatus = statuses.find((s) => s.value === currentStatus) || statuses[0];

    async function handleStatusChange(newStatus: string) {
        if (newStatus === currentStatus) return;

        setIsUpdating(true);
        try {
            await updateFeatureStatus(featureId, newStatus);
        } catch (error) {
            console.error("Failed to update status", error);
        } finally {
            setIsUpdating(false);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                        "h-7 px-2.5 gap-2 text-[11px] font-bold uppercase tracking-wider border transition-all",
                        activeStatus.color,
                        isUpdating && "opacity-70 pointer-events-none"
                    )}
                >
                    {isUpdating ? <Loader2 className="w-3 h-3 animate-spin" /> : activeStatus.label}
                    <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 p-1">
                {statuses.map((status) => (
                    <DropdownMenuItem
                        key={status.value}
                        className="flex items-center justify-between gap-2 px-2 py-1.5 cursor-pointer text-xs"
                        onClick={() => handleStatusChange(status.value)}
                    >
                        <span className="font-medium">{status.label}</span>
                        {currentStatus === status.value && <Check className="w-3.5 h-3.5 text-primary" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
