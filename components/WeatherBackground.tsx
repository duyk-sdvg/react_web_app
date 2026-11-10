export default function WeatherBackground({
  skyBackground,
  timeOfDay,
  weatherType,
}: {
  skyBackground: string;
  timeOfDay: {
    isNight: boolean;
    isDay: boolean;
    isMorning: boolean;
    isEvening: boolean;
  };
  weatherType: "clear" | "rain" | "cloudy";
}) {
  //  console.log(skyBackground, timeOfDay, weatherType)

  return (
    <div
      aria-hidden="true"
      style={{
        backgroundImage: `var(--sky-horizon-gradient), ${skyBackground}`,
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none "
    >
      {timeOfDay.isNight &&
        (weatherType === "clear" || weatherType === "cloudy") && <Stars />}
      {(weatherType === "cloudy" || weatherType === "rain") && <Clouds />}
      {weatherType === "rain" && <Rain />}
      {weatherType === "clear" && !timeOfDay.isNight && <SunGlow />}
    </div>
  );
}

function Stars() {
  return (
    <div>
      {starList.map((item, index) => (
        <div
          className="absolute rounded-full bg-sky-star"
          key={index}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
          }}
        ></div>
      ))}
    </div>
  );
}

function Clouds() {
  return (
    <div>
      {cloudList.map((item, index) => (
        <div
          className="absolute rounded-full bg-sky-cloud"
          key={index}
          style={{
            left: item.left,
            top: item.top,
            width: item.size + 100,
            height: item.size,
            opacity: item.opacity,
            filter: `blur(${item.blur}px)`,
          }}
        ></div>
      ))}
    </div>
  );
}

function Rain() {
  return (
    <div>
      {rainList.map((item, index) => (
        <div
          className="rain-drop absolute bg-(image:--sky-rain-gradient) w-px h-16"
          key={index}
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
}

function SunGlow() {
  return (
    <div
      className="absolute bg-(image:--sky-sun-glow-gradient) size-130"
      style={{
        left: "75%",
        top: "-100px",
        transform: "translateX(-50%)",
      }}
    ></div>
  );
}

const cloudList = [
  { left: "11%", top: "12%", size: 200, opacity: "0.4", blur: 30 },
  { left: "15%", top: "20%", size: 200, opacity: "0.4", blur: 30 },

  { left: "90%", top: "5%", size: 100, opacity: "0.3", blur: 20 },
  { left: "85%", top: "10%", size: 300, opacity: "0.5", blur: 30 },
  { left: "81%", top: "22%", size: 100, opacity: "0.4", blur: 20 },

  { left: "22%", top: "59%", size: 200, opacity: "0.5", blur: 30 },
  { left: "15%", top: "67%", size: 200, opacity: "0.4", blur: 30 },
  { left: "10%", top: "50%", size: 200, opacity: "0.3", blur: 30 },
];

const starList = [
  { left: "90%", top: "5%", size: 1, opacity: "0.3" },
  { left: "11%", top: "12%", size: 2, opacity: "0.4" },
  { left: "96%", top: "15%", size: 3, opacity: "0.5" },
  { left: "81%", top: "22%", size: 1, opacity: "0.6" },
  { left: "22%", top: "59%", size: 2, opacity: "0.7" },
  { left: "15%", top: "87%", size: 3, opacity: "0.8" },

  { left: "5%", top: "90%", size: 1, opacity: "0.9" },
  { left: "12%", top: "21%", size: 2, opacity: "0.1" },
  { left: "15%", top: "96%", size: 3, opacity: "0.2" },
  { left: "22%", top: "81%", size: 1, opacity: "0.3" },
  { left: "59%", top: "22%", size: 2, opacity: "0.4" },
  { left: "87%", top: "15%", size: 3, opacity: "0.5" },

  { left: "51%", top: "90%", size: 1, opacity: "0.6" },
  { left: "12%", top: "71%", size: 2, opacity: "0.7" },
  { left: "15%", top: "66%", size: 3, opacity: "0.8" },
  { left: "22%", top: "51%", size: 1, opacity: "0.9" },
  { left: "59%", top: "82%", size: 2, opacity: "0.1" },
  { left: "17%", top: "30%", size: 3, opacity: "0.2" },
];

const rainList = [
  { left: "8%", top: "-80px", animationDuration: "3s", animationDelay: "0.4s" },
  {
    left: "11%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.4s",
  },
  {
    left: "25%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "0.4s",
  },
  {
    left: "100%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "0.1s",
  },
  {
    left: "95%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.1s",
  },
  {
    left: "90%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "-0.1s",
  },
  {
    left: "85%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "0.1s",
  },
  {
    left: "81%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.0s",
  },
  {
    left: "18%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "0.0s",
  },
  {
    left: "25%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "-0.1s",
  },
  {
    left: "22%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "0.2s",
  },
  {
    left: "15%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "-0.2s",
  },
  {
    left: "10%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.3s",
  },
  {
    left: "30%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "0.1s",
  },
  {
    left: "32%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "0.4s",
  },
  {
    left: "37%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "-0.3s",
  },
  {
    left: "40%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "0.1s",
  },
  {
    left: "42%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "-0.1s",
  },
  {
    left: "48%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "0.2s",
  },
  {
    left: "52%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.4s",
  },
  {
    left: "58%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "0.2s",
  },
  {
    left: "63%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "-0.0s",
  },
  {
    left: "68%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.1s",
  },
  {
    left: "73%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "-0.4s",
  },
  {
    left: "110%",
    top: "-80px",
    animationDuration: "1s",
    animationDelay: "0.0s",
  },
  {
    left: "112%",
    top: "-80px",
    animationDuration: "2s",
    animationDelay: "-0.2s",
  },
  {
    left: "109%",
    top: "-80px",
    animationDuration: "3s",
    animationDelay: "0.4s",
  },
];
