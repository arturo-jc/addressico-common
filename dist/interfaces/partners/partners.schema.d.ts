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
export declare const AJV_GET_PARTNERS_INPUT_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly maxLength: 255;
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly [];
};
export declare const AJV_SIGN_UP_PARTNER_INPUT_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly name: {
            readonly type: "string";
            readonly maxLength: 255;
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
        readonly firstName: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly lastName: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly email: {
            readonly type: "string";
            readonly maxLength: 255;
        };
        readonly phone: {
            readonly type: "string";
            readonly maxLength: 255;
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["name", "address", "industry", "howDidTheyHearAboutUs", "firstName", "lastName", "email", "phone"];
};
export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;
export type CreatePartnerInput = Partner;
export type UpdatePartnerInput = Partial<Omit<CreatePartnerInput, 'id'>>;
export type GetPartnersInput = FromSchema<typeof AJV_GET_PARTNERS_INPUT_SCHEMA>;
export type SignUpPartnerInput = FromSchema<typeof AJV_SIGN_UP_PARTNER_INPUT_SCHEMA>;
//# sourceMappingURL=partners.schema.d.ts.map