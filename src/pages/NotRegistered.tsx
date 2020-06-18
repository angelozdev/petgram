import React, { Fragment, useState } from 'react';

/* Components */
import { SignupForm } from '../react-components/SignupForm';
import { LoginForm } from '../react-components/LoginForm';


const NotRegistered = () => {
   const [login, setLogin] = useState(true);
   return (
      <Fragment>{
         login
         ? <LoginForm setLogin={setLogin} />
         : <SignupForm setLogin={setLogin} />
      }</Fragment>
   )
}

export default NotRegistered;
