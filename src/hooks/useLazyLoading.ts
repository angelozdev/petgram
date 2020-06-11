import { useState, useEffect } from 'react';

export const useLazyLoading = (element) => {
   const [isShow, setIsShow] = useState(false)
   
   useEffect(() => {
      /* ¿Intersection es compatible? */
      Promise.resolve(
         window.IntersectionObserver 
         ? window.IntersectionObserver
         /* ¿no? importe esta dependencia*/
         : import('intersection-observer')
      )
      /* La importación se parchea automáticamente */
      .then(() => {
         const observer = new IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];
            if(isIntersecting){
               setIsShow(true)
               observer.disconnect()
            }
         })
         observer.observe(element.current)
      })
      .catch(err => console.error(err))
      
   }, [element])

   return { isShow }
}