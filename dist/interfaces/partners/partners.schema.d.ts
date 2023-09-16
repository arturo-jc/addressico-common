import { FromSchema } from "json-schema-to-ts";
export declare const AJV_PARTNER_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly logo: {
            readonly type: "string";
        };
        readonly message: {
            readonly type: "string";
        };
        readonly signature: {
            readonly type: "string";
        };
        readonly actionOne: {
            readonly type: "object";
            readonly properties: {
                readonly label: {
                    readonly type: "string";
                };
                readonly icon: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly enabled: {
                    readonly type: "boolean";
                };
            };
            readonly additionalProperties: false;
            readonly required: readonly ["label", "icon", "link", "enabled"];
        };
        readonly actionTwo: {
            readonly type: "object";
            readonly properties: {
                readonly label: {
                    readonly type: "string";
                };
                readonly icon: {
                    readonly type: "string";
                };
                readonly link: {
                    readonly type: "string";
                };
                readonly enabled: {
                    readonly type: "boolean";
                };
            };
            readonly additionalProperties: false;
            readonly required: readonly ["label", "icon", "link", "enabled"];
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["id", "name", "logo", "message", "signature"];
};
export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;
//# sourceMappingURL=partners.schema.d.ts.map