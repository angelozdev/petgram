import React, { useState } from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Data */
import { categories as data } from '../../../api/db.json';

/* Components */
import { Category } from '../Category'

export const CategoryList = () => {
   const [categories, setCategories] = useState(data)
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