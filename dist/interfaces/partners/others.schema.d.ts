import { FromSchema } from "json-schema-to-ts";
import { User } from "../users/users.schema";
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
export interface UpdatePartnerInput {
    name?: string;
    logo?: string;
    message?: string;
    signature?: string;
    actionOne?: Action;
    actionTwo?: Action;
}
export interface PartnerWithUsers extends Partner {
    employees: User[];
    invitedUsers: User[];
}
//# sourceMappingURL=others.schema.d.ts.map