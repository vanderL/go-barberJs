import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingUp from '../pages/singUp';
import SingIn from '../pages/singIn';

import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SingIn}/>
            <Route path="/register" component={SingUp} />
            
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />

        </Switch>
    )
}