"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_BILLING_SCHEMA = void 0;
exports.AJV_BILLING_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        billingAddress: { type: 'string' },
        billingEmail: { type: 'string' },
        legalEntityName: { type: 'string' },
        partnerId: { type: 'string' },
        stripeCustomerId: { type: 'string' },
    },
    additionalProperties: false,
    required: [
        'id',
        'billingAddress',
        'billingEmail',
        'legalEntityName',
        'partnerId',
    ],
};
