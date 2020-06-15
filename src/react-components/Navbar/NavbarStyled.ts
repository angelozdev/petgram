import styled from 'styled-components';


export const NavbarStyled = styled.nav`
   display: flex;
   position: fixed;
   width : 100%;
   height: 49px;
   bottom: 0;
   border-top: 1px solid lightgray;

   a {
      width : 100%;
      height: 100%;
      display        : flex;
      justify-content: center;
      align-items    : center;
      background-color: var(--background);
      color: gray;
      position: relative;
      transition: color 15ms ease-in;

      &.active{
         color: black;
      }

      &.active:before {
         opacity: 1;
      }

      &:before {
         content: '.';
         font-size: 2rem;
         opacity: 0;
         position: absolute;
         bottom: -3px;
         transition: opacity 150ms ease-in;
      }
   }
`