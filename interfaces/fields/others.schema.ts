import { FromSchema } from 'json-schema-to-ts';

export const AJV_ANY = {
  oneOf: [
    { type: 'string' },
    { type: 'boolean' },
    { type: 'number' },
    { type: 'integer' },
    { type: 'array' },
    { type: 'object' },
    { type: 'null' },
  ],
} as const;

export const AJV_OPTION_SCHEMA = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    value: AJV_ANY,
  },
  required: ['label', 'value'],
  additionalProperties: false,
} as const;

export const AJV_FIELD_VALIDATORS_SCHEMA = {
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
} as const;

export const AJV_ABSTRACT_CONTROL_TYPE_SCHEMA = {
  enum: [
    'formControl',
    'formGroup',
    'formArray',
  ],
} as const;

export const AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA = {
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
} as const;

export const AJV_REQUIRED_INPUT_TYPE_SCHEMA = {
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
} as const;

export type Option = FromSchema<typeof AJV_OPTION_SCHEMA>;

export type FieldValidators = FromSchema<typeof AJV_FIELD_VALIDATORS_SCHEMA>;

export type AbstractControlType = FromSchema<typeof AJV_ABSTRACT_CONTROL_TYPE_SCHEMA>;

export type RequiredFieldDataType = FromSchema<typeof AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA>;

export type RequiredInputType = FromSchema<typeof AJV_REQUIRED_INPUT_TYPE_SCHEMA>;
