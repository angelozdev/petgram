import React, { useReducer, useContext } from 'react';
import { reducer } from './reducer';
import { Context } from './Context'

interface IProps {
   children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider = ({ children }: IProps) :JSX.Element => {
   const initialState = {
      isAuth: false
   }

   return (
      //Paso un useReducer como value que devuelve un arreglo [state, dispatch]
      <Context.Provider value={useReducer(reducer, initialState)}>
         { children }
      </Context.Provider>
   )
}

export const useAuthContext = () => useContext(Context);