import React, { useReducer, useContext } from 'react';
import { reducer } from './reducer';
import { Context } from './Context'

interface IProps {
   children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider = ({ children }: IProps) => {
   const initialState = {
      isAuth: false
   }

   return (
      <Context.Provider value={useReducer(reducer, initialState)}>
         { children }
      </Context.Provider>
   )
}

export const useAuthContext = () => useContext(Context);