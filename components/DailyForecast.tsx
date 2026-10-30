import { WeatherDay } from "@/app/types/weather";

export default function DailyForecast({weatherByDay} : {weatherByDay:WeatherDay[]}){
    // console.log(weatherByDay)
    return(
        <div className="flex gap-3">
            {weatherByDay.map((day) => (
                <div key={day.datetime}>
                    <p>{day.datetime}</p>
                    <p>{day.temp}</p>
                    <p>{day.tempmax}</p>
                    <p>{day.tempmin}</p>
                </div>
            ))}
        </div>
    )
}