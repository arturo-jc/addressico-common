"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_SIGN_UP_PARTNER_INPUT_SCHEMA = exports.AJV_GET_PARTNERS_INPUT_SCHEMA = exports.AJV_PARTNER_SCHEMA = exports.AJV_BASE_PARTNER_PROPERTIES = void 0;
const others_schema_1 = require("./others.schema");
const ajv_consts_1 = require("../ajv.consts");
exports.AJV_BASE_PARTNER_PROPERTIES = {
    id: ajv_consts_1.AJV_STRING_SHORT,
    name: ajv_consts_1.AJV_STRING_SHORT,
    logo: ajv_consts_1.AJV_STRING_LONG,
    message: { type: 'string' },
    signature: ajv_consts_1.AJV_STRING_SHORT,
    actionOne: others_schema_1.AJV_ACTION_SCHEMA,
    actionTwo: others_schema_1.AJV_ACTION_SCHEMA,
    address: ajv_consts_1.AJV_STRING_LONG,
    industry: ajv_consts_1.AJV_STRING_SHORT,
    howDidTheyHearAboutUs: ajv_consts_1.AJV_STRING_SHORT,
};
exports.AJV_PARTNER_SCHEMA = {
    type: 'object',
    properties: Object.assign({}, exports.AJV_BASE_PARTNER_PROPERTIES),
    additionalProperties: false,
    required: [
        'id',
        'name',
        'logo',
        'message',
        'signature',
    ],
};
exports.AJV_GET_PARTNERS_INPUT_SCHEMA = {
    type: 'object',
    properties: {
        id: ajv_consts_1.AJV_STRING_SHORT,
    },
    additionalProperties: false,
    required: [],
};
exports.AJV_SIGN_UP_PARTNER_INPUT_SCHEMA = {
    type: 'object',
    properties: {
        name: ajv_consts_1.AJV_STRING_SHORT,
        address: ajv_consts_1.AJV_STRING_LONG,
        industry: ajv_consts_1.AJV_STRING_SHORT,
        howDidTheyHearAboutUs: ajv_consts_1.AJV_STRING_SHORT,
        firstName: ajv_consts_1.AJV_STRING_SHORT,
        lastName: ajv_consts_1.AJV_STRING_SHORT,
        email: ajv_consts_1.AJV_STRING_SHORT,
        phone: ajv_consts_1.AJV_STRING_SHORT,
    },
    additionalProperties: false,
    required: [
        'name',
        'address',
        'industry',
        'howDidTheyHearAboutUs',
        'firstName',
        'lastName',
        'email',
        'phone',
    ],
};
