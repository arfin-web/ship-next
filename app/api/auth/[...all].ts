import { auth } from "@/lib/auth"; // import your auth config

export default defineEventHandler((event) => {
    return auth.handler(toWebRequest(event));
});

function defineEventHandler(arg0: (event: any) => Promise<Response>) {
    throw new Error("Function not implemented.");
}

function toWebRequest(event: any): Request {
    throw new Error("Function not implemented.");
}
