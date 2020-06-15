import React from 'react';

/* Styles */
import { NavbarStyled } from './NavbarStyled'
import {
   AiOutlineHome,
   AiOutlineHeart,
   AiOutlineUser,
   AiFillHome
} from 'react-icons/ai'

/* Router */
import { useLocation, NavLink } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
   const { pathname } = useLocation();

   const SIZE = '1.4rem'
   return (
      <NavbarStyled>

         <NavLink exact to="/">
            <AiOutlineHome size={SIZE} />
         </NavLink>

         <NavLink exact to="/favorites">
            <AiOutlineHeart size={SIZE}/>
         </NavLink>

         <NavLink exact to="/user">
            <AiOutlineUser size={SIZE} />
         </NavLink>

      </NavbarStyled>
   )
}
