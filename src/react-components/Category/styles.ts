import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryStyled = styled(NavLink)`
   width : 65px;
   height: 65px;
   margin: 0 .5rem;
   display: inline-block;
   color: var(--color-primary, black);
   -webkit-tap-highlight-color: transparent;

   &.active img{
      border: 2px solid gray;
   }

   img {
      user-select: none;
      width : 100%;
      height: 100%;
      object-fit: cover;
      border: 2px double lightgray;
      border-radius: 50%;
      padding: 2px;
      transition: border 150ms ease-in;
   }

   figcaption {
      text-align: center;
      font-size: .7rem;
   }
`