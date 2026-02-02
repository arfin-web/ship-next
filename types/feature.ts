export type FeatureStatus = 'OPEN' | 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';

export interface FeatureCount {
    votes: number;
}

export interface FeatureRequest {
    id: string;
    title: string;
    description: string | null;
    status: FeatureStatus;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: FeatureCount;
}

export interface FeatureWithCounts extends FeatureRequest {
    _count: FeatureCount;
}

export interface Vote {
    id: string;
    featureId: string;
    voterEmail: string;
    createdAt: Date;
}

export interface StatusUpdate {
    id: string;
    featureId: string;
    oldStatus: FeatureStatus;
    newStatus: FeatureStatus;
    message: string | null;
    createdAt: Date;
}
