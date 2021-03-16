import React from "react";
import NavBar from "./components/NavBar";
import {RoutesComponent} from "./components/RoutesComponent";

export const App = () => {
    return (
        <div className="container-fluid">
            <NavBar/>
            <RoutesComponent/>
        </div>
    );
};

export default App;