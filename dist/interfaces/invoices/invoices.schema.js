"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_INVOICE_SCHEMA = void 0;
exports.AJV_INVOICE_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        partnerId: { type: 'string' },
        date: { type: 'number' },
        users: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    firstName: { type: 'string' },
                    lastName: { type: 'string' },
                    email: { type: 'string' },
                    emailVerified: { type: 'boolean' },
                    loginsCount: { type: 'number' },
                    lastLogin: { type: 'string' },
                    lastIp: { type: 'string' },
                },
                required: [
                    'id',
                    'firstName',
                    'lastName',
                    'email',
                    'emailVerified',
                    'loginsCount',
                ],
            },
        },
        stripeId: { type: 'string' },
        stripeHostedUrl: { type: 'string' },
        amountDue: { type: 'number' },
        amountPaid: { type: 'number' },
    },
    additionalProperties: false,
    required: [
        'id',
        'partnerId',
        'date',
        'users',
        'stripeId',
        'stripeHostedUrl',
    ],
};
