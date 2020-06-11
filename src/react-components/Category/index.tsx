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
      name = '', 
      cover = 'https://i.gifer.com/7YUU.gif', 
   } = props.details ? props.details : {};
   
   return (
      <CategoryStyled href="/">
         <figure>
            <img loading="lazy" src={cover} alt={name}/>
            <figcaption>{name}</figcaption>
         </figure>
      </CategoryStyled>
   )
}

