import { WeatherResponse } from "../types/weather";

export default async function getWeather(city: string) {
  if (process.env.VISUAL_CROSSING_API_KEY === undefined)
    throw new Error("Не задана переменная VISUAL_CROSSING_API_KEY");

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?key=${process.env.VISUAL_CROSSING_API_KEY}&unitGroup=metric&lang=ru`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Не прошел response");
  }
  const data: WeatherResponse = await response.json();
  //   console.log(data);
  return data;
}
