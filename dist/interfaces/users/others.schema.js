"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_GET_USER_INPUT_SCHEMA = exports.AJV_CREATE_USER_INPUT_SCHEMA = exports.AJV_AUTH_ROLE_SCHEMA = void 0;
exports.AJV_AUTH_ROLE_SCHEMA = {
    enum: [
        'partner',
        'user',
    ],
};
exports.AJV_CREATE_USER_INPUT_SCHEMA = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        movingDate: { type: 'string' },
        phone: { type: 'string' },
        role: exports.AJV_AUTH_ROLE_SCHEMA,
        employeeOfPartner: { type: 'string' },
    },
    required: ['email', 'role'],
    additionalProperties: false,
};
exports.AJV_GET_USER_INPUT_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        invitedBy: { type: 'string' },
        employeeOfPartner: { type: 'string' },
    },
    required: [],
    additionalProperties: false,
};
