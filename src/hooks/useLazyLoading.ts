import { useState, useEffect } from 'react'

export const useLazyLoading = (element) => {
   const [isShow, setIsShow] = useState(false)
   
   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         const { isIntersecting } = entries[0];
         if(isIntersecting){
            setIsShow(true)
            observer.disconnect()
         }
      }, {
         threshold: .25
      })
   
      observer.observe(element.current)
      
   }, [element])

   return { isShow }
}