import React from 'react';

/* Components */
import { CategoryList } from '../react-components/CategoryList';
import { PhotoCardList } from '../react-components/PhotoCardList'

export const Home = (props) => {
   const { id } = props.match.params

   return (
      <>
         <CategoryList />
         <PhotoCardList categoryId={id}/>
      </>
   )
}
