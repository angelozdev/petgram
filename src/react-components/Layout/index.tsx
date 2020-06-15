import React, { Fragment } from 'react';

/* Components */
import { Header } from '../Header'
import { Navbar } from '../Navbar';

/* Interfaces */
interface IProps {
   children: JSX.Element | JSX.Element[]
}

/* JSX */
export const Layout = ({ children }: IProps) => {
   return (
      <Fragment>
         <Header />
            { children }
         <Navbar />
      </Fragment>
   )
}
