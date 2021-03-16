import React from "react";
import {Switch, Route} from "react-router-dom";
import Time from "./Time";
import WeatherSearchComponent from "./WeatherSearchComponent";
import Home from "./Home";

export const RoutesComponent = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/time">
                <Time/>
            </Route>
            <Route path="/weather">
                <WeatherSearchComponent/>
            </Route>
        </Switch>
    );
};