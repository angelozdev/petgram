import React, { Fragment } from 'react';

/* Components */
import { SignupForm } from '../react-components/SignupForm';
import { LoginForm } from '../react-components/LoginForm';

/* Route */

export const NotRegistered = () => {
   return (
      <Fragment>
         <LoginForm />
         <SignupForm/>
      </Fragment>
   )
}
