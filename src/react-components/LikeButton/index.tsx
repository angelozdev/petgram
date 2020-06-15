import React from 'react';

/* Styles */
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LikeBottonStyled } from "./styles";

/* Hooks */
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutation } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

const LIKE_PHOTO: DocumentNode = gql`
   mutation likeAnonymousPhoto($input: LikePhoto!){
      likeAnonymousPhoto (input: $input) {
         id
         liked
         likes
      }
   }
`

interface IProps {
   id: number,
   likes: number
}

export const LikeButton = ({ id, likes }: IProps): JSX.Element => {
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
