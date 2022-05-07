import React from "react";
import "./Weather.css";

export default function Weather() {
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
              alt="Mostly Cloudy"
            />

            <span className="temp">6</span>
            <span className="unit"> °C</span>
          </div>
        </div>
        <div className="col-3 weather-info">
          <ul className="weather-info">
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15km</li>
          </ul>
        </div>
        <div className="col-6 place-info">
          <h3>Martina Franca, Italy</h3>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
