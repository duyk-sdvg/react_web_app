export function getWeatherType(icon:string) {
  let weatherType: "clear"| "rain"| "cloudy" = "clear";

  const hasPrecipitation =
    icon.includes("rain") ||
    icon.includes("showers") ||
    icon.includes("snow") ||
    icon.includes("thunder") ||
    icon === "sleet" ||
    icon === "hail";

  if (hasPrecipitation) {
    weatherType = "rain";
  } else if (icon.includes("cloudy") || icon === "fog") {
    weatherType = "cloudy";
  }
  return weatherType
}
