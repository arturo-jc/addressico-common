"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA = void 0;
const others_schema_1 = require("../service-providers/others.schema");
exports.AJV_NOTIFY_SERVICE_PROVIDER_INPUT_SCHEMA = {
    type: 'object',
    properties: {
        serviceProviderId: { type: 'string' },
        integrationType: others_schema_1.AJV_INTEGRATION_TYPE_SCHEMA
    },
    required: ['serviceProviderId', 'integrationType'],
    additionalProperties: false,
};
