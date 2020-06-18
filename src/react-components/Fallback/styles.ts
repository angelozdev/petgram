import styled from 'styled-components';
import { rotate } from '../../styles/animations'

export const FallbackStyled = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   span {
      animation: 1s ${rotate} ease infinite;
   }
`