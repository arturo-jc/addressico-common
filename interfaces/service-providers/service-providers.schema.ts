import { FromSchema } from 'json-schema-to-ts';
import { Field } from '../fields/fields.schema';

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

export const AJV_SERVICE_PROVIDER_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    name_fr: { type: 'string' },
    shortName: { type: 'string' },
    shortName_fr: { type: 'string' },
    integrations: {
      type: 'array',
      items: AJV_INTEGRATION_SCHEMA,
    },
    inactive: {
      type: 'array',
      items: AJV_INTEGRATION_SCHEMA,
    },
    categories: {
      type: 'array',
      items: { type: 'string' },
    },
    jurisdictions: {
      type: 'array',
      items: { type: 'string' },
    },
    contactInfo: AJV_CONTACT_INFO_SCHEMA,
    logo: { type: 'string' },
    integrationType: AJV_INTEGRATION_TYPE_SCHEMA,
    instructions: {
      type: 'array',
      items: { type: 'string' },
    },
    instructions_fr: {
      type: 'array',
      items: { type: 'string' },
    },
    requiredDocuments: {
      type: 'array',
      items: { type: 'string' },
    },
    details: {
      type: 'array',
      items: { type: 'string' },
    },
    details_fr: {
      type: 'array',
      items: { type: 'string' },
    },
    risks: {
      type: 'array',
      items: { type: 'string' },
    },
    whenToUpdate: { type: 'string' },
    requiredInformationIds: {
      type: 'array',
      items: { type: 'string' },
    },
  },
  required: [
    'id',
    'name',
    'integrations',
    'categories',
    'requiredInformationIds',
  ],
  additionalProperties: false,
} as const;

export type ServiceProviderModel = FromSchema<typeof AJV_SERVICE_PROVIDER_SCHEMA>;

export interface ServiceProvider extends Omit<ServiceProviderModel, 'requiredInformationIds'> {
  requiredInformation: Field[];
}

