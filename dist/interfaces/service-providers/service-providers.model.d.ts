import { Field } from "../fields/fields.schema";
export type IntegrationType = 'email' | 'axiom_webhook' | 'manual_online' | 'manual_in_person' | 'manual_phone' | 'emailWithPDF' | 'api' | 'online_form';
export interface ServiceProvider {
    id: string;
    name: string;
    name_fr?: string;
    shortName?: string;
    shortName_fr?: string;
    integrations: Integration[];
    inactive?: Integration[];
    categories: string[];
    jurisdictions?: string[];
    contactInfo?: {
        address?: string;
        phone?: string;
        email?: string;
        website?: string;
    };
    logo?: string;
    integrationType?: IntegrationType;
    instructions?: string[];
    instructions_fr?: string[];
    requiredInformation: Field[];
    requiredDocuments?: string[];
    details?: string[];
    details_fr?: string[];
    risks?: string[];
    whenToUpdate?: string;
}
export interface Integration {
    integrationType: IntegrationType;
    instructions: string;
    email?: string;
    name?: string;
    pdf?: string;
    website?: string;
}
//# sourceMappingURL=service-providers.model.d.ts.map