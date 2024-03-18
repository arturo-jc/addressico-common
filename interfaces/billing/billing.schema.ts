import { FromSchema } from 'json-schema-to-ts';

export const AJV_BILLING_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    billingAddress: { type: 'string' },
    billingEmail: { type: 'string' },
    legalEntityName: { type: 'string' },
    partnerId: { type: 'string' },
    stripeCustomerId: { type: 'string' },
  },
  additionalProperties: false,
  required: [
    'id',
    'billingAddress',
    'billingEmail',
    'legalEntityName',
    'partnerId',
  ],
} as const;

export type BillingData = FromSchema<typeof AJV_BILLING_SCHEMA>;
