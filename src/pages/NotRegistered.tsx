import React, { Fragment } from 'react';

/* Components */
import { SignupForm } from '../react-components/SignupForm';
import { LoginForm } from '../react-components/LoginForm';

/* Route */

const NotRegistered = () => {
   return (
      <Fragment>
         <LoginForm />
         <SignupForm/>
      </Fragment>
   )
}

export default NotRegistered;
