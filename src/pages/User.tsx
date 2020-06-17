import React, { Fragment } from 'react';

/* context */
import { authContext } from '../context/authContext';
import { useContext } from 'react';

/* Router */
import { useHistory } from 'react-router-dom';

/* SEO */
import { Helmet } from 'react-helmet'

export const User = () => {
   const { disableAuth } = useContext<any>(authContext);
   const { push } = useHistory()

   const handleClick = () => {
      disableAuth()
      push('/')
   }

   return (
      <Fragment>
         <Helmet>
            <title>Petgram - Profile</title>
         </Helmet>
         <div className="">
            <button onClick={handleClick}>
               LogOut
            </button>
         </div>
      </Fragment>
   )
}
