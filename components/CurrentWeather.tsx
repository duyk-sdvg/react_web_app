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

      <div className="flex gap-6 text-8xl font-display">
        <WeatherIcon description={currentWeather.icon} className="size-25" />
        <p>{formateTemp}</p>
      </div>

      <div className="flex gap-5 text-xl">
        <p>{currentWeather.conditions}</p>
        <label className="flex gap-2 text-sky-muted">
          Ощущается как
          <p>{formateFeelslike}</p>
        </label>
      </div>

      <div className="flex gap-4 text-xl text-sky-muted">
        <div className="flex gap-3 p-2 bg-sky-chip rounded-xl">
          <WindIcon className="size-7"/>
          <p>{formateWindDir}</p>
          <p>{formateWindSpeed} м/с</p>
        </div>

        <div className="flex gap-3 p-2 bg-sky-chip rounded-xl">
          <DropletIcon className="size-7"/>
          <p>{currentWeather.humidity}%</p>
        </div>

        <div className="flex gap-3 p-2 bg-sky-chip rounded-xl">
          <GaugeIcon className="size-7"/>
          <p>{formatePressure} мм рт. ст.</p>
        </div>
      </div>
    </div>
  );
}
