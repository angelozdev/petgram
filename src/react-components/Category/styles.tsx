import styled from "styled-components";

export const CategoryStyled = styled.a`
   width : 60px;
   height: 60px;
   display: inline-block;

   figure {
      width : 100%;
      height: 100%;
      margin: 0;
   }

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
   }
`