import styled from "styled-components";

export const CategoryStyled = styled.a`
   width : 65px;
   height: 65px;
   margin: 0 .5rem;
   display: inline-block;
   color: var(--color-primary, black);
   -webkit-tap-highlight-color: transparent;


   img {
      user-select: none;
      width : 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid rgba(255,102,110,1);
      border-radius: 50%;
      padding: 2px;
   }

   figcaption {
      text-align: center;
      font-size: .7rem;
   }
`