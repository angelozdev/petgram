import React, { useContext, Suspense, lazy } from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Layout */
import { Layout } from './react-components/Layout';

/* Pages */
const Details = lazy(() => import('./pages/Details'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const NotRegistered = lazy(() => import('./pages/NotRegistered'))
const User = lazy(() => import('./pages/User'))
import Fallback from './react-components/Fallback';

/* Router */
import {
   BrowserRouter as Router,
   Route,
   Switch,
} from 'react-router-dom';

/* Hooks */
import { authContext } from './context/authContext';

export const App = (): JSX.Element => {
   const { isAuth } = useContext<any>(authContext);

   return (
   <Suspense fallback={<Fallback />}>
      <GlobalStyle />
      {
         isAuth
         ? (<Router>
            <Layout>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/pet/:id" component={Home}/>
                  <Route exact path="/detail/:id" component={Details} />
                  <Route exact path="/favorites" component={Favorites} />
                  <Route exact path="/user" component={User} />
                  <Route component={NotFound} />
               </Switch>
            </Layout>
         </Router>)
         : (<Router>
            <Switch>
               <Route exact path="/" component={NotRegistered} />
               <Route component={NotFound} />
            </Switch>
         </Router>)
      }
   </Suspense>
   )
}

