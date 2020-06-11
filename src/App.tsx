import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { CategoryList } from './react-components/CategoryList';
import { PhotoCardList } from "./react-components/PhotoCardList";

export const App = () => {
   return (
      <>
         <GlobalStyle />
         <CategoryList />
         <PhotoCardList />
      </>
   )
}

