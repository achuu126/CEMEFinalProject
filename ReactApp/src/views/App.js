//Navigation page
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import history from './history';

 

/**
 * Import all page components here
 */
//import App from '..';
import CustomerSearch from './CustomerSearch';
import CustomerCreate from './CustomerCreate';
import Navigation from './navigation';

 

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

 const App = () =>{
   return (
       <BrowserRouter history={history}>
        <>
            <Navigation />
            <br></br>
            <Switch>
            <Route exact path='/CustomerSearch' component={CustomerSearch}></Route>
            <Route exact path='/CustomerCreate' component={CustomerCreate}></Route> 
            </Switch>
        </>
        </BrowserRouter>
   );
 }
export default App;