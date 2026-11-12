import { WeatherHour, WeatherResponse } from "../types/weather";

export function getNext24Hours(weather: WeatherResponse) {
  const currentTime = weather.currentConditions.datetimeEpoch;
  if (weather.days.length < 2) return null;
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
