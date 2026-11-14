import getWeather from "@/app/lib/visualCrossing";
import { ApiErr } from "@/app/types/weather";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const location = request.nextUrl.searchParams.get("city");
  if (!location)
    return NextResponse.json({ message: "нет города" }, { status: 400 });
  try {
    const data = await getWeather(location);
    // console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    if (err instanceof ApiErr)
      return NextResponse.json(
        { message: err.message, status: err.status },
        { status: err.status },
      );
    return NextResponse.json(
      { message: "Не удалось загрузить погоду. Попробуйте позже." },
      { status: 500 },
    );
  }
}
