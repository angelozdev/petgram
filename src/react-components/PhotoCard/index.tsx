import React, { useRef, useState } from 'react';

/* Styles */
import { PhotoCardStyled } from './styles';
import { FaRegHeart, FaHeart } from 'react-icons/fa'

/* Hooks */
import { useNearScreen } from '../../hooks/useNearScreen';
import { useLocalStorage } from '../../hooks/useLocalStorage'

interface IProps {
   details?: {
      id: number,
      likes: number,
      categoryId: number,
      userId: number,
      src: string
   }
}

export const PhotoCard = (props: IProps) => {
   const { id, likes = 0, categoryId, userId, src = 'https://i.pinimg.com/originals/4d/79/e4/4d79e45299ba276f530cbda84f5eca05.gif' } = props.details || {};
   const [ isShow, element ] = useNearScreen();
   const [ liked, setLiked ] = useLocalStorage(id)
   
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
               <button onClick={() => setLiked(!liked)}>
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