import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { CategoryList } from './react-components/CategoryList';

export const App = () => {
   return (
      <>
         <GlobalStyle />
         <CategoryList />
      </>
   )
}

