"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_INVOICE_SCHEMA = void 0;
const users_schema_1 = require("../users/users.schema");
exports.AJV_INVOICE_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        partnerId: { type: 'string' },
        date: { type: 'number' },
        users: {
            type: 'array',
            items: users_schema_1.AJV_USER_SCHEMA,
        },
        stripeId: { type: 'string' },
        stripeHostedUrl: { type: 'string' },
        amountDue: { type: 'number' },
        amountPaid: { type: 'number' },
        paid: { type: 'boolean' },
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
