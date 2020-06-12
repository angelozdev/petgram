import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: boolean = false): any[] => {
   const [ value, setValue ] = useState(() => (
      localStorage.getItem(key) 
      ? JSON.parse(localStorage.getItem(key)) 
      : initialValue
   ));

   const setLocalStorage = (value: boolean): void => {
      setValue(value)
      localStorage.setItem(key, JSON.stringify(value))
   }

   return [ value, setLocalStorage ];
}
