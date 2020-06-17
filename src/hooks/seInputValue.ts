import { useState, ChangeEvent } from 'react';

/* Types */
interface IValues {
   password?: string,
   email?   : string,
}

type TChangeE = ChangeEvent<HTMLInputElement>

export const useInputValue = (initialState = {}): [IValues, (e: TChangeE) => void] => {
   const [values, setValues] = useState<IValues | {}>(initialState)

   const onChange = ({ target }: TChangeE): void => {
      const { name, value } = target;
      setValues({
         ...values,
         [name]: value
      })
   }

   return [ values, onChange ]
}