import React from 'react';

/* Styles */
import { CategoryStyled } from "./styles";

interface IProps {
   details?: {
      id    : number,
      name  : string,
      emoji?: string,
      cover : string,
      path? : string
   }
}

export const Category = ({ details }: IProps): JSX.Element => {
   const {
      id,
      name,
      cover,
   } = details || {};

   return (
      <CategoryStyled exact to={`/pet/${id}`}>
         <figure>
            <img loading="lazy" src={cover} alt={name}/>
            <figcaption>{name}</figcaption>
         </figure>
      </CategoryStyled>
   )
}

