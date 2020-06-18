import React, { FormEvent, useContext, SetStateAction } from 'react';

/* Context */
import { authContext } from '../../context/authContext';

/* Hooks */
import { useInputValue } from '../../hooks/seInputValue';

/* Styles */
import { FormStyled } from './styles';
import { FaUser, FaLock } from 'react-icons/fa';
import { AiOutlineLoading } from 'react-icons/ai';

/* Components */
import { Logo } from '../Logo';

/* GraphQL y Apollo */
import { useMutation } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

interface IProps {
   setLogin: (inLogin: SetStateAction<boolean>) => void
}

export const SignupForm = ({ setLogin }: IProps) => {
   const { activeAuth } = useContext<any>(authContext)
   const [{ password, email }, onChange] = useInputValue({ password: 'admin123', email: 'johndoe@email.com' });

   const SIGNUP: DocumentNode = gql`
      mutation($input: UserCredentials!) {
         signup(input: $input)
      }
   `
   const [ signup, { loading, data, error } ] = useMutation(SIGNUP, {variables: { input: { email, password } }})

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()

      if(password !== '' && email !== ''){
         signup()
         .then(({data}) => {
            activeAuth(data.signup)
         })
         .catch(err => console.error(err))
      }
   }

   return (
      <FormStyled>
         <form onSubmit={handleOnSubmit}>
            <Logo />
            <h2>Sign Up</h2>
            <div className="form-control">

               <label htmlFor="name">
                  <FaUser color="gray"/>
               </label>
               <input
                  disabled={loading}
                  name="name"
                  id="name"
                  type="name"
                  placeholder="Username"
               />
            </div>

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
                  : 'Sign up'
               }
            </button>
            <span className="message">
               { error && "User already exists" }
            </span>
            <button className="btn-change" onClick={() => setLogin(true)}>
               Ya tengo una cuenta
            </button>
         </form>
      </FormStyled>
   )
}
