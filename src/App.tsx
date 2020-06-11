import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { CategoryList } from './react-components/CategoryList';
import { PhotoCardList } from "./react-components/PhotoCardList";
import { Header } from './react-components/Header';

export const App = () => {
   return (
      <>
         <GlobalStyle />
         <Header />
         <CategoryList />
         <PhotoCardList />
      </>
   )
}

