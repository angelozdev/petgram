import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --background: #fff;
   }

   *, *::before, *::after {
      box-sizing: border-box;
   }

   body {
      margin : 0;
      padding: 0;
      height: 100vh;
      width: 100%;
      overscroll-behavior: none; 
      background-color: var(--background, lightGray);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   #root {
      padding-top: 49px;
   }

   img {
      -webkit-user-drag: none;
   }

   a {
      text-decoration: none;
   }

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   figure {
      width : 100%;
      height: 100%;
      margin: 0;
   }
`
