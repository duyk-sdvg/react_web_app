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
import WeatherBackground from "./WeatherBackground";
import { getWeatherType } from "@/app/utils/getWeatherType";
import { getNext24Hours } from "@/app/utils/getNext24HoursWeather";
import { LoadScreen } from "./LoadScreen";

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [textErr, setTextErr] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  let weatherTheme = "dark";
  let skyBackground = "var(--sky-rain-night)";
  let timeOfDay = {
    isNight: true,
    isDay: false,
    isMorning: false,
    isEvening: false,
  };
  let curWeatherIcon = "clear-day";
  if (weather && weather.currentConditions) {
    const current = weather.currentConditions;
    curWeatherIcon = current.icon;
    timeOfDay = getTimeOfDay(
      current.datetimeEpoch,
      current.sunriseEpoch,
      current.sunsetEpoch,
    );

    skyBackground = getBackground(curWeatherIcon, timeOfDay);
    weatherTheme = getWeatherTheme(
      curWeatherIcon,
      timeOfDay.isNight || timeOfDay.isEvening,
    );
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
    });
  };

  return (
    <div
      className="relative flex justify-center isolate min-h-screen p-3"
      data-theme={weatherTheme}
    >
      <WeatherBackground
        skyBackground={skyBackground}
        timeOfDay={timeOfDay}
        weatherType={getWeatherType(curWeatherIcon)}
      />
      <div className="flex flex-col max-w-290 md:pt-10 gap-15 relative z-10 min-w-0">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center">
          <SearchBar onSearch={handleSearch} />
          <ButtonLocationSearch onSearch={handleLocation} />
        </div>
        {!isLoading && weather && (
          <CurrentWeather
            currentDate={weather.days[0].datetime}
            location={weather.address}
            currentWeather={weather.currentConditions}
          />
        )}

        {!isLoading && weather && (
          <HourlyForecast hoursList={getNext24Hours(weather)} />
        )}

        {!isLoading && weather && <DailyForecast weatherByDay={weather.days} />}

        {textErr && <p>{textErr}</p>}

        {isLoading && <LoadScreen />}
      </div>
    </div>
  );
}
