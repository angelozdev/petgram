import React from 'react';

/* Components */
import PhotoCard from "../react-components/PhotoCard";

/* GraphQL and Apollo */
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';

/* Styles */
import { PhotoCardPlaceholder } from '../react-components/PhotoCard/PhotoCardPlaceholder';
import ReactPlaceholder from 'react-placeholder';

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
interface IProps {
   match: {
      params: {
         id: number
      }
   }
}

const Details = ({ match }: IProps): JSX.Element => {
   const { id } = match.params;
   const { data, loading } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

   return (
      <ReactPlaceholder
         ready={!loading}
         customPlaceholder={<PhotoCardPlaceholder />}
      >
         <PhotoCard details={data && data.photo} />
      </ReactPlaceholder>
   )
}

export default Details;
