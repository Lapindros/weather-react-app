import React from "react";
import {Switch, Route} from "react-router-dom";
import Time from "./Time";
import SearchWeatherComponent from "./SearchWeatherComponent";
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
                <SearchWeatherComponent/>
            </Route>
        </Switch>
    );
};