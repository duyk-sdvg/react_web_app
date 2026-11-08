"use client";

import { WeatherHour } from "@/app/types/weather";
import WeatherIcon from "./WeatherIcon";
import { formatTemp } from "@/app/utils/format";
import { ArrowIcon } from "./icons/uiIcons";
import { useRef } from "react";

export default function HourlyForecast({
  hoursList,
}: {
  hoursList: WeatherHour[];
}) {
  const scrollingRef = useRef<HTMLDivElement | null>(null);
  const isPress = useRef(false);
  const coordsPointer = useRef(0);
  const positionContainer = useRef(0);

  const handleClick = function (distance: number) {
    scrollingRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col gap-4 bg-surface rounded-2xl px-5 py-4 border border-border"
      data-theme="light"
    >
      <div className="flex justify-between">
        <h2 className="text-2xl text-sky-foreground font-bold">По часам</h2>
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
        ref={scrollingRef}
        className="flex gap-3 text-sky-foreground pb-4 w-full overflow-x-auto select-none cursor-grab active:cursor-grabbing"
      >
        {hoursList.map((hour) => (
          <div
            key={hour.datetimeEpoch}
            className="bg-surface-muted flex flex-col gap-1 p-2 rounded-2xl border border-border items-center hover:bg-surface-hover "
          >
            <p className="text-xl text-sky-muted">
              {hour.datetime.slice(0, 5)}
            </p>
            <WeatherIcon description={hour.icon} className="size-15" />
            <p className="text-xl font-bold text-sky-foreground">
              {formatTemp(hour.temp)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
