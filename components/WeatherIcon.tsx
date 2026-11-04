import type { ComponentType, SVGProps } from "react";
import {
  ClearDay,
  ClearNight,
  Cloudy,
  Fog,
  Hail,
  PartlyCloudyDay,
  PartlyCloudyNight,
  Rain,
  RainSnow,
  RainSnowShowersDay,
  RainSnowShowersNight,
  ShowersDay,
  ShowersNight,
  Sleet,
  Snow,
  SnowShowersDay,
  SnowShowersNight,
  Thunder,
  ThunderRain,
  ThunderShowersDay,
  ThunderShowersNight,
  Wind,
} from "./icons/weatherIcons";

const weatherDictionary: Partial<
  Record<string, ComponentType<SVGProps<SVGSVGElement>>>
> = {
  "clear-day": ClearDay,
  "clear-night": ClearNight,
  cloudy: Cloudy,
  "partly-cloudy-day": PartlyCloudyDay,
  "partly-cloudy-night": PartlyCloudyNight,
  rain: Rain,
  fog: Fog,
  hail: Hail,
  sleet: Sleet,
  snow: Snow,
  "rain-snow": RainSnow,
  "showers-day": ShowersDay,
  "showers-night": ShowersNight,
  "snow-showers-day": SnowShowersDay,
  "snow-showers-night": SnowShowersNight,
  "rain-snow-showers-day": RainSnowShowersDay,
  "rain-snow-showers-night": RainSnowShowersNight,
  thunder: Thunder,
  "thunder-showers-day": ThunderShowersDay,
  "thunder-showers-night": ThunderShowersNight,
  wind: Wind,
  "thunder-rain": ThunderRain,
};

interface WeatherIconPrpos extends SVGProps<SVGSVGElement> {
  description: string;
}

export default function WeatherIcon({
  description,
  ...props
}: WeatherIconPrpos) {
  const Icon = weatherDictionary[description];
  if (!Icon) return null;
  return <Icon {...props} />;
}
