import React, { FormEvent, useContext } from 'react';

/* Context */
import { authContext } from '../../context/authContext';

/* Hooks */
import { useInputValue } from '../../hooks/seInputValue';

/* Styles */
import { LoginFormStyled } from './styles';
import { FaUser, FaLock } from 'react-icons/fa';

/* Components */
import { Logo } from '../Logo';

/* GraphQL y Apollo */
import { useMutation } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

interface IProps {
   title: string
}

export const LoginForm = ({ title }: IProps) => {
   const { activeAuth } = useContext<any>(authContext)
   const [{ password, email }, onChange] = useInputValue({ password: 'admin123', email: 'johndoe@email.com' });

   const REGISTER: DocumentNode = gql`
      mutation($input: UserCredentials!) {
         signup(input: $input)
      }
   `
   const [ register ] = useMutation(REGISTER, {variables: { input: { email, password } }})

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()

      if(password !== '' && email !== ''){
         register()
            .then(activeAuth)
            .catch(err => {
               console.log(err)
            })
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

            <button type="submit">{title}</button>
         </form>
      </LoginFormStyled>
   )
}
