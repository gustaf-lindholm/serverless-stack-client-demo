import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

export default function Routes({appProps}) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps}/>

            <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps}/>
            <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps}/>
            <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps}/>
            <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps}/>
            <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
            <Route component={NotFound} />
        </Switch>
    )
}