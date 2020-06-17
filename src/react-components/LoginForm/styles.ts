import styled from 'styled-components';

export const LoginFormStyled = styled.div`
   height: 100vh;
   text-align: center;

   .logo {
      margin: 4.7rem 0;
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
   }

   button {
      padding: .8rem 0;
      margin-top: 1rem;
      width: 100%;
      background-color: brown;
      text-transform: uppercase;
      color: white;
      border : none;
      outline: none;
      border-radius: 20px;
   }
`