import { FromSchema } from "json-schema-to-ts";

export const AJV_AUTH_ROLE_SCHEMA = {
  enum: [
    'partner',
    'user',
  ],
} as const;

export const AJV_CREATE_USER_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    movingDate: { type: 'string' },
    phone: { type: 'string' },
    role: AJV_AUTH_ROLE_SCHEMA,
    employeeOfPartner: { type: 'string' },
  },
  required: ['email', 'role'],
  additionalProperties: false,
} as const;

export const AJV_GET_USER_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    invitedBy: { type: 'string' },
    employeeOfPartner: { type: 'string' },
  },
  required: [],
  additionalProperties: false,
} as const;

export type CreateUserInput = FromSchema<typeof AJV_CREATE_USER_INPUT_SCHEMA>;

export type GetUserInput = FromSchema<typeof AJV_GET_USER_INPUT_SCHEMA>;

export type Auth0Role = FromSchema<typeof AJV_AUTH_ROLE_SCHEMA>;

