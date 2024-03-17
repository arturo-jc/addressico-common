"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_AUTH0_USER_SCHEMA = exports.AJV_USER_SCHEMA = exports.AJV_USER_SERVICES_SCHEMA = exports.AJV_USER_SERVICE_SCHEMA = exports.AJV_SERVICE_DATA_SCHEMA = exports.AJV_SINGLE_SERVICE_DATA_SCHEMA = exports.AJV_USER_LOCATIONS_SCHEMA = exports.AJV_USER_LOCATION_SCHEMA = exports.AJV_USER_SERVICE_DATA_STATUS_SCHEMA = exports.USER_SERVICE_DATA_STATUSES = void 0;
const others_schema_1 = require("../service-providers/others.schema");
const others_schema_2 = require("../fields/others.schema");
exports.USER_SERVICE_DATA_STATUSES = [
    'complete',
    'incomplete',
    'confirmed',
    'failed',
    'in_progress',
];
exports.AJV_USER_SERVICE_DATA_STATUS_SCHEMA = {
    enum: exports.USER_SERVICE_DATA_STATUSES,
};
exports.AJV_USER_LOCATION_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        unitNumber: { type: 'string' },
        street: { type: 'string' },
        streetNumber: { type: 'string' },
        streetType: { type: 'string' },
        city: { type: 'string' },
        postalCode: { type: 'string' },
        country: { type: 'string' },
        jurisdiction: { type: 'string' },
        isCurrent: { type: 'boolean' },
        isMovingTo: { type: 'boolean' },
    },
    required: [
        'id',
        'street',
        'streetNumber',
        'streetType',
        'city',
        'postalCode',
        'country',
        'jurisdiction',
    ],
    additionalProperties: false,
};
exports.AJV_USER_LOCATIONS_SCHEMA = {
    type: 'array',
    items: exports.AJV_USER_LOCATION_SCHEMA,
};
exports.AJV_SINGLE_SERVICE_DATA_SCHEMA = {
    type: 'object',
    properties: {
        serviceId: { type: 'string' },
        fieldId: { type: 'string' },
        value: others_schema_2.AJV_ANY,
    },
    required: ['serviceId', 'fieldId'],
    additionalProperties: false,
};
exports.AJV_SERVICE_DATA_SCHEMA = {
    type: 'array',
    items: exports.AJV_SINGLE_SERVICE_DATA_SCHEMA,
};
exports.AJV_USER_SERVICE_SCHEMA = {
    type: 'object',
    properties: {
        serviceId: { type: 'string' },
        serviceStatus: exports.AJV_USER_SERVICE_DATA_STATUS_SCHEMA,
        integrationType: others_schema_1.AJV_INTEGRATION_TYPE_SCHEMA,
        lastAttemptedUpdateMessageId: { type: 'string' },
    },
    required: ['serviceId', 'serviceStatus', 'integrationType'],
    additionalProperties: false,
};
exports.AJV_USER_SERVICES_SCHEMA = {
    type: 'array',
    items: exports.AJV_USER_SERVICE_SCHEMA,
};
exports.AJV_USER_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        // Format 'YYYY-MM-DD',
        movingDate: { type: 'string' },
        // TODO: Add pattern validation for phone numbers
        phone: { type: 'string' },
        notes: { type: 'string' },
        data: exports.AJV_SERVICE_DATA_SCHEMA,
        services: exports.AJV_USER_SERVICES_SCHEMA,
        locations: exports.AJV_USER_LOCATIONS_SCHEMA,
        createdBy: { type: 'string' },
        createdAt: { type: 'string' },
        lastInviteSentAt: { type: 'string' },
        invitedBy: { type: 'string' },
        employeeOfPartner: { type: 'string' },
        // Shared Information
        defaultProviderEmail: { type: 'string' },
        mailingAddress: { type: 'string' },
        // Format 'YYYY-MM-DD',
        dateOfBirth: { type: 'string' },
        sex: { type: 'string', enum: ['Male', 'Female', 'Other', ''] },
        preferredContactMethod: { type: 'string', enum: ['Email', 'Phone', 'Mail', ''] },
        isInvoiced: { type: 'boolean' },
    },
    required: [
        'id',
        'createdBy',
        'invitedBy',
    ],
    additionalProperties: false,
};
exports.AJV_AUTH0_USER_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        given_name: { type: 'string' },
        family_name: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        email_verified: { type: 'boolean' },
        locale: { type: 'string' },
        // This weird format is required for metadata properties in Auth0
        'https://addressico.web.app/phone': { type: 'string' },
    },
    required: [
        'id',
        'given_name',
        'family_name',
        'name',
        'email',
        'email_verified',
        'locale',
        'https://addressico.web.app/phone',
    ],
    additionalProperties: false,
};
