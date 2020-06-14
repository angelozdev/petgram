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
   loading?: boolean
}

export const PhotoCard = (props: IProps) => {
   const { 
      id, 
      likes = 0, 
      categoryId, 
      userId, 
      src
   } = props.details || {};
   const { loading } = props;
   const [ isShow, element ] = useNearScreen();
   
   return (
      <PhotoCardStyled ref={element}>
         {
            isShow 
            ? <>
               <Link to={`/detail/${id}`}>
                  <figure>
                     <img loading="lazy" src={src} alt={`photo by ${id}`}/>
                  </figure>
               </Link>
               {!loading && <LikeButton likes={likes} id={id}/>}
            </>
            : null
         }
      </PhotoCardStyled>
   )
}