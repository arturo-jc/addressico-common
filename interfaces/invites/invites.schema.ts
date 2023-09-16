import { CreateUserInput } from "../users/others.schema";

export interface SendUserInviteInput {
  user: CreateUserInput;
  message?: string;
};

export interface GetInvitedUsersInput {
  invitedByUserId?: string;
  invitedByBusinessId?: string;
}
