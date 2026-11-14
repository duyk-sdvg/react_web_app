export interface WeatherResponse {
  address: string;
  resolvedAddress: string;
  days: WeatherDay[];
  currentConditions: CurrentConditions;
}
export interface WeatherDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  icon: string;
  hours: WeatherHour[];
}

export interface WeatherHour extends CurrentConditions {
  precipprob: number;
}

export interface CurrentConditions {
  datetime: string;
  temp: number;
  feelslike: number;
  conditions: string;
  icon: string;
  datetimeEpoch: number;
  humidity: number;
  windspeed: number;
  pressure: number;
  winddir: number;
  sunriseEpoch: number;
  sunsetEpoch: number;
}

export class ApiErr extends Error{
  status
  constructor(message:string, status:number){
    super(message)
    this.name = "ApiErr"
    this.status = status
  }
}
