// Libraries
import { lazy, Suspense } from 'react';

// Types
import type { UserProps } from './types';

const User = lazy(() => import('./User').then(({ User }) => ({
  default: User
})));

const UserWrapper = (props: UserProps): JSX.Element => (
  <Suspense fallback={null}>
    <User {...props} /> 
  </Suspense>
)

export { UserWrapper as User };
