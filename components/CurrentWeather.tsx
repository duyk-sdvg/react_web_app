import { CurrentConditions } from "@/app/types/weather";
import WeatherIcon from "./WeatherIcon";
import { DropletIcon, GaugeIcon, MapPin, WindIcon } from "./icons/uiIcons";
import {
  formatDate,
  formatTemp,
  formatWindDirection,
} from "@/app/utils/format";

export default function CurrentWeather({
  location,
  currentWeather,
  currentDate,
}: {
  currentDate: string;
  location: string;
  currentWeather: CurrentConditions;
}) {
  const formattedLocation = location[0].toUpperCase() + location.slice(1);
  const formatedDate = formatDate(currentDate);
  const formateTime = currentWeather.datetime.slice(0, 5);
  const formateTemp = formatTemp(currentWeather.temp);
  const formateFeelslike = formatTemp(currentWeather.feelslike);
  const formateWindDir = formatWindDirection(currentWeather.winddir);
  const formateWindSpeed = (currentWeather.windspeed / 3.6).toFixed(1);
  const formatePressure = (currentWeather.pressure * 0.75).toFixed(0);

  return (
    <div className="flex flex-col items-center gap-5 text-sky-foreground">
      <div className="flex text-5xl items-center gap-3 ">
        <MapPin className="size-8"/>
        <p>{formattedLocation}</p>
      </div>

      <div className="flex gap-2 text-2xl">
        <p>{formatedDate}</p>
        <p>{formateTime}</p>
      </div>

      <div className="flex gap-6 md:text-8xl text-7xl  font-display">
        <WeatherIcon description={currentWeather.icon} className="md:size-29 size-25" />
        <p className="flex items-center">{formateTemp}</p>
      </div>

      <div className="flex gap-5 md:text-xl text-sm">
        <p>{currentWeather.conditions}</p>
        <label className="flex gap-2 text-sky-muted">
          Ощущается как
          <p>{formateFeelslike}</p>
        </label>
      </div>

      <div className="flex gap-4 md:text-xl text-sm text-sky-muted">
        <div className="flex md:gap-3 gap-1 p-2 bg-sky-chip rounded-xl">
          <WindIcon className="md:size-7 size-5"/>
          <p>{formateWindDir}</p>
          <p>{formateWindSpeed} м/с</p>
        </div>

        <div className="flex md:gap-3 gap-1 p-2 bg-sky-chip rounded-xl">
          <DropletIcon className="md:size-7 size-5"/>
          <p>{currentWeather.humidity}%</p>
        </div>

        <div className="flex md:gap-3 gap-1 p-2 bg-sky-chip rounded-xl">
          <GaugeIcon className="md:size-7 size-5"/>
          <p>{formatePressure} мм рт. ст.</p>
        </div>
      </div>
    </div>
  );
}
