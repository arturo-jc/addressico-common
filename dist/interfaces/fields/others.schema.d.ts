import { FromSchema } from 'json-schema-to-ts';
export declare const AJV_ANY: {
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
export declare const AJV_OPTION_SCHEMA: {
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
export declare const AJV_FIELD_VALIDATORS_SCHEMA: {
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
export declare const AJV_ABSTRACT_CONTROL_TYPE_SCHEMA: {
    readonly enum: readonly ["formControl", "formGroup", "formArray"];
};
export declare const AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA: {
    readonly enum: readonly ["number", "text", "email", "password", "phone", "date", "boolean", "file", "object", "array"];
};
export declare const AJV_REQUIRED_INPUT_TYPE_SCHEMA: {
    readonly enum: readonly ["inputText", "inputNumber", "calendar", "dropdown", "checkbox", "radioButton", "multiselect", "textarea", "phone", "form", "formArray"];
};
export type Option = FromSchema<typeof AJV_OPTION_SCHEMA>;
export type FieldValidators = FromSchema<typeof AJV_FIELD_VALIDATORS_SCHEMA>;
export type AbstractControlType = FromSchema<typeof AJV_ABSTRACT_CONTROL_TYPE_SCHEMA>;
export type RequiredFieldDataType = FromSchema<typeof AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA>;
export type RequiredInputType = FromSchema<typeof AJV_REQUIRED_INPUT_TYPE_SCHEMA>;
//# sourceMappingURL=others.schema.d.ts.map