import React from 'react';

/* context */
import { authContext } from '../context/authContext';
import { useContext } from 'react';

/* Router */
import { useHistory } from 'react-router-dom'

export const User = () => {
   const { disableAuth } = useContext<any>(authContext);
   const { push } = useHistory()

   const handleClick = () => {
      disableAuth()
      push('/')
   }

   return (
      <div>
         <button onClick={handleClick}>
            LogOut
         </button>
      </div>
   )
}
