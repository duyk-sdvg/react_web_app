"use client";

import { WeatherDay } from "@/app/types/weather";
import { formatDate, formatTemp } from "@/app/utils/format";
import { ArrowIcon } from "./icons/uiIcons";
import { useRef } from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast({
  weatherByDay,
}: {
  weatherByDay: WeatherDay[];
}) {
  const isPress = useRef(false);
  const coordsPointer = useRef(0);
  const positionContainer = useRef(0);
  const scrollingRef = useRef<HTMLDivElement | null>(null);

  const handleClick = function (distance: number) {
    scrollingRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };
  return (
    <div
      className="flex flex-col gap-4 bg-surface rounded-2xl px-5 py-4 border border-border"
      data-theme="light"
    >
      <div className="flex justify-between">
        <h2 className="text-2xl text-sky-foreground font-bold">По дням</h2>
        <div className="flex gap-2">
          <button
            className="p-2 rounded-full border border-border hover:bg-surface-hover transition-transform active:translate-y-0.5"
            onClick={() => handleClick(-300)}
          >
            <ArrowIcon />
          </button>
          <button
            className="p-2 border border-border rounded-full hover:bg-surface-hover transition-transform active:translate-y-0.5"
            onClick={() => handleClick(300)}
          >
            <ArrowIcon className="rotate-180" />
          </button>
        </div>
      </div>
      <div
        className="flex gap-3 text-sky-foreground pb-4 w-full overflow-x-auto select-none cursor-grab active:cursor-grabbing"
        ref={scrollingRef}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          if (scrollingRef.current) {
            isPress.current = true;
            coordsPointer.current = e.clientX;
            positionContainer.current = scrollingRef.current.scrollLeft;
            scrollingRef.current.setPointerCapture(e.pointerId);
          }
        }}
        onPointerMove={(e) => {
          if (isPress.current && scrollingRef.current) {
            const diff = e.clientX - coordsPointer.current;
            const newCoord = positionContainer.current - diff;
            scrollingRef.current.scrollLeft = newCoord;
          }
        }}
        onPointerUp={() => (isPress.current = false)}
        onPointerCancel={() => (isPress.current = false)}
        onLostPointerCapture={() => (isPress.current = false)}
      >
        {weatherByDay.map((day) => (
          <div
            key={day.datetime}
            className="bg-surface-muted flex flex-col gap-1 p-2 rounded-2xl border border-border items-center hover:bg-surface-hover min-w-38"
          >
            <p className="text-xl text-sky-muted">{formatDate(day.datetime)}</p>
            <WeatherIcon description={day.icon} className="size-17" />
            <div className="flex gap-2.5 text-xl">
              <p className="font-bold text-sky-foreground">
                {formatTemp(day.tempmax)}
              </p>
              <p className="font-bold text-sky-muted">
                {formatTemp(day.tempmin)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
