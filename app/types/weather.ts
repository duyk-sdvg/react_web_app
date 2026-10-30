export interface WeatherResponse {
  resolvedAddress: string;
  days: WeatherDay[];
  currentConditions: CurrentConditions;
}
export interface WeatherDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
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
}

export interface ApiError {
  textErr: string;
}
