import { useState, useEffect } from "react";
import { categories as data } from '../../api/db.json';

export const useCategories = () => {
   const [loading, setLoading] = useState(false)
   const [categories, setCategories] = useState([])
   
   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setCategories(data)
         setLoading(false)
      }, 2000)
   }, [])

   return { categories, loading };
}