import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
   return (
      <Fragment>
         <h1>No encontré lo que buscabas :/</h1>
         <button>
            <Link to="/">Regresar</Link>
         </button>
      </Fragment>
   )
}
