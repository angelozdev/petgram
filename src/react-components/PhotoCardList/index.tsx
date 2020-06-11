import React from 'react';

/* Data */
import { photos } from "../../../api/db.json";

/* Components */
import { PhotoCard } from '../PhotoCard';

export const PhotoCardList = () => {
   return (
      <section>
         {
            photos.map(photo => (
               <PhotoCard key={photo.id} details={{...photo}}/>
            ))
         }
      </section>
   )
}
