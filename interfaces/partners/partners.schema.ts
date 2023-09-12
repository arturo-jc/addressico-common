import { FromSchema } from "json-schema-to-ts";
import { User } from "../users/users.schema";

export const AJV_ACTION_SCHEMA = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    icon: { type: 'string' },
    link: { type: 'string' },
    enabled: { type: 'boolean' },
  },
  additionalProperties: false,
  required: ['label', 'icon', 'link', 'enabled'],
} as const;

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

export type Action = FromSchema<typeof AJV_ACTION_SCHEMA>;

export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;

export interface PartnerWithUsers extends Partner{
    employees: User[];
    invitedUsers: User[];
}

export interface UpdatePartnerInput {
  name?: string;
  logo?: string;
  message?: string;
  signature?: string;
  actionOne?: Action;
  actionTwo?: Action;
}

