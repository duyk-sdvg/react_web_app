export function getBackground(
  icon: string,
  timeOfDay: {
    isNight: boolean;
    isDay: boolean;
    isMorning: boolean;
    isEvening: boolean;
  },
) {
  const currentTimeOfDay =
    (Object.keys(timeOfDay) as Array<keyof typeof timeOfDay>).find(
      (key) => timeOfDay[key],
    ) || "isNight";

  let weatherType = "clear";

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

  const background: Record<
    typeof weatherType,
    Record<keyof typeof timeOfDay, string>
  > = {
    clear: {
      isNight: "var(--sky-clear-night)",
      isDay: "var(--sky-clear-day)",
      isMorning: "var(--sky-clear-morning)",
      isEvening: "var(--sky-clear-evening)",
    },
    cloudy: {
      isNight: "var(--sky-cloudy-night)",
      isDay: "var(--sky-cloudy-day)",
      isMorning: "var(--sky-cloudy-morning)",
      isEvening: "var(--sky-cloudy-evening)",
    },
    rain: {
      isNight: "var(--sky-rain-night)",
      isDay: "var(--sky-rain-day)",
      isMorning: "var(--sky-rain-morning)",
      isEvening: "var(--sky-rain-evening)",
    },
  };
  return background[weatherType][currentTimeOfDay];
}
