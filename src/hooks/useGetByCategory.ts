import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

export const useGetByCategory = (categoryId) => {
   const getPhotos = gql`
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
   
   const { loading, data } = useQuery(getPhotos, {
      variables: { categoryId }
   })

   return { data, loading }
}
