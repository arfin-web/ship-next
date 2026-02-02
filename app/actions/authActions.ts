"use server";
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
        }
    })
    redirect("/dashboard");
}

export const signIn = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await auth.api.signInEmail({
        body: {
            email,
            password,
        }
    })
    redirect("/dashboard");
}

export const signOut = async () => {
    await auth.api.signOut();
    redirect("/");
}