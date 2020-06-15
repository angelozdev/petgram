import React from 'react';
import { RectShape, RoundShape, TextBlock  } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

export const PhotoCardPlaceholder = () => (
   <div className='show-loading-animation'>
      <RectShape
         color="#cdcdcd"
         style={{
            width : "100%",
            height: "300px",
            maxHeight: '50vh'
         }}
      />
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
               margin: '1rem',
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