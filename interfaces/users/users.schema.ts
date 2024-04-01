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

export const AJV_USER_LOCATIONS_SCHEMA = {
  type: 'array',
  items: AJV_USER_LOCATION_SCHEMA,
} as const;

export const AJV_SINGLE_SERVICE_DATA_SCHEMA = {
  type: 'object',
  properties: {
    serviceId: { type: 'string' },
    fieldId: { type: 'string' },
    value: AJV_ANY,
  },
  required: [ 'serviceId', 'fieldId' ],
  additionalProperties: false,
} as const;

export const AJV_SERVICE_DATA_SCHEMA = {
  type: 'array',
  items: AJV_SINGLE_SERVICE_DATA_SCHEMA,
} as const;

export const AJV_USER_SERVICE_SCHEMA = {
  type: 'object',
  properties: {
    serviceId: { type: 'string' },
    serviceStatus: AJV_USER_SERVICE_DATA_STATUS_SCHEMA,
    integrationType: AJV_INTEGRATION_TYPE_SCHEMA,
    lastAttemptedUpdateMessageId: { type: 'string' },
  },
  required: ['serviceId', 'serviceStatus', 'integrationType'],
  additionalProperties: false,
} as const;

export const AJV_USER_SERVICES_SCHEMA = {
  type: 'array',
  items: AJV_USER_SERVICE_SCHEMA,
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
    // TODO: Add pattern validation for phone numbers
    phone: { type: 'string' },
    notes: { type: 'string' },
    data: AJV_SERVICE_DATA_SCHEMA,
    services: AJV_USER_SERVICES_SCHEMA,
    locations: AJV_USER_LOCATIONS_SCHEMA,
    createdBy: { type: 'string' },
    createdAt: { type: 'number' },
    lastInviteSentAt: { type: 'number'},
    invitedBy: { type: 'string' },
    employeeOfPartner: { type: 'string' },
    // Shared Information
    defaultProviderEmail: { type: 'string' },
    mailingAddress: {type: 'string'},
    // Format 'YYYY-MM-DD',
    dateOfBirth: { type: 'string' },
    sex: { type: 'string', enum: ['Male', 'Female', 'Other', ''] },
    preferredContactMethod: { type: 'string', enum: ['Email', 'Phone', 'Mail', ''] },
    isInvoiced: { type: 'boolean' },
    hasLoggedIn: { type: 'boolean'},
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

export type ServiceData = FromSchema<typeof AJV_SINGLE_SERVICE_DATA_SCHEMA>;

export type UserServiceDataStatus = FromSchema<typeof AJV_USER_SERVICE_DATA_STATUS_SCHEMA>;

export type UserService = FromSchema<typeof AJV_USER_SERVICE_SCHEMA>;

export type User = FromSchema<typeof AJV_USER_SCHEMA>;

export type BasicUser = Pick<User, 'id' | 'createdAt' | 'lastInviteSentAt' | 'email' | 'firstName' | 'lastName' | 'hasLoggedIn' | 'isInvoiced' | 'phone' | 'employeeOfPartner' | 'invitedBy' | 'createdBy'>;

