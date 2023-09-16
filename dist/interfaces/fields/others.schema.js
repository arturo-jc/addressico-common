"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_REQUIRED_INPUT_TYPE_SCHEMA = exports.AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA = exports.AJV_ABSTRACT_CONTROL_TYPE_SCHEMA = exports.AJV_FIELD_VALIDATORS_SCHEMA = exports.AJV_OPTION_SCHEMA = exports.AJV_ANY = void 0;
exports.AJV_ANY = {
    oneOf: [
        { type: 'string' },
        { type: 'boolean' },
        { type: 'number' },
        { type: 'integer' },
        { type: 'array' },
        { type: 'object' },
        { type: 'null' },
    ],
};
exports.AJV_OPTION_SCHEMA = {
    type: 'object',
    properties: {
        label: { type: 'string' },
        value: exports.AJV_ANY,
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
