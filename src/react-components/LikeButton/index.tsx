import React from 'react';

/* Styles */
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LikeBottonStyled } from "./styles";

/* Hooks */
import { useMutation } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

const LIKE_PHOTO: DocumentNode = gql`
   mutation likePhoto($input: LikePhoto!){
      likePhoto (input: $input) {
         id
         liked
         likes
      }
   }
`

interface IProps {
   id: number,
   likes: number,
   liked: boolean
}

export const LikeButton = ({ id, likes, liked }: IProps): JSX.Element => {
   const [ toggleLike ] = useMutation(LIKE_PHOTO, {variables: {input: {id}}})

   return (
      <LikeBottonStyled
         onClick={() => {
            toggleLike()
         }}>
         {liked
            ? <FaHeart color="red" size="1.5rem"/>
            : <FaRegHeart size="1.5rem" />
         }
         {likes} likes
      </LikeBottonStyled>
   )
}
