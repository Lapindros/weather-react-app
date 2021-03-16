import React, {useState} from "react";
import {Api} from "../api/Api";

const WeatherSearchComponent = () => {


    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        Api.fetch(city)
            .then(res => {
                    if (res.cod === 200) {
                        console.log(res)
                        setWeather(res)
                    }
                }
            )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="City1" className="form-label display-2 mt-4">City</label>
                            <input
                                type="City"
                                className="form-control"
                                id="City1"
                                aria-describedby="emailHelp"
                                value={city}
                                onChange={e => handleChange(e)}
                            />
                            <div id="emailHelp" className="form-text">
                                Enter city to see weather.
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-sm">
                    <h2 className="display-2 text-center mt-4">
                        {weather
                            ? (<>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <p className="display-3">{weather.name}</p>
                                                <p className="display-5">{weather.main.temp}<sup>o</sup>C</p>
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
                            : (<div className="">
                                <p className="">No weather!</p>
                            </div>)}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default WeatherSearchComponent;