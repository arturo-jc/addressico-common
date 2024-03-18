import { FromSchema } from 'json-schema-to-ts';
export declare const AJV_BILLING_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly billingAddress: {
            readonly type: "string";
        };
        readonly billingEmail: {
            readonly type: "string";
        };
        readonly legalEntityName: {
            readonly type: "string";
        };
        readonly partnerId: {
            readonly type: "string";
        };
        readonly stripeCustomerId: {
            readonly type: "string";
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["id", "billingAddress", "billingEmail", "legalEntityName", "partnerId"];
};
export type BillingData = FromSchema<typeof AJV_BILLING_SCHEMA>;
//# sourceMappingURL=billing.schema.d.ts.map