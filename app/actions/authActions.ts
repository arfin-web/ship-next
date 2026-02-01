"use server";
import { auth } from "@/lib/auth"

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
}

export const signOut = async () => {
    await auth.api.signOut();
}