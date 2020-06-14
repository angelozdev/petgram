import styled, { keyframes } from 'styled-components';

const blurAnimation = keyframes`
   from {
      filter: blur(10px);
   }

   to {
      filter: blur(0);
   }
`

export const PhotoCardStyled = styled.article`
   overflow: hidden;
   min-height: 200px;

   figure {
      width : 100%;
      height: 0;
      padding: 75% 0 0 0;
      position: relative;

      & img {
         width : 100%;
         height: 100%;
         position: absolute;
         top   : 0;
         bottom: 0;
         left  : 0;
         right : 0;
         object-fit: cover;
         animation: 400ms ${blurAnimation} ease-out;

      }
   }
`