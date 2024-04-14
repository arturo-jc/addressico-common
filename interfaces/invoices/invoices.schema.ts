import { FromSchema } from 'json-schema-to-ts';
import { AJV_USER_SCHEMA } from '../users/users.schema';

export const AJV_INVOICE_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    partnerId: { type: 'string' },
    date: { type: 'number' },
    users: {
      type: 'array',
      items: AJV_USER_SCHEMA,
    },
    stripeId: { type: 'string' },
    stripeHostedUrl: { type: 'string' },
    amountDue: { type: 'number' },
    amountPaid: { type: 'number' },
    paid: { type: 'boolean' },
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
