"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_CONTROL_SCHEMA = exports.BASE_FIELD_REQUIRED_PROPERTIES = exports.BASE_FIELD_PROPERTIES = void 0;
const others_schema_1 = require("./others.schema");
exports.BASE_FIELD_PROPERTIES = {
    abstractControlType: others_schema_1.AJV_ABSTRACT_CONTROL_TYPE_SCHEMA,
    dataType: others_schema_1.AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA,
    inputType: others_schema_1.AJV_REQUIRED_INPUT_TYPE_SCHEMA,
    label: { type: 'string' },
    label_fr: { type: 'string' },
    validators: others_schema_1.AJV_FIELD_VALIDATORS_SCHEMA,
    placeholder: { type: 'string' },
    options: {
        type: 'array',
        items: others_schema_1.AJV_OPTION_SCHEMA,
    },
    defaultValue: { type: 'string' },
    defaultValueVariable: { type: 'string' },
    addButtonLabel: { type: 'string' },
    showOnValue: others_schema_1.AJV_ANY,
};
exports.BASE_FIELD_REQUIRED_PROPERTIES = [
    'abstractControlType',
    'dataType',
    'inputType',
    'label',
    'label_fr',
    'validators',
];
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_CONTROL_SCHEMA` instead.
 */
const _NON_RECURSIVE_CONTROL_SCHEMA = {
    type: 'object',
    properties: Object.assign(Object.assign({}, exports.BASE_FIELD_PROPERTIES), { controlName: { type: 'string' } }),
    required: [
        'controlName',
        ...exports.BASE_FIELD_REQUIRED_PROPERTIES,
    ],
    additionalProperties: false,
};
;
exports.AJV_CONTROL_SCHEMA = Object.assign(Object.assign({}, _NON_RECURSIVE_CONTROL_SCHEMA), { properties: Object.assign(Object.assign({}, _NON_RECURSIVE_CONTROL_SCHEMA.properties), { controls: {
            type: 'array',
            items: { $ref: '#' },
        }, arrayItemType: { $ref: '#' } }) });
