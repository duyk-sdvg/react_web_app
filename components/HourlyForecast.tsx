import { WeatherHour } from "@/app/types/weather";


export default function HourlyForecast({hoursList}:{hoursList:WeatherHour[]}){

    return(
        <div className="flex gap-2">
            {hoursList.map((hour)=>(
                <div key={hour.datetimeEpoch}>
                    <p>{hour.datetime}</p>
                    <p>{hour.temp}</p>
                    <p>{hour.conditions}</p>
                    <p>{hour.feelslike}</p>
                    <p>{hour.precipprob}</p>
                    <p>{hour.icon}</p>
                </div>
            ))}
        </div>
    )
}