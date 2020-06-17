import React, { useReducer } from 'react';
import { reducer, ACTIVE_AUTH } from './reducer';
import { authContext } from './authContext'

interface IProps {
   children: JSX.Element | JSX.Element[]
}

export const GlobalState = ({ children }: IProps) :JSX.Element => {
   const [state, dispatch] = useReducer(reducer, { isAuth: false })

   const activeAuth = (): void => {
      dispatch({ type: ACTIVE_AUTH })
   }

   const value = {
      isAuth: state.isAuth,
      activeAuth,
   }

   return (
      <authContext.Provider value={value}>
         { children }
      </authContext.Provider>
   )
}
