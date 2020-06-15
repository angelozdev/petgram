import React from 'react';

/* Components */
import { CategoryList } from '../react-components/CategoryList';
import { PhotoCardList } from '../react-components/PhotoCardList';

interface IProps {
   match: {
      params: {
         id: number
      }
   }
}

export const Home = ({ match }: IProps): JSX.Element => {
   const { id } = match.params;

   return (
      <>
         <CategoryList />
         <PhotoCardList categoryId={id}/>
      </>
   )
}
