import { WeatherResponse, ApiErr } from "../types/weather";

export default async function getWeather(location: string) {
  if (process.env.VISUAL_CROSSING_API_KEY === undefined)
    throw new Error("Не задана переменная VISUAL_CROSSING_API_KEY");

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${process.env.VISUAL_CROSSING_API_KEY}&unitGroup=metric&lang=ru`;

  const response = await fetch(url);
  console.log(response.status, "response.status VISUAL CROSSING TS");

  if (response.status === 400) {
    throw new ApiErr(
      "BAD_REQUEST – Неверный формат API или предоставлен недопустимый параметр или комбинация параметров",
      response.status,
    );
  }
  if (response.status === 401) {
    throw new ApiErr(
      "UNAUTHORIZED – Возникла проблема с ключом API, учетной записью или подпиской. Также может возвращаться, если запрашивается функция, к которой у учетной записи нет доступа",
      response.status,
    );
  }
  if (response.status === 404) {
    throw new ApiErr(
      "NOT_FOUND – Запрос не может быть сопоставлен ни с одной допустимой структурой конечной точки запроса API.",
      response.status,
    );
  }
  if (response.status === 429) {
    throw new ApiErr(
      "TOO_MANY_REQUESTS – Учетная запись превысила установленные лимиты.",
      response.status,
    );
  }
  if (!response.ok) {
    throw new ApiErr(
      "INTERNAL_SERVER_ERROR – При обработке запроса произошла общая ошибка.",
      response.status,
    );
  }

  const data: WeatherResponse = await response.json();
  //   console.log(data);
  return data;
}
