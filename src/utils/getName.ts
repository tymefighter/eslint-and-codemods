// Types
import type { User } from 'types/user';

export const getName = (user: User): string => {
  let name: string;

  if(user.displayName) 
    name = user.displayName;

  else if(user.firstName)
    name = `${user.firstName}${user.lastName ? ` ${user.lastName}` : ''}`;

  else if(user.username)
    name =  user.username;

  else if(user.email)
    name =  user.email;

  else
    name = 'user';

  return name;
}
