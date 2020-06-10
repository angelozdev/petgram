import React from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Data */
import { categories } from '../../../api/db.json';

/* Components */
import { Category } from '../Category'

export const CategoryList = () => {
   return (
      <CategoryListStyled>
         <ul>
            {
               categories.map(category => (
                  <li key={category.id}>
                     <Category details={{...category}}/>
                  </li>
               ))
            }
         </ul>
      </CategoryListStyled>
   )
}