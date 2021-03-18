import React from "react";
import NavBar from "./components/NavBar";
import {RoutesComponent} from "./components/RoutesComponent";

export const App = () => {
    return (
        <>
            <NavBar/>
        <div className="container-fluid">
            <RoutesComponent/>
        </div>
        </>
    );
};

export default App;