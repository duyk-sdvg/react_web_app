"use client"

import { ReactNode, useState } from "react"
import SearchBar from "./SearchBar"
import CurrentWeather from "./CurrentWeather"


export default function WeatherApp(){
    const [inputCity, setInputCity] = useState("")
    console.log(inputCity)
    return(
        <div className="mx-40 mt-10">
            <SearchBar onClick={setInputCity}/>
            <CurrentWeather />
        </div>
    )
}