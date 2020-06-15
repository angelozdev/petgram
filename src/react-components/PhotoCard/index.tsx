import React from 'react';

/* Styles */
import { PhotoCardStyled } from './styles';

/* Hooks */
import { useNearScreen } from '../../hooks/useNearScreen';

/* Components */
import { LikeButton } from "../LikeButton";

/* Routes */
import { Link } from 'react-router-dom';

interface IProps {
   details?: {
      id: number,
      likes: number,
      categoryId: number,
      userId: number,
      src: string
   }
}

export const PhotoCard = ({ details }: IProps): JSX.Element => {
   const {
      id,
      likes = 0,
      categoryId,
      userId,
      src
   } = details || {};

   const [ show, article ] = useNearScreen();

   return (
      <PhotoCardStyled ref={article}>
         {
            show &&
            <>
               <Link to={`/detail/${id}`}>
                  <figure>
                     <img loading="lazy" src={src} alt={`photo by ${id}`}/>
                  </figure>
               </Link>
               <LikeButton likes={likes} id={id}/>
            </>
         }
      </PhotoCardStyled>
   )
}