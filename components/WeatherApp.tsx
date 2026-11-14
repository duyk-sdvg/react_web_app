"use client";

import { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import { ApiErr, ApiErrorResponse, WeatherResponse } from "@/app/types/weather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import ButtonLocationSearch from "./ButtonLocationSearch";
import { getWeatherTheme } from "@/app/utils/getWeatherTheme";
import { getTimeOfDay } from "@/app/utils/getTimeOfDay";
import { getBackground } from "@/app/utils/getBackground";
import WeatherBackground from "./WeatherBackground";
import { getWeatherType } from "@/app/utils/getWeatherType";
import { getNext24Hours } from "@/app/utils/getNext24HoursWeather";
import { LoadScreen } from "./LoadScreen";
import { DialogErr } from "./DialogErr";
import { getLocationFromCoords } from "@/app/utils/getLocationFromCoords";

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [apiErrResponse, setApiErrResponse] = useState<ApiErrorResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errCodeGeloc, setErrCodeGeloc] = useState(0);
  const errDialogref = useRef<null | HTMLDialogElement>(null);
  const requestInProgress = useRef(false);

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

    if (requestInProgress.current) return;

    const controller = new AbortController();
    const signalController = controller.signal;
    let isTimeOut = false;

    requestInProgress.current = true;
    setApiErrResponse(null);
    setIsLoading(true);

    const timerId = setTimeout(() => {
      controller.abort();
      isTimeOut = true;
    }, 15000);

    try {
      const response = await fetch(url, { signal: signalController });

      if (!response.ok) {
        const data: ApiErrorResponse = await response.json();

        setApiErrResponse({ message: data.message, status: response.status });
        setWeather(null);
      } else {
        const data: WeatherResponse = await response.json();
        setWeather(data);
        setApiErrResponse(null);
      }
    } catch {
      if (isTimeOut)
        setApiErrResponse({
          message: "Превышено время запроса, повторите попытку",
        });
      else
        setApiErrResponse({ message: "Ошибка загрузки данных", status: 500 });
      setWeather(null);
    } finally {
      clearTimeout(timerId);
      setIsLoading(false);
      requestInProgress.current = false;
    }
  };
  const handleLocation = function () {
    navigator.geolocation.getCurrentPosition(getPosition, errPosition, {
      timeout: 10000,
    });
  };

  const errPosition = function (err: GeolocationPositionError) {
    errDialogref.current?.showModal();
    setErrCodeGeloc(err.code);
    // console.log(`ERROR(${err.code}): ${err.message}`);
  };

  const getPosition = async function (position: GeolocationPosition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    try {
      let { locality, city } = await getLocationFromCoords(
        latitude,
        longitude,
      );
      locality = locality.trim()
      city = city.trim()
      if(locality.length + city.length === 0) throw new Error("После геокодирования пришли пустые значения locality и city")
      const listLocation = [city, locality]
      const filterSetLocation = new Set(listLocation.filter((location)=>location.length > 0))
      handleSearch([...filterSetLocation].join(", "));
      
    } catch {
      handleSearch(`${latitude},${longitude}`);
    }
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
      <div className="flex flex-col w-full max-w-290 md:pt-10 gap-15 relative z-10 min-w-0">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center">
          <SearchBar onSearch={handleSearch} isDisabled={isLoading} />
          <ButtonLocationSearch
            onSearch={handleLocation}
            isDisabled={isLoading}
          />
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

        {apiErrResponse && (
          <div className="flex flex-col items-center gap-4 text-center bg-surface-muted p-3 rounded-2xl">
            <p className="text-foreground  md:text-4xl text-xl">
              {apiErrResponse.status}
            </p>
            <p className="text-foreground  md:text-2xl text-xl">
              {apiErrResponse.message}
            </p>
          </div>
        )}

        {isLoading && <LoadScreen />}

        <DialogErr errDialogref={errDialogref} errCode={errCodeGeloc} />
      </div>
    </div>
  );
}
