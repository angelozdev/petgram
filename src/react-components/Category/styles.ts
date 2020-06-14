import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryStyled = styled(Link)`
   width : 65px;
   height: 65px;
   margin: 0 .5rem;
   display: inline-block;
   color: var(--color-primary, black);
   -webkit-tap-highlight-color: transparent;

   &:focus img{
      border: 1.5px solid rgba(255,102,110,1);
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