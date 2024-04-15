import { FromSchema } from "json-schema-to-ts";
import { AJV_ACTION_SCHEMA } from "./others.schema";
import { AJV_STRING_LONG, AJV_STRING_SHORT } from "../ajv.consts";

export const AJV_BASE_PARTNER_PROPERTIES = {
  id: AJV_STRING_SHORT,
  name: AJV_STRING_SHORT,
  logo: AJV_STRING_LONG,
  message: { type: 'string' },
  signature: AJV_STRING_SHORT,
  actionOne: AJV_ACTION_SCHEMA,
  actionTwo: AJV_ACTION_SCHEMA,
  address: AJV_STRING_LONG,
  industry: AJV_STRING_SHORT,
  howDidTheyHearAboutUs: AJV_STRING_SHORT,
} as const;

export const AJV_PARTNER_SCHEMA = {
  type: 'object',
  properties: {
    ...AJV_BASE_PARTNER_PROPERTIES,
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

export const AJV_GET_PARTNERS_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    id: AJV_STRING_SHORT,
  },
  additionalProperties: false,
  required: [],
} as const;

export const AJV_SIGN_UP_PARTNER_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    name: AJV_STRING_SHORT,
    address: AJV_STRING_LONG,
    industry: AJV_STRING_SHORT,
    howDidTheyHearAboutUs: AJV_STRING_SHORT,
    firstName: AJV_STRING_SHORT,
    lastName: AJV_STRING_SHORT,
    email: AJV_STRING_SHORT,
    phone: AJV_STRING_SHORT,
  },
  additionalProperties: false,
  required: [
    'name',
    'address',
    'industry',
    'howDidTheyHearAboutUs',
    'firstName',
    'lastName',
    'email',
    'phone',
  ],
} as const;


export type Partner = FromSchema<typeof AJV_PARTNER_SCHEMA>;

export type CreatePartnerInput = Partner;

export type UpdatePartnerInput = Partial<Omit<CreatePartnerInput, 'id'>>;

export type GetPartnersInput = FromSchema<typeof AJV_GET_PARTNERS_INPUT_SCHEMA>;

export type SignUpPartnerInput = FromSchema<typeof AJV_SIGN_UP_PARTNER_INPUT_SCHEMA>;

