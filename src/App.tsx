import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { Category } from './react-components/Category';

export const App = () => {
   return (
      <>
         <GlobalStyle />
         <Category />
      </>
   )
}

