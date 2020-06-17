import React, { FormEvent } from 'react';
import { useAuthContext } from '../../hooks/context/AuthContext';

/* Hooks */
import { useInputValue } from '../../hooks/seInputValue';

/* Styles */
import { LoginFormStyled } from './styles';
import { FaUser, FaLock } from 'react-icons/fa';

/* Routes */
import { useHistory } from 'react-router-dom'

/* Components */
import { Logo } from '../Logo'


export const LoginForm = () => {
   const [{}, dispath] = useAuthContext()
   const [{ password, email }, onChange] = useInputValue({ password: '', email: '' })
   const { push } = useHistory()

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()

      password !== '' && email !== ''
      ? dispath({type: 'ACTIVE_AUTH'})
      : alert('Debes completar todos los campos.')
   }

   return (
      <LoginFormStyled>
         <form onSubmit={handleOnSubmit}>
            <Logo />
            <div className="form-control">
               <label htmlFor="email">
                  <FaUser color="gray"/>
               </label>
               <input
                  onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
               />
            </div>

            <div className="form-control">
               <label htmlFor="password">
                  <FaLock color="gray" />
               </label>
               <input
                  onChange={onChange}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
               />
            </div>

            <button type="submit">Login</button>
         </form>
      </LoginFormStyled>
   )
}
