export interface ProductCount {
    features: number;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: ProductCount;
}

export interface ProductWithCounts extends Product {
    _count: ProductCount;
}
