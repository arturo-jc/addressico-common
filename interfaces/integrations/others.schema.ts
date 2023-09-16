import { FromSchema } from "json-schema-to-ts";
import { AJV_INTEGRATION_TYPE_SCHEMA } from "../service-providers/others.schema";

export const AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    serviceProviderId: { type: 'string' },
    integrationType: AJV_INTEGRATION_TYPE_SCHEMA
  },
  required: ['serviceProviderId', 'integrationType'],
  additionalProperties: false,
} as const;


export type NotifyServiceProviderInput = FromSchema<typeof AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA>;
