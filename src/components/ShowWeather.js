import React from "react";

const ShowWeather= ({weather}) => {
    const iconPath = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
            <div className="container">
                <div className="row">
                    < div className="col-sm">
                            <p className="display-3 text-center">{weather.name}</p>
                            <p className="display-5 text-center">{weather.main.temp}<sup>o</sup>C</p>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center">
                        <img
                            src={iconPath}
                            className="rounded d-block"
                            alt="image here"/>
                    </div>
                </div>
            </div>
    )
}

export default ShowWeather;
