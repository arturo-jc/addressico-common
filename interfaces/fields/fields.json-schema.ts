import { FromSchema } from 'json-schema-to-ts';

const AJV_OPTION_SCHEMA = {
  type: 'object',
  properties: {
    label: {
      type: 'number',
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

const AJV_FIELD_VALIDATORS_SCHEMA = {
  type: 'object',
  properties: {
    required: { type: 'boolean' },
    minLength: { type: 'number' },
    maxLength: { type: 'number' },
    min: { type: 'number' },
    max: { type: 'number' },
    pattern: { type: 'string' },
    format: { type: 'string' },
  },
  additionalProperties: false,
} as const;

const AJV_ABSTRACT_CONTROL_TYPE_SCHEMA = {
  enum: [
    'formControl',
    'formGroup',
    'formArray',
  ],
} as const;

const AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA = {
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

const AJV_REQUIRED_INPUT_TYPE_SCHEMA = {
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

const BASE_FIELD_PROPERTIES = {
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
    // TODO: controls, arrayItemType
    addButtonLabel: { type: 'string' },
} as const;

type Option = FromSchema<typeof AJV_OPTION_SCHEMA>;

type FieldValidators = FromSchema<typeof AJV_FIELD_VALIDATORS_SCHEMA>;

type AbstractControlType = FromSchema<typeof AJV_ABSTRACT_CONTROL_TYPE_SCHEMA>;

type RequiredFieldDataType = FromSchema<typeof AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA>;

type RequiredInputType = FromSchema<typeof AJV_REQUIRED_INPUT_TYPE_SCHEMA>;

// DEFINE NON-RECURSIVE SCHEMAS

/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_SUBFIELD_SCHEMA` instead.
 */
const _NON_RECURSIVE_SUBFIELD_SCHEMA = {
  type: 'object',
  properties: {
    ...BASE_FIELD_PROPERTIES,
    id: { type: 'string' },
    showOnValue: { type: 'string' },
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

type _NonRecursiveSubFieldType = FromSchema<typeof _NON_RECURSIVE_SUBFIELD_SCHEMA>;

// USE NON-RECURSIVE TYPES TO CONSTRUCT RECURSIVE TYPES

interface SubField extends _NonRecursiveSubFieldType {
  subFields?: SubField[];
};

interface Control extends _NonRecursiveControlType {
  subFields?: SubField[];
};

interface Field extends _NonRecursiveFieldType {
  subFields?: SubField[];
  controls?: Control[];
};

// USE NON-RECURSIVE SCHEMAS TO CONSTRUCT AJV SCHEMAS

const AJV_SUBFIELD_SCHEMA = {
  ..._NON_RECURSIVE_SUBFIELD_SCHEMA,
  properties: {
    ..._NON_RECURSIVE_SUBFIELD_SCHEMA.properties,
    subFields: {
      type: 'array',
      items: { $ref: '#' },
    },
  },
} as const;

const AJV_CONTROL_SCHEMA = {
  ..._NON_RECURSIVE_CONTROL_SCHEMA,
  properties: {
    ..._NON_RECURSIVE_CONTROL_SCHEMA.properties,
    subFields: {
      type: 'array',
      items: { $ref: '#/definitions/subField' },
    },
  },
  definitions: {
    subField: AJV_SUBFIELD_SCHEMA,
  },
} as const;

const AJV_FIELD_SCHEMA = {
  ..._NON_RECURSIVE_FIELD_SCHEMA,
  properties: {
    ..._NON_RECURSIVE_FIELD_SCHEMA.properties,
    subFields: {
      type: 'array',
      items: { $ref: '#/definitions/subField' },
    },
    controls: {
      type: 'array',
      items: { $ref: '#/definitions/control' },
    },
  },
  definitions: {
    subField: AJV_SUBFIELD_SCHEMA,
    control: AJV_CONTROL_SCHEMA,
  },
} as const;

