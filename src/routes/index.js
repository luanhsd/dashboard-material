import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}