import { FromSchema } from 'json-schema-to-ts';
export declare const AJV_INVOICE_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly partnerId: {
            readonly type: "string";
        };
        readonly date: {
            readonly type: "number";
        };
        readonly users: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly firstName: {
                        readonly type: "string";
                    };
                    readonly lastName: {
                        readonly type: "string";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly emailVerified: {
                        readonly type: "boolean";
                    };
                    readonly loginsCount: {
                        readonly type: "number";
                    };
                    readonly lastLogin: {
                        readonly type: "string";
                    };
                    readonly lastIp: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "firstName", "lastName", "email", "emailVerified", "loginsCount"];
            };
        };
        readonly stripeId: {
            readonly type: "string";
        };
        readonly stripeHostedUrl: {
            readonly type: "string";
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["id", "partnerId", "date", "users", "stripeId", "stripeHostedUrl"];
};
export type Invoice = FromSchema<typeof AJV_INVOICE_SCHEMA>;
//# sourceMappingURL=invoices.schema.d.ts.map