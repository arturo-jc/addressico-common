import { FromSchema } from "json-schema-to-ts";
export declare const AJV_AUTH_ROLE_SCHEMA: {
    readonly enum: readonly ["partner", "user"];
};
export declare const AJV_CREATE_USER_INPUT_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly email: {
            readonly type: "string";
        };
        readonly firstName: {
            readonly type: "string";
        };
        readonly lastName: {
            readonly type: "string";
        };
        readonly movingDate: {
            readonly type: "string";
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly role: {
            readonly enum: readonly ["partner", "user"];
        };
    };
    readonly required: readonly ["email", "role"];
    readonly additionalProperties: false;
};
export declare const AJV_GET_USER_INPUT_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly invitedBy: {
            readonly type: "string";
        };
        readonly employeeOfPartner: {
            readonly type: "string";
        };
    };
    readonly required: readonly [];
    readonly additionalProperties: false;
};
export type CreateUserInput = FromSchema<typeof AJV_CREATE_USER_INPUT_SCHEMA>;
export type GetUserInput = FromSchema<typeof AJV_GET_USER_INPUT_SCHEMA>;
export type Auth0Role = FromSchema<typeof AJV_AUTH_ROLE_SCHEMA>;
//# sourceMappingURL=others.schema.d.ts.map