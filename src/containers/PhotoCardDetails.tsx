import React from 'react';
import { PhotoCard } from "../react-components/PhotoCard";

/* GraphQL and Apollo */
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';


const GET_SINGLE_PHOTO = gql`
   query getSinglePhoto ($id: ID!){
      photo (id: $id){
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
   const { data, loading } = useQuery(GET_SINGLE_PHOTO, {variables: {id}})
   
   return (
      <>
      {loading 
         ? <PhotoCard loading={loading}/>
         : <PhotoCard details={data.photo}/>
      }
      </>
   )
}
