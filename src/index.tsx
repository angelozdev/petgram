import React from "react";
import { render } from "react-dom";
import { App } from "./App";

/* GraphQL and Apollo */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* GlobalStates */
import { AuthContextProvider } from './hooks/context/AuthContext'

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql'
})

render(
   <AuthContextProvider>
      <ApolloProvider client={client}>
         <App />
      </ApolloProvider>
   </AuthContextProvider>,
document.getElementById('root'))
