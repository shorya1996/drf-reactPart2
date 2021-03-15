import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import App from '../App'
import LandingPageComponent from "../components/landingPage";
import LoginComponent from "../components/loginPageComponent";
import SignupContainer from "../components/signupContainer";
import PrivateRoute from "./privateRoute";

export default class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={App} >
                        <Redirect from='/' to='/login' />
                    </Route>
                    <Route exact path='/login' component={LoginComponent} />
                    <Route path='/signup' exact component={SignupContainer} />
                    <PrivateRoute path='/landingpage' exact component={LandingPageComponent} />
                </Switch>

            </BrowserRouter>
        )
    }
}