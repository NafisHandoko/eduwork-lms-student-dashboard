import { UserType } from "./UserTypes";

export interface AuthStateInterface {
  user: UserType | null,
  loads: Array<string>
}