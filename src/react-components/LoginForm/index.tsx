import React, { FormEvent, useContext } from 'react';

/* Context */
import { authContext } from '../../context/authContext';

/* Hooks */
import { useInputValue } from '../../hooks/seInputValue';

/* Styles */
import { FormStyled } from '../SignupForm/styles';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiOutlineLoading } from 'react-icons/ai';

/* Components */
import { Logo } from '../Logo';

/* GraphQL y Apollo */
import { useMutation } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

export const LoginForm = () => {
   const { activeAuth } = useContext<any>(authContext)
   const [{ password, email }, onChange] = useInputValue({ password: 'admin123', email: 'johndoe@email.com' });

   const REGISTER: DocumentNode = gql`
      mutation($input: UserCredentials!) {
         login(input: $input)
      }
   `
   const [ register, { loading, error } ] = useMutation(REGISTER, {variables: { input: { email, password } }})

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()

      if(password !== '' && email !== ''){
         register()
         .then(({data}) => {
            activeAuth(data.login)
         })
         .catch(err => console.error(err))
      }
   }

   return (
      <FormStyled>
         <form onSubmit={handleOnSubmit}>
            <Logo />
            <h2>Log in</h2>
            <div className="form-control">
               <label htmlFor="email">
                  <FaUser color="gray"/>
               </label>
               <input
                  disabled={loading}
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
                  disabled={loading}
                  onChange={onChange}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
               />
            </div>

            <button className="btn-enter" disabled={loading} type="submit">
               {loading
                  ? <span className="spinner"><AiOutlineLoading /></span>
                  : 'Log in'
               }
            </button>
            <span className="message">
               { error && "Password or email incorrect" }
            </span>
         </form>
      </FormStyled>
   )
}
