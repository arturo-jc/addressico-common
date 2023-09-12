import { FromSchema } from 'json-schema-to-ts';
import { Field } from '../fields/fields.schema';
import { AJV_CONTACT_INFO_SCHEMA, AJV_INTEGRATION_SCHEMA, AJV_INTEGRATION_TYPE_SCHEMA } from './others.schema';

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

