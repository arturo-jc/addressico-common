"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_SERVICE_PROVIDER_SCHEMA = void 0;
const others_schema_1 = require("./others.schema");
exports.AJV_SERVICE_PROVIDER_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        name_fr: { type: 'string' },
        shortName: { type: 'string' },
        shortName_fr: { type: 'string' },
        integrations: {
            type: 'array',
            items: others_schema_1.AJV_INTEGRATION_SCHEMA,
        },
        inactive: {
            type: 'array',
            items: others_schema_1.AJV_INTEGRATION_SCHEMA,
        },
        categories: {
            type: 'array',
            items: { type: 'string' },
        },
        jurisdictions: {
            type: 'array',
            items: { type: 'string' },
        },
        contactInfo: others_schema_1.AJV_CONTACT_INFO_SCHEMA,
        logo: { type: 'string' },
        integrationType: others_schema_1.AJV_INTEGRATION_TYPE_SCHEMA,
        instructions: {
            type: 'array',
            items: { type: 'string' },
        },
        instructions_fr: {
            type: 'array',
            items: { type: 'string' },
        },
        requiredDocuments: {
            type: 'array',
            items: { type: 'string' },
        },
        details: {
            type: 'array',
            items: { type: 'string' },
        },
        details_fr: {
            type: 'array',
            items: { type: 'string' },
        },
        risks: {
            type: 'array',
            items: { type: 'string' },
        },
        whenToUpdate: { type: 'string' },
        requiredInformationIds: {
            type: 'array',
            items: { type: 'string' },
        },
    },
    required: [
        'id',
        'name',
        'integrations',
        'categories',
        'requiredInformationIds',
    ],
    additionalProperties: false,
};
