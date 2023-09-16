import { FromSchema } from "json-schema-to-ts";
export declare const AJV_INTEGRATION_TYPE_SCHEMA: {
    readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
};
export declare const AJV_INTEGRATION_SCHEMA: {
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
export declare const AJV_CONTACT_INFO_SCHEMA: {
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
export type IntegrationType = FromSchema<typeof AJV_INTEGRATION_TYPE_SCHEMA>;
export type Integration = FromSchema<typeof AJV_INTEGRATION_SCHEMA>;
//# sourceMappingURL=others.schema.d.ts.map