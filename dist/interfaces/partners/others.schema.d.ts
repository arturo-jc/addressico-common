import { FromSchema } from "json-schema-to-ts";
import { BasicUser } from "../users/users.schema";
import { Partner } from "./partners.schema";
export declare const AJV_ACTION_SCHEMA: {
    readonly type: "object";
    readonly properties: {
        readonly label: {
            readonly type: "string";
        };
        readonly icon: {
            readonly type: "string";
        };
        readonly link: {
            readonly type: "string";
        };
        readonly enabled: {
            readonly type: "boolean";
        };
    };
    readonly additionalProperties: false;
    readonly required: readonly ["label", "icon", "link", "enabled"];
};
export type Action = FromSchema<typeof AJV_ACTION_SCHEMA>;
export interface PartnerWithUsers extends Partner {
    employees: BasicUser[];
    invitedUsers: BasicUser[];
}
//# sourceMappingURL=others.schema.d.ts.map