import React from 'react';
import { RectShape, RoundShape, TextBlock  } from 'react-placeholder/lib/placeholders';

export const PhotoCardPlaceholder = () => (
   <>
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
   </>
)