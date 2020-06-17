import React, { useContext } from 'react';

/* Styles */
import { GlobalStyle } from './styles/global';

/* Layout */
import { Layout } from './react-components/Layout';

/* Pages */
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Favorites } from "./pages/Favorites";
import { NotRegistered } from "./pages/NotRegistered";
import { User } from './pages/User'

/* Router */
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/* Hooks */
import { useAuthContext } from './hooks/context/AuthContext'

export const App = (): JSX.Element => {
   const [{ isAuth }] = useAuthContext();
   /* const isAuth = true; */

   return (
   <>
      <GlobalStyle />
      {
         isAuth
         ? (
            <Router>
               <Layout>
                  <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/pet/:id" component={Home}/>
                     <Route exact path="/detail/:id" component={Details} />
                     <Route exact path="/favorites" component={Favorites} />
                     <Route exact path="/user" component={User} />
                  </Switch>
               </Layout>
            </Router>
         )
         : (<Router>
               <Route exact path="/" component={NotRegistered} />
         </Router>
         )
      }
   </>
   )
}

