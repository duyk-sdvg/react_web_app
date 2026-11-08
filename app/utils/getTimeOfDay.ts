export function getTimeOfDay(
  currentDatetimeEpoch: number,
  sunriseEpoch: number,
  sunsetEpoch: number,
) {
  const oneHours = 1 * 60 * 60;

  const isNight =
    currentDatetimeEpoch < sunriseEpoch || currentDatetimeEpoch >= sunsetEpoch;

  const isMorning =
    !isNight && currentDatetimeEpoch < sunriseEpoch + oneHours;

  const isEvening =
    !isNight && !isMorning && currentDatetimeEpoch >= sunsetEpoch - oneHours;

  const isDay = !isNight && !isMorning && !isEvening;

  return { isNight, isDay, isMorning, isEvening };
}
