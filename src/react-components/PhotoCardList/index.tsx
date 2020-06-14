import React from 'react';

/* Components */
import { PhotoCard } from '../PhotoCard';

/* GraphQL and Apollo */
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

/* Styles */
import { PhotoCardListStyled } from "./styles";


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
   const { data, loading } = useQuery(GET_PHOTOS, {variables: categoryId })
   
   return (
      <PhotoCardListStyled>
         {loading 
            ? <PhotoCard loading={loading}/>
            : data.photos.map(photo => (
               <PhotoCard key={photo.id} details={{...photo}}/>
            ))
         }
      </PhotoCardListStyled>
   )
}
