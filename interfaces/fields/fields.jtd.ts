import { JTDDataType } from "ajv/dist/core";

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
} as const;

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
} as const;

const AJV_ABSTRACT_CONTROL_TYPE = {
  enum: [
    'formControl',
    'formGroup',
    'formArray',
  ],
} as const;

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
} as const;

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
} as const;

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
} as const;

type Option = JTDDataType<typeof AJV_OPTION>;

type AbstractControlType = JTDDataType<typeof AJV_ABSTRACT_CONTROL_TYPE>;

type RequiredFieldDataType = JTDDataType<typeof AJV_REQUIRED_FIELD_DATA_TYPE>;

type RequiredInputType = JTDDataType<typeof AJV_REQUIRED_INPUT_TYPE>;

type FieldValidators = JTDDataType<typeof AJV_FIELD_VALIDATORS>;

type FieldType = JTDDataType<typeof AJV_FIELD_TYPE>;

