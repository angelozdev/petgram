import React, { Fragment } from 'react';

/* Styles */
import { PhotoCardStyled } from './styles';

/* Hooks */
import { useNearScreen } from '../../hooks/useNearScreen';

/* Components */
import { LikeButton } from "../LikeButton";

/* Routes */
import { Link } from 'react-router-dom';

interface IProps {
   details?: {
      id: number,
      likes: number,
      categoryId?: number,
      userId?: number,
      src: string,
      liked: boolean
   }
}

const PhotoCard = ({ details }: IProps): JSX.Element => {
   const {
      id,
      likes = 0,
      src,
      liked
   } = details || {};

   const [ show, article ] = useNearScreen();

   return (
      <PhotoCardStyled ref={article}>
         { show && <Fragment>
            <Link to={`/detail/${ id }`}>
               <figure>
                  <img loading="lazy" src={ src } alt={`photo by ${ id }`}/>
               </figure>
            </Link>
            <LikeButton liked={ liked } likes={ likes } id={ id }/>
         </Fragment> }
      </PhotoCardStyled>
   )
}

export default React.memo(PhotoCard, ({ details }, nextProps) => {
   console.log(details, nextProps.details);
   return details.liked === nextProps.details.liked
})