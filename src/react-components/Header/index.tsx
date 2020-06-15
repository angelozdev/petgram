import React from 'react';

/* Styles */
import { HeaderStyled } from "./styles";

/* Components */
import { Logo } from '../Logo'

export const Header = (): JSX.Element => {
   return (
      <HeaderStyled to="/">
         <header>
            <Logo />
         </header>
      </HeaderStyled>
   )
}