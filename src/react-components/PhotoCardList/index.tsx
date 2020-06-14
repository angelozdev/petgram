import React from 'react';

/* Components */
import { PhotoCard } from '../PhotoCard';

/* GraphQL and Apollo */
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

/* Styles */
import { PhotoCardListStyled } from "./styles";
import ReactPlaceholder from 'react-placeholder';
import { PhotoCardPlaceholder } from '../PhotoCard/PhotoCardPlaceholder';


const GET_PHOTOS = gql`
   query getPhotos ($categoryId: ID){
      photos (categoryId: $categoryId){
         id,
         categoryId,
         src,
         likes,
         liked,
         userId
      }
   }
`

export const PhotoCardList = (props: any) => {
   const { categoryId } = props;
   const { data, loading } = useQuery(GET_PHOTOS, {variables: {categoryId} })
   
   return (
      <PhotoCardListStyled>
         <ReactPlaceholder ready={!loading} customPlaceholder={<PhotoCardPlaceholder />}>
            {data &&
               data.photos.map(photo => (
                  <PhotoCard key={photo.id} details={{...photo}}/>
               ))
            }
         </ReactPlaceholder>
      </PhotoCardListStyled>
   )
}
