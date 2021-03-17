import React from "react";

const WeatherShowComponent = ({weather}) => {
    return (
        <>
            <div className="container d-flex flex-row justify-content-center align-items-center">
                <div className="row">
                    < div className="col-sm">
                            <p className="display-3 text-center">{weather.name}</p>
                            <p className="display-5 text-center">{weather.main.temp}<sup>o</sup>C</p>
                    </div>
                    <div className="col-sm d-flex justify-content-center">
                        <img src="http://openweathermap.org/img/wn/10d@2x.png"
                             className="rounded mx-auto d-block"
                             alt="image here"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherShowComponent;