import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../views/Landing-Page';
import GamePage from '../views/Game-Page';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/game" component={GamePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;