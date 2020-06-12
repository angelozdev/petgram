import React from 'react';

/* Components */
import { PhotoCard } from '../PhotoCard';

/* GraphQL and Apollo */
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const withPhotos = gql`
   query getPhotos{
      photos {
         id,
         categoryId,
         src,
         likes,
         liked,
         userId
      }
   }
`

export const PhotoCardList = () => {
   const { loading, data } = useQuery(withPhotos)
   
   return (
      <section>
         {loading 
            ? <PhotoCard />
            : data.photos.map(photo => (
               <PhotoCard key={photo.id} details={{...photo}}/>
            ))
         }
      </section>
   )
}
