import { useState, useEffect, useRef, MutableRefObject } from 'react';

export const useNearScreen = (): any[] => {
   const element: MutableRefObject<HTMLElement> = useRef()
   const [isShow, setIsShow] = useState<Boolean>(false)
   
   useEffect(() => {
      /* ¿Intersection es compatible? */
      Promise.resolve(
         window.IntersectionObserver || import('intersection-observer')
      )
      /* La importación se parchea automáticamente */
      .then(() => {
         const observer: IntersectionObserver = new IntersectionObserver((entries) => {
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

   return [ isShow, element ]
}