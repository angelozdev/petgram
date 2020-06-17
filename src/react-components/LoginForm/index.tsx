import React, { FormEvent, useContext } from 'react';

/* Context */
import { authContext } from '../../context/authContext';

/* Hooks */
import { useInputValue } from '../../hooks/seInputValue';

/* Styles */
import { LoginFormStyled } from './styles';
import { FaUser, FaLock } from 'react-icons/fa';

/* Components */
import { Logo } from '../Logo'


export const LoginForm = () => {
   const { activeAuth } = useContext<any>(authContext)
   const [{ password, email }, onChange] = useInputValue({ password: 'asdf', email: 'johndoe@email.com' })

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()

      if(password !== '' && email !== ''){
         activeAuth()
      }
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
                  value={email}
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
                  value={password}
               />
            </div>

            <button type="submit">Login</button>
         </form>
      </LoginFormStyled>
   )
}
