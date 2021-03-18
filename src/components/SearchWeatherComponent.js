import React, {useState} from "react";
import {Api} from "../api/Api";
import ShowWeather from "./ShowWeather";
import FormSearch from "./FormSearch";

const SearchWeatherComponent = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Api.fetch(city)
            .then(res => {
                    if (res.cod === 200) {
                        setWeather(res)
                    } else if (res.cod === '404') {
                        setWeather(null)
                        setError(res.message)
                }
                }
            )
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm d-flex justify-content-center align-items-center">
                    <FormSearch
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        city={city}
                    />
                </div>
                <div className="col-sm d-flex justify-content-center align-items-center">
                    {weather
                        ? <ShowWeather weather={weather}/>
                        : <p className="display-5 text-center">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchWeatherComponent;