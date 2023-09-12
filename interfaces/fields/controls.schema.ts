import { FromSchema } from "json-schema-to-ts";
import {
  AJV_ABSTRACT_CONTROL_TYPE_SCHEMA,
  AJV_ANY,
  AJV_FIELD_VALIDATORS_SCHEMA,
  AJV_OPTION_SCHEMA,
  AJV_REQUIRED_FIELD_DATA_TYPE_SCHEMA,
  AJV_REQUIRED_INPUT_TYPE_SCHEMA,
} from "./others.schema";

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
    showOnValue: AJV_ANY,
} as const;

export const BASE_FIELD_REQUIRED_PROPERTIES = [
  'abstractControlType',
  'dataType',
  'inputType',
  'label',
  'label_fr',
  'validators',
] as const;

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
    ...BASE_FIELD_REQUIRED_PROPERTIES,
  ],
  additionalProperties: false,
} as const;

type _NonRecursiveControlType = FromSchema<typeof _NON_RECURSIVE_CONTROL_SCHEMA>;

export interface Control extends _NonRecursiveControlType {
  controls?: Control[];
  arrayItemType?: Control;
};

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

