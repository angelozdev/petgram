import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { Header } from './react-components/Header';

/* Apollo and GraphQL */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* Pages */
import { Home } from './pages/Home';
import { Details } from './pages/Details'

/* Router */
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql'
})

export const App = () => {
   return (
      <ApolloProvider client={client}>
         <GlobalStyle />
         <BrowserRouter>
            <Header />
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/pet/:id" component={Home}/>
               <Route exact path="/detail/:id" component={Details} />
            </Switch>
         </BrowserRouter>
      </ApolloProvider>
   )
}

