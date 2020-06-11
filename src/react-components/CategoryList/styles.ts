import styled from "styled-components";

export const  CategoryListStyled = styled.section`
   width: 100%;
   overflow: scroll;
   background-color: #fafafa;
   border-bottom: 1px solid lightgray;
   border-top: 1px solid lightgray;
   box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.08);
   ::-webkit-scrollbar {
      display: none
   }

   ul {
      display: flex;
      margin: .5rem;
   }
`
