import { useState, useEffect } from "react";

interface ICategory {
   id: number,
   name: string,
   cover: string,
   path: string,
   emoji: string
}

export const useFetchData = (url: ICategory[], initialState = []) => {
   const [ isLoading, setLoading ] = useState<boolean>(false)
   const [ data, setData ] = useState<ICategory[]>(initialState)

   useEffect(() => {
      setLoading(true)
      setData(url)
      setLoading(false)

   }, [])

   return { data, isLoading };
}