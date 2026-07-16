export type UserRole = "developer" | "team_lead" | "hr";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}