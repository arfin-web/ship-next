import { getProducts } from "@/app/actions/productActions";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ productId?: string }>;
}) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    const products = await getProducts();
    const currentProductId = (await params).productId;
    const currentProduct = products.find(p => p.id === currentProductId);

    return (
        <div className="min-h-screen bg-muted/40 flex">
            <DashboardSidebar products={products} currentProductId={currentProductId} />
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                <DashboardHeader
                    productName={currentProduct?.name}
                    productSlug={currentProduct?.slug}
                />
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
