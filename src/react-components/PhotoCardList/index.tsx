import React from 'react';

/* Components */
import PhotoCard from '../PhotoCard';

/* GraphQL and Apollo */
import { gql, DocumentNode } from 'apollo-boost';
import { useQuery } from 'react-apollo';

/* Styles */
import { PhotoCardListStyled } from "./styles";
import ReactPlaceholder from 'react-placeholder';
import { PhotoCardPlaceholder } from '../PhotoCard/PhotoCardPlaceholder';

interface IProps {
   categoryId: number
}

interface IPhoto {
   id: number,
   likes: number,
   src: string,
   liked: boolean
}

const GET_PHOTOS: DocumentNode = gql`
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

const PhotoCardList = ({ categoryId }: IProps): JSX.Element => {
   const { data, loading } = useQuery(GET_PHOTOS, { variables: { categoryId } })

   return (
      <PhotoCardListStyled>
         <ReactPlaceholder ready={!loading} customPlaceholder={<PhotoCardPlaceholder />}>
            {data &&
               data.photos.map(({ id, likes, liked, src }: IPhoto) => (
                  <PhotoCard key={ id } details={{ id, likes, liked, src }}/>
            ))}
         </ReactPlaceholder>
      </PhotoCardListStyled>
   )
}

export default React.memo(PhotoCardList, ({ categoryId }, nextProps) => {
   return categoryId === nextProps.categoryId;
});
