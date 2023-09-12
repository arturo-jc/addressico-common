import { CreateUserInput } from "../users/users.schema";

export interface SendUserInviteInput {
  user: CreateUserInput;
  message?: string;
};

export interface GetInvitedUsersInput {
  invitedByUserId?: string;
  invitedByBusinessId?: string;
}

