import React from "react";
import { render } from "react-dom";
import { App } from "./App";

/* GraphQL and Apollo */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* GlobalStates */
import { GlobalState } from './context/GlobalState'

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql'
})

render(
   <GlobalState>
      <ApolloProvider client={client}>
         <App />
      </ApolloProvider>
   </GlobalState>,
document.getElementById('root'))
