import { useState } from "react";

export const useLocalStorage = (id: number, initialValue: boolean = false): any[] => {
   const key: string = `liked-${id}`
   const [ value, setValue ] = useState<boolean>(() => (
      JSON.parse(localStorage.getItem(key)) || initialValue
   ));

   const setLocalStorage = (value: boolean): void => {
      setValue(value)
      localStorage.setItem(key, JSON.stringify(value))
   }

   return [ value, setLocalStorage ];
}
