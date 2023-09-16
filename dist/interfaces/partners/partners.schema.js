"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_PARTNER_SCHEMA = void 0;
const others_schema_1 = require("./others.schema");
exports.AJV_PARTNER_SCHEMA = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        logo: { type: 'string' },
        message: { type: 'string' },
        signature: { type: 'string' },
        actionOne: others_schema_1.AJV_ACTION_SCHEMA,
        actionTwo: others_schema_1.AJV_ACTION_SCHEMA,
    },
    additionalProperties: false,
    required: [
        'id',
        'name',
        'logo',
        'message',
        'signature',
    ],
};
