import React from 'react';
import { RectShape, RoundShape, TextBlock  } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

export const PhotoCardPlaceholder = (): JSX.Element => (
   <div className='show-loading-animation'>
      <div style={{
         height: "0",
         padding: "75% 0 0 0",
         position: "relative"
      }}>
         <RectShape
            color="#cdcdcd"
            style={{
               width : "100%",
               height: "100%",
               position: "absolute",
               top   : "0",
               bottom: "0",
               right : "0",
               left  : "0"
            }}
         />
      </div>
      <div
         style={{
            display: 'flex',
            alignItems: 'center'
         }}
      >
         <RoundShape
            color="#cdcdcd"
            style={{
               width : "2rem",
               height: "2rem",
               margin: '.5rem',
               display: "inline-block"
            }}
         />
         <TextBlock
            color="#cdcdcd"
            rows={1}
            style={{
               display: 'inline-block',
               width: '50px'
            }}
         />
      </div>
   </div>
)