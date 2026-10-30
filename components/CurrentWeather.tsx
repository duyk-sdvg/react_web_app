import { CurrentConditions } from "@/app/types/weather";

export default function CurrentWeather({
  location,
  currentWeather,
}: {
  location: string;
  currentWeather: CurrentConditions;
}) {
//   console.log(currentWeather, location);
  return (
    <div className="w-full h-100 bg-amber-600">
        <p>{location}</p>
        <p>{currentWeather.temp}</p>
        <p>{currentWeather.datetime}</p>
        <p>{currentWeather.conditions}</p>
        <p>{currentWeather.feelslike}</p>
        <p>{currentWeather.icon}</p>
    </div>
  )
}
