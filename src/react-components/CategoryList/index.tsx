import React from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Data */
import { useCategories } from '../../hooks/useCategories';

/* Components */
import { Category } from '../Category'

export const CategoryList = () => {
   const { categories, loading } = useCategories()

   return (
      <CategoryListStyled id="category-list">
         <ul>
            {
               loading 
               ? new Array(6).fill('').map((item, i) => (
                  <li key={i}>
                     <Category />
                  </li>
               ))
               : categories.map(category => (
                  <li key={category.id}>
                     <Category details={{...category}}/>
                  </li>
               ))
            }
         </ul>
      </CategoryListStyled>
   )
}