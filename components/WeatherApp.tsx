"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import { ApiError, WeatherHour, WeatherResponse } from "@/app/types/weather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherIcon from "./WeatherIcon";
import ButtonLocationSearch from "./ButtonLocationSearch";
import { getWeatherTheme } from "@/app/utils/getWeatherTheme";
import { getTimeOfDay } from "@/app/utils/getTimeOfDay";
import { getBackground } from "@/app/utils/getBackground";

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [textErr, setTextErr] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  let weatherTheme = "dark";
  let skyBackground = "var(--sky-rain-night)";
  if (weather && weather.currentConditions) {
    const current = weather.currentConditions;

    const timeOfDay = getTimeOfDay(
      current.datetimeEpoch,
      current.sunriseEpoch,
      current.sunsetEpoch,
    );

    skyBackground = getBackground(current.icon, timeOfDay);
    weatherTheme = getWeatherTheme(current.icon, timeOfDay.isNight || timeOfDay.isEvening);
  }

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
      handleSearch(`${latitude},${longitude}`);
      // console.log(latitude, longitude)
    });
  };
  //   console.log(textErr)
  // console.log(weather);

  return (
    <div
      style={{ backgroundImage: skyBackground }}
      className="flex min-h-screen flex-col px-3 gap-15"
      data-theme={weatherTheme}
    >
      <div className="flex justify-between">
        <SearchBar onSearch={handleSearch} />
        <ButtonLocationSearch onSearch={handleLocation} />
      </div>
      {weather && (
        <CurrentWeather
          currentDate={weather.days[0].datetime}
          location={weather.address}
          currentWeather={weather.currentConditions}
        />
      )}

      {weather && <HourlyForecast hoursList={getNext24Hours(weather)} />}
      
      {weather && <DailyForecast weatherByDay={weather.days} />}
      

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
