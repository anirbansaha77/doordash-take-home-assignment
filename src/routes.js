import React from 'react';
import { Route, Switch } from "react-router-dom";
import LogIn from './containers/LogIn/LogInForm';
import Home from './containers/Home';

const routes = () =>(
    
    <Switch>
        <Route exact path='/' component={LogIn} />
        <Route exact path='/ChatRooms' component={Home} />
    </Switch>
);

export default routes;