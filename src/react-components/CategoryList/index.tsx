import React from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Components */
import { Category } from '../Category'

export const CategoryList = () => {
   return (
      <CategoryListStyled>
         <ul>
            {
               ['Hola', 'mundo', 'as', 'asd', 'asdd, asd'].map(category => (
                  <li>
                     <Category />
                  </li>
               ))
            }
         </ul>
      </CategoryListStyled>
   )
}