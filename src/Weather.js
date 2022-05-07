import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-10">
          <form className="form-border">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city.."
            />
          </form>
        </div>
        <div className="col-2 btn-border">
          <input className=" btn btn-primary " type="submit" value="search" />
        </div>
      </div>
      <div className="row">
        <div className="col-3 weather-image-temp">
          <img
            className="weather-image"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <span className="temp">6</span>
          °C
        </div>
        <div className="col-3 weather-info">
          <ul className="weather-info">
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15km</li>
          </ul>
        </div>
        <div className="col-6 place-info">
          <h2>Martina Franca, Taranto, Italy</h2>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
