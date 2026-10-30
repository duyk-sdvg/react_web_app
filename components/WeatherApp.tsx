"use client";

import { cache, useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import { ApiError, WeatherResponse } from "@/app/types/weather";

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [textErr, setTextErr] = useState<string | null>(null);
  const [isLoading, setIsLoad] = useState(false);

  const handleSearch = async function (city: string) {
    const url = `/api/weather?city=${encodeURIComponent(city)}`;

    try {
      setIsLoad(true);
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
    } finally {
      setIsLoad(false);
    }
  };
  //   console.log(textErr)
  //   console.log(weather);

  return (
    <div className="mx-40 mt-10">
      <SearchBar onSearch={handleSearch} />
      {weather && <CurrentWeather location={weather.resolvedAddress} currentWeather={weather.currentConditions} />}
      {textErr && <p>{textErr}</p>}
      {isLoading && <p>Загрузка</p>}
    </div>
  );
}
