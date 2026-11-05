"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import { ApiError, WeatherHour, WeatherResponse } from "@/app/types/weather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherIcon from "./WeatherIcon";
import ButtonLocationSearch from "./ButtonLocationSearch";

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [textErr, setTextErr] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async function (location: string) {
    const url = `/api/weather?city=${encodeURIComponent(location)}`;

    try {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        const data: ApiError = await response.json();
        setTextErr(data.textErr);
        setWeather(null);
      } else {
        const data: WeatherResponse = await response.json();
        setWeather(data);
        setTextErr(null);
      }
    } catch (err) {
      setTextErr("Ошибка загрузки данных");
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLocation = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      handleSearch(`${latitude},${longitude}`)
      // console.log(latitude, longitude)
    });
  };
  //   console.log(textErr)
  // console.log(weather);

  return (
    <div className="flex flex-col bg-link mx-3">
      <div className="flex justify-between">
        <SearchBar onSearch={handleSearch} />
        <ButtonLocationSearch onSearch={handleLocation}/>
      </div>
      {weather && (
        <CurrentWeather
          location={weather.resolvedAddress}
          currentWeather={weather.currentConditions}
        />
      )}
      {weather && <DailyForecast weatherByDay={weather.days} />}
      {weather && <HourlyForecast hoursList={getNext24Hours(weather)} />}

      {textErr && <p>{textErr}</p>}
    </div>
  );
}

function getNext24Hours(weather: WeatherResponse) {
  const currentTime = weather.currentConditions.datetimeEpoch;
  const allHours = weather.days[0].hours.concat(weather.days[1].hours);

  let currentHour = 0;
  for (let i = 0; i < allHours.length; i++) {
    if (allHours[i].datetimeEpoch - currentTime > 0) {
      currentHour = i;
      break;
    }
  }

  const resultHours: WeatherHour[] = [];
  for (let i = currentHour; i < 24 + currentHour; i++) {
    resultHours.push(allHours[i]);
  }

  return resultHours;
}
