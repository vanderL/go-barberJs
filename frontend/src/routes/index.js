import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingUp from '../pages/singUp';
import SingIn from '../pages/singIn';

import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SingIn}/>
            <Route path="/register" component={SingUp} />
            
            <Route path="/dashboard" component={Dashboard} isPrivate/>
            <Route path="/profile" component={Profile} isPrivate/>

        </Switch>
    )
}