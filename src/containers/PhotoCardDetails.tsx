import React from 'react';
import { PhotoCard } from "../react-components/PhotoCard";

/* GraphQL and Apollo */
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';

const query = gql`
   query getSinglePhoto($id:ID!){
      photo(id:$id){
         id
         categoryId
         src
         likes
         userId
         liked
      }
   }
`

export const PhotoCardDetails = (props: any) => {
   const { id } = props;
   const { data, loading } = useQuery(query, {variables: {id}})
   
   return (
      <>
      {loading 
         ? <PhotoCard />
         : <PhotoCard details={data.photo}/>
      }
      </>

   )
}
