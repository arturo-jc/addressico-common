"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_FIELD_SCHEMA = exports.AJV_CONTROL_SCHEMA = exports.BASE_FIELD_PROPERTIES = exports.AJV_REQUIRED_INPUT_TYPE_SCHEMA = exports.AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA = exports.AJV_ABSTRACT_CONTROL_TYPE_SCHEMA = exports.AJV_FIELD_VALIDATORS_SCHEMA = exports.AJV_OPTION_SCHEMA = void 0;
exports.AJV_OPTION_SCHEMA = {
    type: 'object',
    properties: {
        label: {
            type: 'string',
        },
        value: {
            oneOf: [
                { type: 'string' },
                { type: 'boolean' },
            ],
        },
    },
    required: ['label', 'value'],
    additionalProperties: false,
};
exports.AJV_FIELD_VALIDATORS_SCHEMA = {
    type: 'object',
    properties: {
        required: { type: 'boolean' },
        minLength: { type: 'number' },
        maxLength: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
        pattern: { type: 'string' },
        format: { type: 'string' },
        email: { type: 'boolean' },
        requiredTrue: { type: 'boolean' },
    },
    additionalProperties: false,
};
exports.AJV_ABSTRACT_CONTROL_TYPE_SCHEMA = {
    enum: [
        'formControl',
        'formGroup',
        'formArray',
    ],
};
exports.AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA = {
    enum: [
        'number',
        'text',
        'email',
        'password',
        'phone',
        'date',
        'boolean',
        'file',
        'select',
        'multiselect',
        'object',
        'array',
    ],
};
exports.AJV_REQUIRED_INPUT_TYPE_SCHEMA = {
    enum: [
        'inputText',
        'inputNumber',
        'calendar',
        'dropdown',
        'checkbox',
        'radioButton',
        'multiselect',
        'textarea',
        'phone',
        'form',
        'formArray',
    ],
};
exports.BASE_FIELD_PROPERTIES = {
    abstractControlType: exports.AJV_ABSTRACT_CONTROL_TYPE_SCHEMA,
    dataType: exports.AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA,
    inputType: exports.AJV_REQUIRED_INPUT_TYPE_SCHEMA,
    label: { type: 'string' },
    label_fr: { type: 'string' },
    validators: exports.AJV_FIELD_VALIDATORS_SCHEMA,
    placeholder: { type: 'string' },
    options: {
        type: 'array',
        items: exports.AJV_OPTION_SCHEMA,
    },
    defaultValue: { type: 'string' },
    defaultValueVariable: { type: 'string' },
    addButtonLabel: { type: 'string' },
    showOnValue: {
        oneOf: [
            { type: 'string' },
            { type: 'boolean' },
            { type: 'number' },
            { type: 'integer' },
            { type: 'array' },
            { type: 'object' },
            { type: 'null' },
        ],
    },
};
// DEFINE NON-RECURSIVE SCHEMAS
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_CONTROL_SCHEMA` instead.
 */
const _NON_RECURSIVE_CONTROL_SCHEMA = {
    type: 'object',
    properties: Object.assign(Object.assign({}, exports.BASE_FIELD_PROPERTIES), { controlName: { type: 'string' } }),
    required: [
        'controlName',
        'abstractControlType',
        'dataType',
        'inputType',
        'label',
        'label_fr',
        'validators',
    ],
    additionalProperties: false,
};
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_FIELD_SCHEMA` instead.
 */
const _NON_RECURSIVE_FIELD_SCHEMA = {
    type: 'object',
    properties: Object.assign(Object.assign({}, exports.BASE_FIELD_PROPERTIES), { id: { type: 'string' } }),
    required: [
        'id',
        'abstractControlType',
        'dataType',
        'inputType',
        'label',
        'label_fr',
        'validators',
    ],
    additionalProperties: false,
};
;
;
// USE NON-RECURSIVE SCHEMAS TO CONSTRUCT AJV SCHEMAS
exports.AJV_CONTROL_SCHEMA = Object.assign(Object.assign({}, _NON_RECURSIVE_CONTROL_SCHEMA), { properties: Object.assign(Object.assign({}, _NON_RECURSIVE_CONTROL_SCHEMA.properties), { controls: {
            type: 'array',
            items: { $ref: '#' },
        }, arrayItemType: { $ref: '#' } }) });
exports.AJV_FIELD_SCHEMA = Object.assign(Object.assign({}, _NON_RECURSIVE_FIELD_SCHEMA), { properties: Object.assign(Object.assign({}, _NON_RECURSIVE_FIELD_SCHEMA.properties), { subFields: {
            type: 'array',
            items: { $ref: '#' },
        }, controls: {
            type: 'array',
            items: { $ref: '#/definitions/control' },
        }, arrayItemType: { $ref: '#/definitions/control' } }), definitions: {
        control: exports.AJV_CONTROL_SCHEMA,
    } });
