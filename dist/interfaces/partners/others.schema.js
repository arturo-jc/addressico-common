"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_ACTION_SCHEMA = void 0;
exports.AJV_ACTION_SCHEMA = {
    type: 'object',
    properties: {
        label: { type: 'string' },
        icon: { type: 'string' },
        link: { type: 'string' },
        enabled: { type: 'boolean' },
    },
    additionalProperties: false,
    required: ['label', 'icon', 'link', 'enabled'],
};
