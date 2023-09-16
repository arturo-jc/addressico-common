"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AJV_FIELD_SCHEMA = void 0;
const controls_schema_1 = require("./controls.schema");
/**
 * `FromSchema` does not support recursive schemas so we must pass a non-recursive schema to construct the basic type.
 * DO NOT USE FOR VALIDATION. Use `AJV_FIELD_SCHEMA` instead.
 */
const _NON_RECURSIVE_FIELD_SCHEMA = {
    type: 'object',
    properties: Object.assign(Object.assign({}, controls_schema_1.BASE_FIELD_PROPERTIES), { id: { type: 'string' } }),
    required: [
        'id',
        ...controls_schema_1.BASE_FIELD_REQUIRED_PROPERTIES,
    ],
    additionalProperties: false,
};
;
exports.AJV_FIELD_SCHEMA = Object.assign(Object.assign({}, _NON_RECURSIVE_FIELD_SCHEMA), { properties: Object.assign(Object.assign({}, _NON_RECURSIVE_FIELD_SCHEMA.properties), { subFields: {
            type: 'array',
            items: { $ref: '#' },
        }, controls: {
            type: 'array',
            items: { $ref: '#/definitions/control' },
        }, arrayItemType: { $ref: '#/definitions/control' } }), definitions: {
        control: controls_schema_1.AJV_CONTROL_SCHEMA,
    } });
