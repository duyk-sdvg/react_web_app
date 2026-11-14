import { WeatherResponse, ApiErr } from "../types/weather";

export default async function getWeather(location: string) {
  if (process.env.VISUAL_CROSSING_API_KEY === undefined)
    throw new Error("Сервис погоды временно не отвечает. Попробуйте позже.");

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${process.env.VISUAL_CROSSING_API_KEY}&unitGroup=metric&lang=ru`;

  const response = await fetch(url);
  // console.log(response.status, "response.status VISUAL CROSSING TS");

  if (response.status === 400) {
    throw new ApiErr(
      "Не удалось выполнить поиск. Проверьте название города и попробуйте ещё раз.",
      response.status,
    );
  }
  if (response.status === 401) {
    throw new ApiErr(
      "Сервис погоды временно недоступен. Попробуйте позже.",
      response.status,
    );
  }
  if (response.status === 404) {
    throw new ApiErr(
      "Не удалось обратиться к сервису погоды. Попробуйте позже.",
      response.status,
    );
  }
  if (response.status === 429) {
    throw new ApiErr(
      "Лимит запросов к сервису погоды исчерпан. Попробуйте позже.",
      response.status,
    );
  }
  if (!response.ok) {
    throw new ApiErr(
      "Сервис погоды временно не отвечает. Попробуйте позже.",
      response.status,
    );
  }

  const data: WeatherResponse = await response.json();
  //   console.log(data);
  return data;
}
