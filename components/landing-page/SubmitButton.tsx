'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

export function SubmitButton() {
    const { pending } = useFormStatus()
    if (pending) {
        return (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className={`bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]`}>
                    <div className="flex items-center justify-center">
                        <h3 className="text-lg text-muted-foreground font-semibold">Please wait...</h3>
                        <Loader2 className="h-8 w-8 animate-spin" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Button type="submit" disabled={pending} className="w-full h-11 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            {pending ? 'Submitting...' : 'Submit'}
        </Button>
    );
}