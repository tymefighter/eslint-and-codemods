// Libraries
import { useState } from 'react';

// Components
import { User } from 'components/user';
import { Note } from 'deprecated/components';

const USER = {
  id: 'MOCK_USER',

  firstName: 'Mock',
  lastName: 'User',
  username: 'mock_user',

  email: 'mock.user@mock.com',
  phoneNumber: '1231231230',

  tags: [
    'mock',
    'user',
    'tag',
    'eslint'
  ]
};

export const App = (): JSX.Element => {
  const [isUserShown, setIsUserShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsUserShown(true)}>Show User?</button>
      {isUserShown ? (
        <User showContactDetails user={USER} />
      ) : null}
      <Note />
    </div>
  )
}
