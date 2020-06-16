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
   Switch
} from 'react-router-dom';

/* Hooks */
import { useAuthContext } from './hooks/context/AuthContext'

export const App = (): JSX.Element => {
   const [{ isAuth }] = useAuthContext();


   return (
      <Router>
         <GlobalStyle />
         <Layout>
            <Switch>

               <Route exact path="/" component={Home}/>
               <Route exact path="/pet/:id" component={Home}/>
               <Route exact path="/detail/:id" component={Details} />
               <Route exact path="/favorites" component={isAuth ? Favorites : NotRegistered} />
               <Route exact path="/user" component={isAuth ? User : NotRegistered} />

            </Switch>
         </Layout>
      </Router>
   )
}

