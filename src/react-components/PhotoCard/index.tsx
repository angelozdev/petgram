import React from 'react';

/* Styles */
import { PhotoCardStyled } from './styles';
import { FaRegHeart } from 'react-icons/fa'

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
   
   return (
      <PhotoCardStyled>
         <a href={`/pet/${id}`}>
            <figure>
               <img loading="lazy" src={src} alt={`photo by ${id}`}/>
            </figure>
         </a>
         <button>
            <FaRegHeart size="1.5rem" />
            {likes} likes
         </button>
      </PhotoCardStyled>
   )
}