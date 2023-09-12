import { FromSchema } from 'json-schema-to-ts';
import { AJV_INTEGRATION_TYPE_SCHEMA } from '../service-providers/others.schema';
import { AJV_ANY } from '../fields/others.schema';

export const USER_SERVICE_DATA_STATUSES = [
  'complete',
  'incomplete',
  'confirmed',
  'failed',
  'in_progress',
] as const;

export const AJV_USER_SERVICE_DATA_STATUS_SCHEMA = {
  enum: USER_SERVICE_DATA_STATUSES,
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
    // Format 'YYYY-MM-DD',
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
    createdBy: { type: 'string' },
    invitedBy: { type: 'string' },
    employeeOfPartner: { type: 'string' },
  },
  required: [
    'id',
    'createdBy',
    'invitedBy',
  ],
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

export type UserServiceDataStatus = FromSchema<typeof AJV_USER_SERVICE_DATA_STATUS_SCHEMA>;

export type UserService = FromSchema<typeof AJV_USER_SERVICE_SCHEMA>;

export type User = FromSchema<typeof AJV_USER_SCHEMA>;

export interface CreateUserInput {
  email: string;
  firstName?: string;
  lastName?: string;
  movingDate?: string;
  phone?: string;
  role: Auth0Role;
}

export type Auth0Role = 'partner' | 'user' | undefined;

export interface GetUserInput{
    id?: string;
    invitedBy?: string;
    employeeOfPartner?: string;
}
