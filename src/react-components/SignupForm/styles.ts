import styled from 'styled-components';
import { rotate } from '../../styles/animations'


export const FormStyled = styled.div`
   height: 100vh;
   text-align: center;

   .logo {
      margin: 4rem 0;
   }

   h2 {
      color: gray;
      margin: 0 0  2rem 0;
      text-transform: uppercase;
   }

   form {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 0 3rem;
   }

   .form-control {
      width: 100%;
      border: 1px solid rgba(165,42,42, 0.3);
      border-radius: 20px;
      display: flex;
      align-items: center;
      margin-top: .4rem;
   }

   .form-control label {
      padding: .6rem 1rem;
   }

   .form-control input {
      margin-right: 1rem;
      width: 100%;
      border : none;
      outline: none;

      &::-webkit-input-placeholder {
         font-weight: bold;
      }

      &[disabled] {
         opacity: .5;
      }
   }

   .btn-enter {
      padding: .8rem 0;
      margin-top: 1rem;
      width: 100%;
      background-color: brown;
      text-transform: uppercase;
      color: white;
      border : none;
      outline: none;
      border-radius: 20px;

      &[disabled] {
         background-color: lightgray;
         color: gray;
      }
   }

   .message {
      display: inline-block;
      margin-top: 1rem;
      color: brown;
   }

   .spinner svg{
      animation: 1s ${rotate} ease infinite;
   }
`