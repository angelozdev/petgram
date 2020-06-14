import React from 'react';

/* Styles */
import { CategoryStyled } from "./styles";

interface IProps {
   details?: {
      id   : number,
      name : string,
      emoji: string,
      cover: string,
      path : string
   }
}

export const Category = (props: IProps) => {
   const { 
      id,
      name, 
      cover, 
   } = props.details || {};
   
   return (
      <CategoryStyled to={`/pet/${id}`}>
         <figure>
            <img loading="lazy" src={cover} alt={name}/>
            <figcaption>{name}</figcaption>
         </figure>
      </CategoryStyled>
   )
}

