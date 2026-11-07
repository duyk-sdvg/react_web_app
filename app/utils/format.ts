export function formatDate(date: string) {
  const formatDate = date.slice(-2) + "." + date.slice(-5, -3);
  return formatDate;
}

export function formatTemp(temp: number) {
  if (temp > 0) return "+" + temp.toString() + "°";
  return temp.toString() + "°";
}

export function formatWindDirection(windDirection: number) {
  if (windDirection >= 337 || windDirection < 22) return "C";
  if (windDirection >= 22 && windDirection < 67) return "СВ";
  if (windDirection >= 67 && windDirection < 112) return "B";
  if (windDirection >= 112 && windDirection < 157) return "ЮВ";
  if (windDirection >= 157 && windDirection < 202) return "Ю";
  if (windDirection >= 202 && windDirection < 247) return "ЮЗ";
  if (windDirection >= 247 && windDirection < 292) return "З";
  if (windDirection >= 292 && windDirection < 337) return "СЗ";
}
