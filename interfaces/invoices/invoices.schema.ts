import { FromSchema } from 'json-schema-to-ts';

export const AJV_INVOICE_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    partnerId: { type: 'string' },
    date: { type: 'number' },
    users: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: { type: 'string' },
          emailVerified: { type: 'boolean' },
          loginsCount: { type: 'number' },
          lastLogin: { type: 'string' },
          lastIp: { type: 'string' },
        },
        required: [
          'id',
          'firstName',
          'lastName',
          'email',
          'emailVerified',
          'loginsCount',
        ],
      },
    },
    stripeId: { type: 'string' },
    stripeHostedUrl: { type: 'string' },
    amountDue: { type: 'number' },
    amountPaid: { type: 'number' },
  },
  additionalProperties: false,
  required: [
    'id',
    'partnerId',
    'date',
    'users',
    'stripeId',
    'stripeHostedUrl',
  ],
} as const;

export type Invoice = FromSchema<typeof AJV_INVOICE_SCHEMA>;
