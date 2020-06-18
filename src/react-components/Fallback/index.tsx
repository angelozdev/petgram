import React from 'react';

/* Styles */
import { FallbackStyled } from './styles';
import { AiOutlineLoading } from 'react-icons/ai';

const Fallback = () => {
   return (
      <FallbackStyled>
         <span>
            <AiOutlineLoading size="3rem" color="lightgray" />
         </span>
      </FallbackStyled>
   )
}

export default Fallback
