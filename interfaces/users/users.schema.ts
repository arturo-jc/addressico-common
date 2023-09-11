import { FromSchema } from 'json-schema-to-ts';
import { AJV_ANY } from '../fields/fields.schema';
import { AJV_INTEGRATION_TYPE_SCHEMA } from '../service-providers/service-providers.schema';

export const AJV_USER_SERVICE_DATA_STATUS_SCHEMA = {
  enum: [
    'complete',
    'incomplete',
    'confirmed',
    'failed',
    'in_progress',
  ],
} as const;

export const AJV_USER_LOCATION_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    unitNumber: { type: 'string' },
    street: { type: 'string' },
    streetNumber: { type: 'string' },
    streetType: { type: 'string' },
    city: { type: 'string' },
    postalCode: { type: 'string' },
    country: { type: 'string' },
    jurisdiction: { type: 'string' },
    isCurrent: { type: 'boolean' },
    isMovingTo: { type: 'boolean' },
  },
  required: [
    'id',
    'unitNumber',
    'street',
    'streetNumber',
    'streetType',
    'city',
    'postalCode',
    'country',
    'jurisdiction',
  ],
  additionalProperties: false,
} as const;

export const AJV_SERVICE_DATA = {
  type: 'object',
  properties: {
    serviceId: { type: 'string' },
    fieldId: { type: 'string' },
    value: AJV_ANY,
  },
  required: [ 'serviceId', 'fieldId' ],
  additionalProperties: false,
} as const;

export const AJV_USER_SERVICE_SCHEMA = {
  type: 'object',
  properties: {
    serviceId: { type: 'string' },
    serviceStatus: AJV_USER_SERVICE_DATA_STATUS_SCHEMA,
    integrationType: AJV_INTEGRATION_TYPE_SCHEMA,
  },
  required: ['serviceId', 'serviceStatus', 'integrationType'],
  additionalProperties: false,
} as const;

export const AJV_USER_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    email: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    movingDate: { type: 'string' },
    defaultProviderEmail: { type: 'string' },
    notes: { type: 'string' },
    data: {
      type: 'array',
      items: AJV_SERVICE_DATA,
    },
    services: {
      type: 'array',
      items: AJV_USER_SERVICE_SCHEMA,
    },
    locations: {
      type: 'array',
      items: AJV_USER_LOCATION_SCHEMA,
    },
  },
  required: [ 'id' ],
  additionalProperties: false,
} as const;

export const AJV_AUTH0_USER_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    given_name: { type: 'string' },
    family_name: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    email_verified: { type: 'boolean' },
    locale: { type: 'string' },
    // This weird format is required for metadata properties in Auth0
    'https://addressico.web.app/phone': { type: 'string' },
  },
  required: [
    'id',
    'given_name',
    'family_name',
    'name',
    'email',
    'email_verified',
    'locale',
    'https://addressico.web.app/phone',
  ],
  additionalProperties: false,
} as const;


export type UserLocation = FromSchema<typeof AJV_USER_LOCATION_SCHEMA>;

export type Auth0User = FromSchema<typeof AJV_AUTH0_USER_SCHEMA>;

export type ServiceData = FromSchema<typeof AJV_SERVICE_DATA>;

// We cannot use FromSchema here because it does not support enums
export enum UserServiceDataStatus {
  complete = 'complete',
  incomplete = 'incomplete',
  confirmed = 'confirmed',
  failed = 'failed',
  in_progress = 'in_progress',
}

export interface UserService extends Omit<FromSchema<typeof AJV_USER_SERVICE_SCHEMA>, 'serviceStatus'> {
  serviceStatus: UserServiceDataStatus;
}

export interface User extends Omit<FromSchema<typeof AJV_USER_SCHEMA>, ''> {
  services: UserService[];
}

export interface CreateUserInput {
  email: string;
  firstName?: string;
  lastName?: string;
  movingDate?: string;
  phone?: string;
}
