import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row search">
          <div className="col-9">
            <form className="form-border">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-3 btn-border">
            <input
              className=" btn btn-primary w-100"
              type="submit"
              value="search"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3 weather-image-temp">
            <div className="clearfix">
              <img
                className="weather-image "
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt={weatherData.description}
              />

              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit"> °C</span>
            </div>
          </div>
          <div className="col-3 weather-info">
            <ul className="weather-info">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/hr</li>
            </ul>
          </div>
          <div className="col-6 place-info">
            <h3>{weatherData.city}</h3>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading">
        <h2>Loading...</h2>
        <br />
      </div>
    );
  }
}
