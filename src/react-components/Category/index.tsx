import React from 'react';

/* Styles */
import { CategoryStyled } from "./styles";

interface IProps {
   details: {
      id: number,
      name: string,
      emoji: string,
      cover: string,
      path: string
   }
}

export const Category = (props: IProps) => {
   const { id, name, emoji, cover, path } = props.details;
   return (
      <CategoryStyled href="/">
         <figure>
            <img src={cover} alt={name}/>
            <figcaption>{name}</figcaption>
         </figure>
      </CategoryStyled>
   )
}

