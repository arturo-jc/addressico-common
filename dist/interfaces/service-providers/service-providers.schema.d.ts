import { FromSchema } from 'json-schema-to-ts';
import { Field } from '../fields/fields.schema';
export declare const AJV_SERVICE_PROVIDER_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly name_fr: {
            readonly type: "string";
        };
        readonly shortName: {
            readonly type: "string";
        };
        readonly shortName_fr: {
            readonly type: "string";
        };
        readonly integrations: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly integrationType: {
                        readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
                    };
                    readonly instructions: {
                        readonly type: "string";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly pdf: {
                        readonly type: "string";
                    };
                    readonly website: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["integrationType", "instructions"];
                readonly additionalProperties: false;
            };
        };
        readonly inactive: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly integrationType: {
                        readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
                    };
                    readonly instructions: {
                        readonly type: "string";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly pdf: {
                        readonly type: "string";
                    };
                    readonly website: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["integrationType", "instructions"];
                readonly additionalProperties: false;
            };
        };
        readonly categories: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly jurisdictions: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly contactInfo: {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                };
                readonly phone: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly website: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
        };
        readonly logo: {
            readonly type: "string";
        };
        readonly integrationType: {
            readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
        };
        readonly instructions: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly instructions_fr: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly requiredDocuments: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly details: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly details_fr: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly risks: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly whenToUpdate: {
            readonly type: "string";
        };
        readonly requiredInformationIds: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
        };
    };
    readonly required: readonly ["id", "name", "integrations", "categories", "requiredInformationIds"];
    readonly additionalProperties: false;
};
export type ServiceProviderModel = FromSchema<typeof AJV_SERVICE_PROVIDER_SCHEMA>;
export interface ServiceProvider extends Omit<ServiceProviderModel, 'requiredInformationIds'> {
    requiredInformation: Field[];
}
//# sourceMappingURL=service-providers.schema.d.ts.map