import { Field } from "../fields/fields.model";

export type IntegrationType =
|  'email'
|  'axiom_webhook'
|  'manual_online'
|  'manual_in_person'
|  'manual_phone'
|  'emailWithPDF'
|  'api'
|  'online_form';

export interface ServiceProvider {
    id: string;
    // The name of the service provider
    name: string;
    name_fr?: string;
    // A short name for the service provider ie. MPI
    shortName?: string;
    shortName_fr?: string;
    integrations: Integration[];
    inactive?: Integration[];
    // The categories that the service provider belongs to
    categories: string[];
    // The jurisdictions that the service provider operates in ie. 'MB', 'ON', 'BC'
    jurisdictions?: string[];
    contactInfo?: {
        address?: string;
        phone?: string;
        email?: string;
        website?: string;
    };
    // The logo for the service provider
    logo?: string;
    integrationType?: IntegrationType;
    // Instructions about how to update the service provider
    instructions?: string[];
    instructions_fr?: string[];
    // The information required to connect to the service provider
    requiredInformation: Field[];
    requiredDocuments?: string[];
    details?: string[];
    details_fr?: string[];
    risks?: string[];
    whenToUpdate?: string;
};

export interface Integration{
    type: IntegrationType;
    instructions: string;
    email?: string;
    name?: string;
    pdf?: string;
    website?: string;
}
