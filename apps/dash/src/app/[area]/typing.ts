export type UserItem = {
  name: string;
  email: string;
  passwordHash: string;
  createdAt: number;
  lastLoginAt: number;
  isBlocked: boolean;
  resetChances: number;
  inviterCode: string;
  invitationCodes: string[];
  phone: string;
  subscriptions: any;
  role: string;
};
