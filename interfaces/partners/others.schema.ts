import { FromSchema } from "json-schema-to-ts";
import { BasicUser, User } from "../users/users.schema";
import { Partner } from "./partners.schema";

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

export type Action = FromSchema<typeof AJV_ACTION_SCHEMA>;

export interface UpdatePartnerInput {
  name?: string;
  logo?: string;
  message?: string;
  signature?: string;
  actionOne?: Action;
  actionTwo?: Action;
}

export interface PartnerWithUsers extends Partner{
  employees: BasicUser[];
  invitedUsers: BasicUser[];
}

