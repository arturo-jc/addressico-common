export type IntegrationType = 'email' | 'axiom_webhook' | 'manual_online' | 'manual_in_person' | 'manual_phone' | 'emailWithPDF' | 'api';

export interface ServiceProvider {
    id: string;

    name: string;
    integrations: Integration[];

    // TODO: Finish this type
};

export interface Integration{
    type: IntegrationType;
    instructions: string;
    email?: string;
    name?: string;
}
