import { WeatherHour, WeatherResponse } from "../types/weather";

export function getNext24Hours(weather: WeatherResponse){
  const currentTime = weather.currentConditions.datetimeEpoch;

  const allHours = weather.days.slice(0, 2).flatMap((day) => day.hours);

  const currentHour = allHours.findIndex(
    (hour) => hour.datetimeEpoch > currentTime,
  );

  if (currentHour === -1) return null;

  return allHours.slice(currentHour, currentHour + 24);
}
