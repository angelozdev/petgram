import React, { Fragment } from 'react';

/* GraphQL and Apollo */
import { useQuery } from 'react-apollo';
import { gql, DocumentNode } from 'apollo-boost';

/* COmponents */
import PhotoCard from '../react-components/PhotoCard';

/* Styles */
import { PhotoCardPlaceholder } from '../react-components/PhotoCard/PhotoCardPlaceholder';
import ReactPlaceholder from 'react-placeholder/lib';
import styled from "styled-components";

/* SEO */
import { Helmet } from "react-helmet";

const FavsStyled = styled.div`
   .title {
      margin: 1rem .3rem;
      text-transform: uppercase;
      text-align: center;
      color: gray;
   }
   p {
      padding: 0 1rem;
   }
`

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

         <FavsStyled>

            <h2 className="title">My favorite pictures.</h2>

            {data && data.favs.length > 0
               ? data.favs.map(photo => (
                  <PhotoCard key={photo.id} details={photo} />
               ))
               : <p>Here you can find your favorite pictures!</p>
            }
         </FavsStyled>
      </ReactPlaceholder>
   )
}

export default Favorites;
