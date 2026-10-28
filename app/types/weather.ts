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
}

export interface CurrentConditions {
  datetime: string;
  temp: number;
  feelslike: number;
  conditions: string;
  icon: string;
}
