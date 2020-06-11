import styled from "styled-components";

export const CategoryStyled = styled.a`
   width : 65px;
   height: 65px;
   margin: 0 .5rem;
   display: inline-block;

   img {
      width : 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid var(--color-lightGray, lightGray);
      border-radius: 50%;
      padding: 2px;
      /* box-shadow: 2px 2px 5px var(--color-lightGray, lightGray); */
   }

   figcaption {
      text-align: center;
      font-size: .8rem;
   }
`