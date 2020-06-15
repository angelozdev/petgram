import styled, { keyframes, Keyframes } from 'styled-components';

const blurAnimation: Keyframes = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
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
         animation: 1s ${blurAnimation} ease;

      }
   }
`