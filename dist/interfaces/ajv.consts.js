"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHONE_NUMBER = exports.AJV_EMAIL = exports.AJV_NUMBER = exports.AJV_BOOLEAN = exports.AJV_STRING_LONG = exports.AJV_STRING_SHORT = void 0;
exports.AJV_STRING_SHORT = {
    type: 'string',
    maxLength: 255,
};
exports.AJV_STRING_LONG = {
    type: 'string',
    maxLength: 1024,
};
exports.AJV_BOOLEAN = {
    type: 'boolean',
};
exports.AJV_NUMBER = {
    type: 'number',
};
// TODO: Patterns for both email and phone numbers phone is '+1 2041234567'
exports.AJV_EMAIL = {
    type: 'string',
    // pattern: '^[^@]+@[^@]+\.[^@]+$',
};
exports.PHONE_NUMBER = {
    type: 'string',
};
