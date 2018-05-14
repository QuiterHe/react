import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from "react-router-dom";
import route from "./route.conf";

class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {route.map((r, i) => (
                        <Route key={i} path={r.path} exact={r.exact} component={r.component} />
                    ))}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;