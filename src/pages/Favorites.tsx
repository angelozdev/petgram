import React from 'react';

/* GraphQL and Apollo */
import { useQuery } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

/* COmponents */
import PhotoCard from '../react-components/PhotoCard';

/* Styles */
import { PhotoCardPlaceholder } from '../react-components/PhotoCard/PhotoCardPlaceholder';
import ReactPlaceholder from 'react-placeholder/lib';

/* SEO */
import { Helmet } from "react-helmet";

const GET_FAVS: DocumentNode = gql`
   query getFavs{
      favs {
      id
      likes
      categoryId
      liked
      src
      }
   }
`

const Favorites = () => {
   const { data, loading } = useQuery(GET_FAVS, {fetchPolicy: 'network-only'});

   return (
      <ReactPlaceholder ready={!loading} customPlaceholder={<PhotoCardPlaceholder />}>
         <Helmet>
            <title>Petgram - Favorites</title>
            <meta name="description" content="Aquí tienes tus fotos favoritas"></meta>
         </Helmet>
         <h2>Mis favoritos</h2>
         {data && data.favs.length > 0
            ? data.favs.map(photo => (
               <PhotoCard key={photo.id} details={photo} />
            ))
            : <p>¡Acá puedes buscar tus fotos favoritas!</p>
         }
      </ReactPlaceholder>
   )
}

export default Favorites;
