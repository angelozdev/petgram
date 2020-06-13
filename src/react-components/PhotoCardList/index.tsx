import React from 'react';

/* Components */
import { PhotoCard } from '../PhotoCard';

/* GraphQL and Apollo */
import { useGetByCategory } from "../../hooks/useGetByCategory";

export const PhotoCardList = (props) => {
   const { data, loading } = useGetByCategory(props.categoryId)

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
