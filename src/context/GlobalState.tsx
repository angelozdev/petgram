import React, { useReducer } from 'react';
import { reducer, ACTIVE_AUTH, DISABLE_AUTH } from './reducer';
import { authContext } from './authContext'

interface IProps {
   children: JSX.Element | JSX.Element[]
}

export const GlobalState = ({ children }: IProps) :JSX.Element => {
   const [state, dispatch] = useReducer(reducer, { isAuth: window.sessionStorage.getItem('token') ? true : false })

   const activeAuth = (token: string): void => {
      window.sessionStorage.setItem('token', token)
      dispatch({ type: ACTIVE_AUTH })
   }

   const disableAuth = (token: string): void => {
      window.sessionStorage.removeItem('token')
      dispatch({ type: DISABLE_AUTH })
   }

   const value = {
      isAuth: state.isAuth,
      activeAuth,
      disableAuth,
   }

   return (
      <authContext.Provider value={value}>
         { children }
      </authContext.Provider>
   )
}
