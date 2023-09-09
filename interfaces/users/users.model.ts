import { IntegrationType } from "../service-providers/service-providers.model";

export interface User {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    // Format 'YYYY-MM-DD',
    movingDate?: string;
    defaultProviderEmail?: string;
    notes?: string;
    data?: ServiceData[];
    services?: UserService[];
    locations?: UserLocation[];
}

export interface UserLocation {
    id: string;
    unitNumber: string;
    street: string;
    streetNumber: string;
    streetType: string;
    city: string;
    postalCode: string;
    country: string;
    jurisdiction: string;
    isCurrent?: boolean;
    isMovingTo?: boolean;
}

export interface Auth0User {
    id: string;
    given_name: string;
    family_name: string;
    name: string;
    email: string;
    email_verified: boolean;
    locale: string;
    // This weird format is required for metadata properties in Auth0
    'https://addressico.web.app/phone': string;
}

export interface ServiceData {
    serviceId: string;
    fieldId: string;
    value: any;
}

export interface UserService {
    serviceId: string;
    serviceStatus: UserServiceDataStatus;
    integrationType: IntegrationType;
}

export enum UserServiceDataStatus {
    complete = 'complete',
    incomplete = 'incomplete',
    confirmed = 'confirmed',
    failed = 'failed',
    in_progress = 'in_progress',
}

export interface CreateUserInput {
    email: string;
    firstName?: string;
    lastName?: string;
    movingDate?: string;
    phone?: string;
}


