// Utils
import { getName } from 'utils/getName';

// Types
import type { UserProps } from './types';
 
export const User = ({ user, showContactDetails: _showContactDetails }: UserProps): JSX.Element => {
  const name = getName(user);

  const SHOW_CONTACT_DETAILS = _showContactDetails && Boolean(user.email || user.phoneNumber);

  return (
    <div>
      <h1>
        {name}
      </h1>
      {SHOW_CONTACT_DETAILS ? (
        <ul>
          {user.email ? <li>Email: {user.email}</li> : null}
          {user.phoneNumber ? <li>Phone Number: {user.phoneNumber}</li> : null}
        </ul> 
      ) : null}
      {user.tags?.length ? (
        <div>
          Tags: {user.tags.map(tag => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
} 