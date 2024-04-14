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
                                readonly lastAttemptedUpdateMessageId: {
                                    readonly type: "string";
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
                    readonly createdAt: {
                        readonly type: "number";
                    };
                    readonly lastInviteSentAt: {
                        readonly type: "number";
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
                        readonly enum: readonly ["Male", "Female", "Other", ""];
                    };
                    readonly preferredContactMethod: {
                        readonly type: "string";
                        readonly enum: readonly ["Email", "Phone", "Mail", ""];
                    };
                    readonly isInvoiced: {
                        readonly type: "boolean";
                    };
                    readonly hasLoggedIn: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["id", "createdBy", "invitedBy"];
                readonly additionalProperties: false;
            };
        };
        readonly stripeId: {
            readonly type: "string";
        };
        readonly stripeHostedUrl: {
            readonly type: "string";
        };
        readonly amountDue: {
            readonly type: "number";
        };
        readonly amountPaid: {
            readonly type: "number";
        };
        readonly paid: {
            readonly type: "boolean";
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["id", "partnerId", "date", "users", "stripeId", "stripeHostedUrl"];
};
export type Invoice = FromSchema<typeof AJV_INVOICE_SCHEMA>;
//# sourceMappingURL=invoices.schema.d.ts.map