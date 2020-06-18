import React, { Fragment } from 'react';

/* context */
import { authContext } from '../context/authContext';
import { useContext } from 'react';

/* Router */
import { useHistory } from 'react-router-dom';

/* SEO */
import { Helmet } from 'react-helmet'

/* Styles */
import styled from 'styled-components';

const UserStyled = styled.div`
   width: 100%;
   padding: 1rem;
   text-align: center;

   button {
      padding: .6rem 2rem;
      text-transform: uppercase;
      color: white;
      background-color: brown;
      border: none;
      outline: none;
      border-radius: 20px;
   }
`

const User = () => {
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
         <UserStyled>
            <button onClick={handleClick}>
               LogOut
            </button>
         </UserStyled>
      </Fragment>
   )
}

export default User;
