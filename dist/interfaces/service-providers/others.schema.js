"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_CONTACT_INFO_SCHEMA = exports.AJV_INTEGRATION_SCHEMA = exports.AJV_INTEGRATION_TYPE_SCHEMA = void 0;
exports.AJV_INTEGRATION_TYPE_SCHEMA = {
    enum: [
        'email',
        'axiom_webhook',
        'manual_online',
        'manual_in_person',
        'manual_phone',
        'emailWithPDF',
        'api',
        'online_form',
    ],
};
exports.AJV_INTEGRATION_SCHEMA = {
    type: 'object',
    properties: {
        integrationType: exports.AJV_INTEGRATION_TYPE_SCHEMA,
        instructions: { type: 'string' },
        email: { type: 'string' },
        name: { type: 'string' },
        pdf: { type: 'string' },
        website: { type: 'string' },
    },
    required: ['integrationType', 'instructions'],
    additionalProperties: false,
};
exports.AJV_CONTACT_INFO_SCHEMA = {
    type: 'object',
    properties: {
        address: { type: 'string' },
        phone: { type: 'string' },
        email: { type: 'string' },
        website: { type: 'string' },
    },
    additionalProperties: false,
};
