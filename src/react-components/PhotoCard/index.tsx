import React, { useRef, useState } from 'react';

/* Styles */
import { PhotoCardStyled } from './styles';
import { FaRegHeart, FaHeart, FaHourglassEnd } from 'react-icons/fa'

/* Hooks */
import { useLazyLoading } from '../../hooks/useLazyLoading'

interface IProps {
   details: {
      id: number,
      likes: number,
      categoryId: number,
      userId: number,
      src: string
   }
}

export const PhotoCard = (props: IProps) => {
   const { id, likes = 0, categoryId, userId, src} = props.details;
   const element = useRef(null);
   const { isShow } = useLazyLoading(element);
   const key = `liked-${id}`
   const [liked, setLiked] = useState(() => (
      JSON.parse(localStorage.getItem(key)) || false
   ));
   

   const setLocalStorage = () => {
      setLiked(!liked)
      localStorage.setItem(key, JSON.stringify(!liked))
   }

   return (
      <PhotoCardStyled ref={element}>
         {
            isShow 
            ? <>
               <a href={`/pet/${id}`}>
                  <figure>
                     <img loading="lazy" src={src} alt={`photo by ${id}`}/>
                  </figure>
               </a>
               <button onClick={setLocalStorage}>
                  {liked 
                     ? <FaHeart size="1.5rem"/>
                     : <FaRegHeart size="1.5rem" />
                  }
                  {likes} likes
               </button> 
            </>
            : null
         }
      </PhotoCardStyled>
   )
}