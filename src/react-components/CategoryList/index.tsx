import React from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Data */
import { useFetchData } from '../../hooks/useFetchData';
import { categories } from '../../../api/db.json';

/* Components */
import { Category } from '../Category'

export const CategoryList = () => {
   const { data, isLoading } = useFetchData(categories);

   return (
      <CategoryListStyled>
         <ul>
            {
               isLoading
               ? new Array(6).fill('').map((item, i) => (
                  <li key={i}>
                     <Category />
                  </li>
               ))
               : data.map(category => (
                  <li key={category.id}>
                     <Category details={{...category}}/>
                  </li>
               ))
            }
         </ul>
      </CategoryListStyled>
   )
}