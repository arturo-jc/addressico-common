import { FromSchema } from "json-schema-to-ts";
export declare const AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly serviceProviderId: {
            readonly type: "string";
        };
        readonly integrationType: {
            readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
        };
    };
    readonly required: readonly ["serviceProviderId", "integrationType"];
    readonly additionalProperties: false;
};
export type NotifyServiceProviderInput = FromSchema<typeof AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA>;
//# sourceMappingURL=others.schema.d.ts.map