import { ApiErr, Location } from "../types/weather";

export async function getLocationFromCoords(
  latitude: number,
  longitude: number,
) {
  const controller = new AbortController();
  const signalControl = controller.signal;
  let isTimeOut = false;
  const timerId = setTimeout(() => {
    isTimeOut = true;
    controller.abort();
  }, 15000);

  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`;
  try{
    const response = await fetch(url, { signal: signalControl });
    if (!response.ok) throw new ApiErr("Ошибка геокодирования", response.status);
    const data: Location = await response.json();  
    return { locality: data.locality, city: data.city };
  } catch (err){
    if (isTimeOut) throw new Error("Истекло время геокодирования");
    throw err
  } finally{
    clearTimeout(timerId);
  }
}
