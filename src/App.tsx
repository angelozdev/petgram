import React from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Components */
import { CategoryList } from './react-components/CategoryList';
import { PhotoCardList } from "./react-components/PhotoCardList";
import { Header } from './react-components/Header';
import { PhotoCardDetails } from './containers/PhotoCardDetails';

/* Apollo and GraphQL */
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
   uri: 'https://petgram-server-angelozam17.angelozam17.vercel.app/graphql'
})

export const App = () => {
   const urlParams = new URLSearchParams(window.location.search)
   const id = urlParams.get('detail');
   

   return (
      <ApolloProvider client={client}>
         <GlobalStyle />
         <Header />
         {
            id
            ? <PhotoCardDetails id={id}/>
            : <>
               <CategoryList />
               <PhotoCardList />
            </>
         }
         
      </ApolloProvider>
   )
}

