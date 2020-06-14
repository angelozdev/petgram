import React from 'react';

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
   loading?: boolean
}

export const PhotoCard = (props: IProps) => {
   const { 
      id, 
      likes = 0, 
      categoryId, 
      userId, 
      src = 'https://webartdevelopers.com/blog/wp-content/uploads/2019/06/Newton-Loader-HTML-CSS.gif' 
   } = props.details || {};
   const { loading } = props;
   const [ isShow, element ] = useNearScreen();
   const [ liked, setLiked ] = useLocalStorage(id)
   
   return (
      <PhotoCardStyled ref={element}>
         {
            isShow 
            ? <>
               <a href={`/?detail=${id}`}>
                  <figure>
                     <img loading="lazy" src={src} alt={`photo by ${id}`}/>
                  </figure>
               </a>
               {
                  !loading &&
                  <button onClick={() => setLiked(!liked)}>
                     {liked 
                        ? <FaHeart color="red" size="1.5rem"/>
                        : <FaRegHeart size="1.5rem" />
                     }
                     {likes} likes
                  </button> 
               }
            </>
            : null
         }
      </PhotoCardStyled>
   )
}