export function getWeatherTheme(icon: string, isDarkTime: boolean) {
  const isDarkWeather =
    icon.includes("rain") ||
    icon.includes("showers") ||
    icon.includes("snow") ||
    icon.includes("thunder") ||
    icon === "sleet" || icon.includes("night") ||
    icon === "hail";

    if(isDarkTime || isDarkWeather) return "dark"
    return "light"
}
