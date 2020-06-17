import React, { Fragment } from 'react';

/* Components */
import { CategoryList } from '../react-components/CategoryList';
import { PhotoCardList } from '../react-components/PhotoCardList';

/* SEO */
import { Helmet } from 'react-helmet'

interface IProps {
   match: {
      params: {
         id: number
      }
   }
}

const HomeMemo = ({ match }: IProps): JSX.Element => {
   const { id } = match.params;

   return (
      <Fragment>
         <Helmet>
            <title>Petgram - ¡Your Instragram for pets!</title>
            <meta name="description" content="Petgram puedes encontrar las fotos de las mascotas de tus amigos"></meta>
         </Helmet>
         <CategoryList />
         <PhotoCardList categoryId={id}/>
      </Fragment>
   )
}

export const Home = React.memo(HomeMemo, ({ match }, props) => (
   match.params.id === props.match.params.id
))
