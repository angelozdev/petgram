import React from "react";
import { render } from "react-dom";
import { App } from "./App";

/* GraphQL and Apollo */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* GlobalStates */
import { GlobalState } from './context/GlobalState'

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql',
   request: operation => {
      const token: string = window.sessionStorage.getItem('token');
      const authorization = token ? `Bearer ${token}` : '';
      operation.setContext({
         headers: {
            authorization
         }
      })
   },
   /* Si hay un error en la petición se elimina el token del sessionStorage y se redirecciona al home */
   onError: err => {
      const { networkError } = err;
      if(networkError){
         window.sessionStorage.removeItem('token');
         window.location.href = '/'
      }
   }
})

render(
   <GlobalState>
      <ApolloProvider client={client}>
         <App />
      </ApolloProvider>
   </GlobalState>,
document.getElementById('root'))
