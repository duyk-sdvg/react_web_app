export function getTimeOfDay(
  currentDatetimeEpoch: number,
  sunriseEpoch: number,
  sunsetEpoch: number,
) {
  const threeHours = 3 * 60 * 60;

  const isNight =
    currentDatetimeEpoch < sunriseEpoch || currentDatetimeEpoch >= sunsetEpoch;

  const isMorning =
    !isNight && currentDatetimeEpoch < sunriseEpoch + threeHours;

  const isEvening =
    !isNight && !isMorning && currentDatetimeEpoch >= sunsetEpoch - threeHours;

  const isDay = !isNight && !isMorning && !isEvening;

  return { isNight, isDay, isMorning, isEvening };
}
