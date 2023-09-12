import { FromSchema } from "json-schema-to-ts";

export const AJV_INTEGRATION_TYPE_SCHEMA = {
  enum: [
    'email',
    'axiom_webhook',
    'manual_online',
    'manual_in_person',
    'manual_phone',
    'emailWithPDF',
    'api',
    'online_form',
  ],
} as const;

export const AJV_INTEGRATION_SCHEMA = {
  type: 'object',
  properties: {
    integrationType: AJV_INTEGRATION_TYPE_SCHEMA,
    instructions: { type: 'string' },
    email: { type: 'string' },
    name: { type: 'string' },
    pdf: { type: 'string' },
    website: { type: 'string' },
  },
  required: ['integrationType', 'instructions'],
  additionalProperties: false,
} as const;

export const AJV_CONTACT_INFO_SCHEMA = {
  type: 'object',
  properties: {
    address: { type: 'string' },
    phone: { type: 'string' },
    email: { type: 'string' },
    website: { type: 'string' },
  },
  additionalProperties: false,
} as const;

export type IntegrationType = FromSchema<typeof AJV_INTEGRATION_TYPE_SCHEMA>;

export type Integration = FromSchema<typeof AJV_INTEGRATION_SCHEMA>;

