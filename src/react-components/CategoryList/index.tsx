import React from 'react';

/* Styles */
import { CategoryListStyled } from "./styles";

/* Data */
import { useFetchData } from '../../hooks/useFetchData';
import { categories } from '../../../api/db.json';

/* Components */
import { Category } from '../Category';

interface ICategory {
   id: number,
   name: string,
   cover: string,
}

const CategoryList = (): JSX.Element => {
   const { data, isLoading } = useFetchData(categories);

   return (
      <CategoryListStyled>
         <ul>
            {
               isLoading
               ? new Array(6).fill('').map((_item, i) => (
                  <li key={i}>
                     <Category />
                  </li>
               ))
               : data.map(({ id, name, cover }: ICategory) => (
                  <li key={ id }>
                     <Category details={{ id, name, cover }}/>
                  </li>
               ))
            }
         </ul>
      </CategoryListStyled>
   )
}

export default React.memo(CategoryList)