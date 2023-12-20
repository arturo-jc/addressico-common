import { FromSchema } from 'json-schema-to-ts';
import { Control } from './controls.schema';
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_FIELD_SCHEMA` instead.
 */
declare const _NON_RECURSIVE_FIELD_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly abstractControlType: {
            readonly enum: readonly ["formControl", "formGroup", "formArray"];
        };
        readonly dataType: {
            readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "object", "array"];
        };
        readonly inputType: {
            readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray", "array"];
        };
        readonly label: {
            readonly type: "string";
        };
        readonly label_fr: {
            readonly type: "string";
        };
        readonly validators: {
            readonly type: "object";
            readonly properties: {
                readonly required: {
                    readonly type: "boolean";
                };
                readonly minLength: {
                    readonly type: "number";
                };
                readonly maxLength: {
                    readonly type: "number";
                };
                readonly min: {
                    readonly type: "number";
                };
                readonly max: {
                    readonly type: "number";
                };
                readonly pattern: {
                    readonly type: "string";
                };
                readonly format: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "boolean";
                };
                readonly requiredTrue: {
                    readonly type: "boolean";
                };
            };
            readonly additionalProperties: false;
        };
        readonly placeholder: {
            readonly type: "string";
        };
        readonly options: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly label: {
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
                readonly required: readonly ["label", "value"];
                readonly additionalProperties: false;
            };
        };
        readonly defaultValue: {
            readonly type: "string";
        };
        readonly defaultValueVariable: {
            readonly type: "string";
        };
        readonly addButtonLabel: {
            readonly type: "string";
        };
        readonly showOnValue: {
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
    readonly required: readonly ["id", "abstractControlType", "dataType", "inputType", "label", "label_fr", "validators"];
    readonly additionalProperties: false;
};
type _NonRecursiveFieldType = FromSchema<typeof _NON_RECURSIVE_FIELD_SCHEMA>;
export interface Field extends _NonRecursiveFieldType {
    controls?: Control[];
    arrayItemType?: Control;
    subFields?: Field[];
}
export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}
export declare const AJV_FIELD_SCHEMA: {
    readonly properties: {
        readonly subFields: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#";
            };
        };
        readonly controls: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/control";
            };
        };
        readonly arrayItemType: {
            readonly $ref: "#/definitions/control";
        };
        readonly id: {
            readonly type: "string";
        };
        readonly abstractControlType: {
            readonly enum: readonly ["formControl", "formGroup", "formArray"];
        };
        readonly dataType: {
            readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "object", "array"];
        };
        readonly inputType: {
            readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray", "array"];
        };
        readonly label: {
            readonly type: "string";
        };
        readonly label_fr: {
            readonly type: "string";
        };
        readonly validators: {
            readonly type: "object";
            readonly properties: {
                readonly required: {
                    readonly type: "boolean";
                };
                readonly minLength: {
                    readonly type: "number";
                };
                readonly maxLength: {
                    readonly type: "number";
                };
                readonly min: {
                    readonly type: "number";
                };
                readonly max: {
                    readonly type: "number";
                };
                readonly pattern: {
                    readonly type: "string";
                };
                readonly format: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "boolean";
                };
                readonly requiredTrue: {
                    readonly type: "boolean";
                };
            };
            readonly additionalProperties: false;
        };
        readonly placeholder: {
            readonly type: "string";
        };
        readonly options: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly label: {
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
                readonly required: readonly ["label", "value"];
                readonly additionalProperties: false;
            };
        };
        readonly defaultValue: {
            readonly type: "string";
        };
        readonly defaultValueVariable: {
            readonly type: "string";
        };
        readonly addButtonLabel: {
            readonly type: "string";
        };
        readonly showOnValue: {
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
    readonly definitions: {
        readonly control: {
            readonly properties: {
                readonly controls: {
                    readonly type: "array";
                    readonly items: {
                        readonly $ref: "#";
                    };
                };
                readonly arrayItemType: {
                    readonly $ref: "#";
                };
                readonly controlName: {
                    readonly type: "string";
                };
                readonly abstractControlType: {
                    readonly enum: readonly ["formControl", "formGroup", "formArray"];
                };
                readonly dataType: {
                    readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "object", "array"];
                };
                readonly inputType: {
                    readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray", "array"];
                };
                readonly label: {
                    readonly type: "string";
                };
                readonly label_fr: {
                    readonly type: "string";
                };
                readonly validators: {
                    readonly type: "object";
                    readonly properties: {
                        readonly required: {
                            readonly type: "boolean";
                        };
                        readonly minLength: {
                            readonly type: "number";
                        };
                        readonly maxLength: {
                            readonly type: "number";
                        };
                        readonly min: {
                            readonly type: "number";
                        };
                        readonly max: {
                            readonly type: "number";
                        };
                        readonly pattern: {
                            readonly type: "string";
                        };
                        readonly format: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "boolean";
                        };
                        readonly requiredTrue: {
                            readonly type: "boolean";
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly placeholder: {
                    readonly type: "string";
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly label: {
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
                        readonly required: readonly ["label", "value"];
                        readonly additionalProperties: false;
                    };
                };
                readonly defaultValue: {
                    readonly type: "string";
                };
                readonly defaultValueVariable: {
                    readonly type: "string";
                };
                readonly addButtonLabel: {
                    readonly type: "string";
                };
                readonly showOnValue: {
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
            readonly type: "object";
            readonly required: readonly ["controlName", "abstractControlType", "dataType", "inputType", "label", "label_fr", "validators"];
            readonly additionalProperties: false;
        };
    };
    readonly type: "object";
    readonly required: readonly ["id", "abstractControlType", "dataType", "inputType", "label", "label_fr", "validators"];
    readonly additionalProperties: false;
};
export {};
//# sourceMappingURL=fields.schema.d.ts.map