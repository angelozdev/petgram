import React from 'react';

/* Styles */
import { CategoryStyled } from "./styles";

export const Category = () => {
   return (
      <CategoryStyled href="/">
         <figure>
            <img src="https://images.unsplash.com/photo-1591791365457-c7fe1eeec34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" alt=""/>
            <figcaption>User 1</figcaption>
         </figure>
      </CategoryStyled>
   )
}

