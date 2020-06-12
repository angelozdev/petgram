import { useState, useEffect } from "react";

export const useFetchData = (url: any, initialState: any[] = []) => {
   const [ isLoading, setLoading ] = useState<boolean>(false)
   const [ data, setData ] = useState<any[]>(initialState)
   
   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setData(url)
         setLoading(false)
      }, 2000)
   }, [])

   return { data, isLoading };
} 