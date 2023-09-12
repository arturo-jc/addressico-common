import { FromSchema } from "json-schema-to-ts";
import { AJV_ACTION_SCHEMA } from "./others.schema";

export const AJV_PARTNER_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    logo: { type: 'string' },
    message: { type: 'string' },
    signature: { type: 'string' },
    actionOne: AJV_ACTION_SCHEMA,
    actionTwo: AJV_ACTION_SCHEMA,
  },
  additionalProperties: false,
  required: [
    'id',
    'name',
    'logo',
    'message',
    'signature',
  ],
} as const;

export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;
