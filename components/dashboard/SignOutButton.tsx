"use client"

import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { signOut } from "@/app/actions/authActions"

export function SignOutButton() {
    return (
        <div className="p-4 border-t border-border">
            <Button onClick={() => signOut()} variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/5 cursor-pointer">
                <LogOut className="w-4 h-4 mr-3" />
                Sign out
            </Button>
        </div>
    )
}