import React from 'react';

/* Styles */
import { NavbarStyled } from './NavbarStyled'
import {
   AiOutlineHome,
   AiOutlineHeart,
   AiOutlineUser,
} from 'react-icons/ai'

/* Router */
import { NavLink } from 'react-router-dom';

export const Navbar = (): JSX.Element => {

   const SIZE: string = '1.4rem'
   return (
      <NavbarStyled>
         <div className="container">
            <NavLink exact to="/">
               <AiOutlineHome size={SIZE} />
            </NavLink>

            <NavLink exact to="/favorites">
               <AiOutlineHeart size={SIZE}/>
            </NavLink>

            <NavLink exact to="/user">
               <AiOutlineUser size={SIZE} />
            </NavLink>
         </div>

      </NavbarStyled>
   )
}
