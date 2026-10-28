import getWeather from "@/app/lib/visualCrossing";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");
  if (!city) return NextResponse.json({"textErr": "нет города"}, {"status": 400})
  try {
    const data = await getWeather(city);
    // console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err)
    return NextResponse.json({"textErr": "ошибка в getWeather"}, {"status": 500})
  }
}
