import { FromSchema } from 'json-schema-to-ts';

export const AJV_OPTION_SCHEMA = {
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

export const BASE_FIELD_PROPERTIES = {
    abstractControlType: AJV_ABSTRACT_CONTROL_TYPE_SCHEMA,
    dataType: AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA,
    inputType: AJV_REQUIRED_INPUT_TYPE_SCHEMA,
    label: { type: 'string' },
    label_fr: { type: 'string' },
    validators: AJV_FIELD_VALIDATORS_SCHEMA,
    placeholder: { type: 'string' },
    options: {
      type: 'array',
      items: AJV_OPTION_SCHEMA,
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
} as const;

export type Option = FromSchema<typeof AJV_OPTION_SCHEMA>;

export type FieldValidators = FromSchema<typeof AJV_FIELD_VALIDATORS_SCHEMA>;

export type AbstractControlType = FromSchema<typeof AJV_ABSTRACT_CONTROL_TYPE_SCHEMA>;

export type RequiredFieldDataType = FromSchema<typeof AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA>;

export type RequiredInputType = FromSchema<typeof AJV_REQUIRED_INPUT_TYPE_SCHEMA>;

// DEFINE NON-RECURSIVE SCHEMAS

/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_CONTROL_SCHEMA` instead.
 */
const _NON_RECURSIVE_CONTROL_SCHEMA = {
  type: 'object',
  properties: {
    ...BASE_FIELD_PROPERTIES,
    controlName: { type: 'string' },
  },
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
} as const;

/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_FIELD_SCHEMA` instead.
 */
const _NON_RECURSIVE_FIELD_SCHEMA = {
  type: 'object',
  properties: {
    ...BASE_FIELD_PROPERTIES,
    id: { type: 'string' },
  },
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
} as const;

// USE NON-RECURSIVE SCHEMAS TO CONSTRUCT NON-RECURSIVE TYPES

type _NonRecursiveFieldType = FromSchema<typeof _NON_RECURSIVE_FIELD_SCHEMA>;

type _NonRecursiveControlType = FromSchema<typeof _NON_RECURSIVE_CONTROL_SCHEMA>;

// USE NON-RECURSIVE TYPES TO CONSTRUCT RECURSIVE TYPES

export interface Control extends _NonRecursiveControlType {
  controls?: Control[];
  arrayItemType?: Control;
};

export interface Field extends _NonRecursiveFieldType {
  controls?: Control[];
  arrayItemType?: Control;
  subFields?: Field[];
};

export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}

// USE NON-RECURSIVE SCHEMAS TO CONSTRUCT AJV SCHEMAS

export const AJV_CONTROL_SCHEMA = {
  ..._NON_RECURSIVE_CONTROL_SCHEMA,
  properties: {
    ..._NON_RECURSIVE_CONTROL_SCHEMA.properties,
    controls: {
      type: 'array',
      items: { $ref: '#' },
    },
    arrayItemType: { $ref: '#' },
  },
} as const;

export const AJV_FIELD_SCHEMA = {
  ..._NON_RECURSIVE_FIELD_SCHEMA,
  properties: {
    ..._NON_RECURSIVE_FIELD_SCHEMA.properties,
    subFields: {
      type: 'array',
      items: { $ref: '#' },
    },
    controls: {
      type: 'array',
      items: { $ref: '#/definitions/control' },
    },
    arrayItemType: { $ref: '#/definitions/control' },
  },
  definitions: {
    control: AJV_CONTROL_SCHEMA,
  },
} as const;

