import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Apollo and GraphQL */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* Layout */
import { Layout } from './react-components/Layout';

/* Pages */
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Favorites } from "./pages/Favorites";
import { NotRegistered } from "./pages/NotRegistered";
import { User } from './pages/User'

/* Router */
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom';

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql'
})

const isRegistered = false;

export const App = (): JSX.Element => {
   return (
      <ApolloProvider client={client}>
         <GlobalStyle />
         <Router>
            <Layout>
            <Switch>

               <Route exact path="/" component={Home}/>
               <Route exact path="/pet/:id" component={Home}/>
               <Route exact path="/detail/:id" component={Details} />
               <Route exact path="/favorites" component={isRegistered ? Favorites : NotRegistered} />
               <Route exact path="/user" component={isRegistered ? User : NotRegistered} />

            </Switch>
            </Layout>
         </Router>
      </ApolloProvider>
   )
}

