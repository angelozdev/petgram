import React from 'react';

/* Styles */
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LikeBottonStyled } from "./styles";

/* Hooks */
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const LIKE_PHOTO = gql`
   mutation likeAnonymousPhoto($input: LikePhoto!){
      likeAnonymousPhoto (input: $input) {
         id
         liked
         likes
      }
   }
`

export const LikeButton = (props) => {
   const { likes, id } = props;
   const [ liked, setLiked ] = useLocalStorage(id)
   const [ toggleLike ] = useMutation(LIKE_PHOTO, {variables: {input: {id}}})

   return (
      <LikeBottonStyled
         onClick={() => {
            setLiked(!liked)
            !liked && toggleLike()
         }}>
         {liked
            ? <FaHeart color="red" size="1.5rem"/>
            : <FaRegHeart size="1.5rem" />
         }
         {likes} likes
      </LikeBottonStyled>
   )
}
