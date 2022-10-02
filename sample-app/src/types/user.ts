export interface User {
  id: string;

  displayName?: string;
  firstName?: string;
  lastName?: string;
  username?: string;

  email?: string;
  phoneNumber?: string;

  tags?: string[];
};
