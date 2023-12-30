import { FromSchema } from 'json-schema-to-ts';
export declare const USER_SERVICE_DATA_STATUSES: readonly ["complete", "incomplete", "confirmed", "failed", "in_progress"];
export declare const AJV_USER_SERVICE_DATA_STATUS_SCHEMA: {
    readonly enum: readonly ["complete", "incomplete", "confirmed", "failed", "in_progress"];
};
export declare const AJV_USER_LOCATION_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly unitNumber: {
            readonly type: "string";
        };
        readonly street: {
            readonly type: "string";
        };
        readonly streetNumber: {
            readonly type: "string";
        };
        readonly streetType: {
            readonly type: "string";
        };
        readonly city: {
            readonly type: "string";
        };
        readonly postalCode: {
            readonly type: "string";
        };
        readonly country: {
            readonly type: "string";
        };
        readonly jurisdiction: {
            readonly type: "string";
        };
        readonly isCurrent: {
            readonly type: "boolean";
        };
        readonly isMovingTo: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["id", "street", "streetNumber", "streetType", "city", "postalCode", "country", "jurisdiction"];
    readonly additionalProperties: false;
};
export declare const AJV_USER_LOCATIONS_SCHEMA: {
    readonly type: "array";
    readonly items: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
            };
            readonly unitNumber: {
                readonly type: "string";
            };
            readonly street: {
                readonly type: "string";
            };
            readonly streetNumber: {
                readonly type: "string";
            };
            readonly streetType: {
                readonly type: "string";
            };
            readonly city: {
                readonly type: "string";
            };
            readonly postalCode: {
                readonly type: "string";
            };
            readonly country: {
                readonly type: "string";
            };
            readonly jurisdiction: {
                readonly type: "string";
            };
            readonly isCurrent: {
                readonly type: "boolean";
            };
            readonly isMovingTo: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["id", "street", "streetNumber", "streetType", "city", "postalCode", "country", "jurisdiction"];
        readonly additionalProperties: false;
    };
};
export declare const AJV_SINGLE_SERVICE_DATA_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly serviceId: {
            readonly type: "string";
        };
        readonly fieldId: {
            readonly type: "string";
        };
        readonly value: {
            readonly oneOf: readonly [{
                readonly type: "string";
            }, {
                readonly type: "boolean";
            }, {
                readonly type: "number";
            }, {
                readonly type: "integer";
            }, {
                readonly type: "array";
            }, {
                readonly type: "object";
            }, {
                readonly type: "null";
            }];
        };
    };
    readonly required: readonly ["serviceId", "fieldId"];
    readonly additionalProperties: false;
};
export declare const AJV_SERVICE_DATA_SCHEMA: {
    readonly type: "array";
    readonly items: {
        readonly type: "object";
        readonly properties: {
            readonly serviceId: {
                readonly type: "string";
            };
            readonly fieldId: {
                readonly type: "string";
            };
            readonly value: {
                readonly oneOf: readonly [{
                    readonly type: "string";
                }, {
                    readonly type: "boolean";
                }, {
                    readonly type: "number";
                }, {
                    readonly type: "integer";
                }, {
                    readonly type: "array";
                }, {
                    readonly type: "object";
                }, {
                    readonly type: "null";
                }];
            };
        };
        readonly required: readonly ["serviceId", "fieldId"];
        readonly additionalProperties: false;
    };
};
export declare const AJV_USER_SERVICE_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly serviceId: {
            readonly type: "string";
        };
        readonly serviceStatus: {
            readonly enum: readonly ["complete", "incomplete", "confirmed", "failed", "in_progress"];
        };
        readonly integrationType: {
            readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
        };
    };
    readonly required: readonly ["serviceId", "serviceStatus", "integrationType"];
    readonly additionalProperties: false;
};
export declare const AJV_USER_SERVICES_SCHEMA: {
    readonly type: "array";
    readonly items: {
        readonly type: "object";
        readonly properties: {
            readonly serviceId: {
                readonly type: "string";
            };
            readonly serviceStatus: {
                readonly enum: readonly ["complete", "incomplete", "confirmed", "failed", "in_progress"];
            };
            readonly integrationType: {
                readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
            };
        };
        readonly required: readonly ["serviceId", "serviceStatus", "integrationType"];
        readonly additionalProperties: false;
    };
};
export declare const AJV_USER_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly firstName: {
            readonly type: "string";
        };
        readonly lastName: {
            readonly type: "string";
        };
        readonly movingDate: {
            readonly type: "string";
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly notes: {
            readonly type: "string";
        };
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly serviceId: {
                        readonly type: "string";
                    };
                    readonly fieldId: {
                        readonly type: "string";
                    };
                    readonly value: {
                        readonly oneOf: readonly [{
                            readonly type: "string";
                        }, {
                            readonly type: "boolean";
                        }, {
                            readonly type: "number";
                        }, {
                            readonly type: "integer";
                        }, {
                            readonly type: "array";
                        }, {
                            readonly type: "object";
                        }, {
                            readonly type: "null";
                        }];
                    };
                };
                readonly required: readonly ["serviceId", "fieldId"];
                readonly additionalProperties: false;
            };
        };
        readonly services: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly serviceId: {
                        readonly type: "string";
                    };
                    readonly serviceStatus: {
                        readonly enum: readonly ["complete", "incomplete", "confirmed", "failed", "in_progress"];
                    };
                    readonly integrationType: {
                        readonly enum: readonly ["email", "axiom_webhook", "manual_online", "manual_in_person", "manual_phone", "emailWithPDF", "api", "online_form"];
                    };
                };
                readonly required: readonly ["serviceId", "serviceStatus", "integrationType"];
                readonly additionalProperties: false;
            };
        };
        readonly locations: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly unitNumber: {
                        readonly type: "string";
                    };
                    readonly street: {
                        readonly type: "string";
                    };
                    readonly streetNumber: {
                        readonly type: "string";
                    };
                    readonly streetType: {
                        readonly type: "string";
                    };
                    readonly city: {
                        readonly type: "string";
                    };
                    readonly postalCode: {
                        readonly type: "string";
                    };
                    readonly country: {
                        readonly type: "string";
                    };
                    readonly jurisdiction: {
                        readonly type: "string";
                    };
                    readonly isCurrent: {
                        readonly type: "boolean";
                    };
                    readonly isMovingTo: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["id", "street", "streetNumber", "streetType", "city", "postalCode", "country", "jurisdiction"];
                readonly additionalProperties: false;
            };
        };
        readonly createdBy: {
            readonly type: "string";
        };
        readonly invitedBy: {
            readonly type: "string";
        };
        readonly employeeOfPartner: {
            readonly type: "string";
        };
        readonly defaultProviderEmail: {
            readonly type: "string";
        };
        readonly mailingAddress: {
            readonly type: "string";
        };
        readonly dateOfBirth: {
            readonly type: "string";
        };
        readonly sex: {
            readonly type: "string";
            readonly enum: readonly ["Male", "Female", "Other"];
        };
        readonly preferredContactMethod: {
            readonly type: "string";
            readonly enum: readonly ["Email", "Phone", "Mail"];
        };
    };
    readonly required: readonly ["id", "createdBy", "invitedBy"];
    readonly additionalProperties: false;
};
export declare const AJV_AUTH0_USER_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly given_name: {
            readonly type: "string";
        };
        readonly family_name: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
        readonly email: {
            readonly type: "string";
        };
        readonly email_verified: {
            readonly type: "boolean";
        };
        readonly locale: {
            readonly type: "string";
        };
        readonly 'https://addressico.web.app/phone': {
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "given_name", "family_name", "name", "email", "email_verified", "locale", "https://addressico.web.app/phone"];
    readonly additionalProperties: false;
};
export type UserLocation = FromSchema<typeof AJV_USER_LOCATION_SCHEMA>;
export type Auth0User = FromSchema<typeof AJV_AUTH0_USER_SCHEMA>;
export type ServiceData = FromSchema<typeof AJV_SINGLE_SERVICE_DATA_SCHEMA>;
export type UserServiceDataStatus = FromSchema<typeof AJV_USER_SERVICE_DATA_STATUS_SCHEMA>;
export type UserService = FromSchema<typeof AJV_USER_SERVICE_SCHEMA>;
export type User = FromSchema<typeof AJV_USER_SCHEMA>;
//# sourceMappingURL=users.schema.d.ts.map