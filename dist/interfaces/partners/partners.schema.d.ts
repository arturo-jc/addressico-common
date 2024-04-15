import { FromSchema } from "json-schema-to-ts";
export declare const AJV_BASE_PARTNER_PROPERTIES: {
    readonly id: {
        readonly type: "string";
        readonly maxLength: 255;
    };
    readonly name: {
        readonly type: "string";
        readonly maxLength: 255;
    };
    readonly logo: {
        readonly type: "string";
        readonly maxLength: 1024;
    };
    readonly message: {
        readonly type: "string";
    };
    readonly signature: {
        readonly type: "string";
        readonly maxLength: 255;
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
    readonly address: {
        readonly type: "string";
        readonly maxLength: 1024;
    };
    readonly industry: {
        readonly type: "string";
        readonly maxLength: 255;
    };
    readonly howDidTheyHearAboutUs: {
        readonly type: "string";
        readonly maxLength: 255;
    };
};
export declare const AJV_PARTNER_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly logo: {
            readonly type: "string";
            readonly maxLength: 1024;
        };
        readonly message: {
            readonly type: "string";
        };
        readonly signature: {
            readonly type: "string";
            readonly maxLength: 255;
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
        readonly address: {
            readonly type: "string";
            readonly maxLength: 1024;
        };
        readonly industry: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly howDidTheyHearAboutUs: {
            readonly type: "string";
            readonly maxLength: 255;
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["id", "name", "logo", "message", "signature"];
};
export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;
export type CreatePartnerInput = Partner;
export type UpdatePartnerInput = Partial<Omit<CreatePartnerInput, 'id'>>;
//# sourceMappingURL=partners.schema.d.ts.map