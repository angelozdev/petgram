import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled(Link)`
   display: inline-block;
   margin-bottom: 46px;

   header {
      width: 100%;
      text-align: center;
      position: fixed;
      top: 0;
      background-color: var(--background);
      z-index: 1;
      border-bottom: 1px solid lightgray;
   }
`