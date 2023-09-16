"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AJV_OPTION = {
    type: 'object',
    properties: {
        label: { type: 'string' },
        value: {
            type: {
                oneOf: [
                    { type: 'string' },
                    { type: 'boolean' },
                ]
            }
        }
    },
};
const AJV_FIELD_VALIDATORS = {
    type: 'object',
    optionalProperties: {
        required: { type: 'boolean' },
        minLength: { type: 'int32' },
        maxLength: { type: 'int32' },
        min: { type: 'int32' },
        max: { type: 'int32' },
        pattern: { type: 'string' },
        email: { type: 'boolean' },
    },
};
const AJV_ABSTRACT_CONTROL_TYPE = {
    enum: [
        'formControl',
        'formGroup',
        'formArray',
    ],
};
const AJV_REQUIRED_FIELD_DATA_TYPE = {
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
const AJV_REQUIRED_INPUT_TYPE = {
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
const AJV_FIELD_TYPE = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        abstractControlType: AJV_ABSTRACT_CONTROL_TYPE,
        dataType: AJV_REQUIRED_FIELD_DATA_TYPE,
        inputType: AJV_REQUIRED_INPUT_TYPE,
        label: { type: 'string' },
        label_fr: { type: 'string' },
        validators: AJV_FIELD_VALIDATORS,
    },
    optionalProperties: {
        placeholder: { type: 'string' },
    }
};
