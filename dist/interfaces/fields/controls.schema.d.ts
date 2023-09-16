import { FromSchema } from "json-schema-to-ts";
export declare const BASE_FIELD_PROPERTIES: {
    readonly abstractControlType: {
        readonly enum: readonly ["formControl", "formGroup", "formArray"];
    };
    readonly dataType: {
        readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "select", "multiselect", "object", "array"];
    };
    readonly inputType: {
        readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray"];
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
export declare const BASE_FIELD_REQUIRED_PROPERTIES: readonly ["abstractControlType", "dataType", "inputType", "label", "label_fr", "validators"];
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_CONTROL_SCHEMA` instead.
 */
declare const _NON_RECURSIVE_CONTROL_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly controlName: {
            readonly type: "string";
        };
        readonly abstractControlType: {
            readonly enum: readonly ["formControl", "formGroup", "formArray"];
        };
        readonly dataType: {
            readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "select", "multiselect", "object", "array"];
        };
        readonly inputType: {
            readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray"];
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
    readonly required: readonly ["controlName", "abstractControlType", "dataType", "inputType", "label", "label_fr", "validators"];
    readonly additionalProperties: false;
};
type _NonRecursiveControlType = FromSchema<typeof _NON_RECURSIVE_CONTROL_SCHEMA>;
export interface Control extends _NonRecursiveControlType {
    controls?: Control[];
    arrayItemType?: Control;
}
export declare const AJV_CONTROL_SCHEMA: {
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
            readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "select", "multiselect", "object", "array"];
        };
        readonly inputType: {
            readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray"];
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
export {};
//# sourceMappingURL=controls.schema.d.ts.map