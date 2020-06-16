import React, { FormEvent } from 'react';
import { useAuthContext } from '../hooks/context/AuthContext'

export const NotRegistered = () => {
   const [{ isAuth }, dispath] = useAuthContext()

   const handleOnSubmit = (e: FormEvent) => {
      e.preventDefault()
      dispath({type: 'ACTIVE_AUTH'})
   }

   return (
      <form onSubmit={handleOnSubmit}>
         <button type="submit">Click me!</button>
      </form>
   )
}
