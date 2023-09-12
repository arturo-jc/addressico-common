import { FromSchema } from 'json-schema-to-ts';
import { AJV_CONTROL_SCHEMA, BASE_FIELD_PROPERTIES, BASE_FIELD_REQUIRED_PROPERTIES, Control } from './controls.schema';

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
    ...BASE_FIELD_REQUIRED_PROPERTIES,
  ],
  additionalProperties: false,
} as const;

type _NonRecursiveFieldType = FromSchema<typeof _NON_RECURSIVE_FIELD_SCHEMA>;

export interface Field extends _NonRecursiveFieldType {
  controls?: Control[];
  arrayItemType?: Control;
  subFields?: Field[];
};

export interface FieldWithValue extends Omit<Field, 'subFields'> {
    value: any;
    serviceId: string;
}

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

