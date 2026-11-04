import type { SVGProps } from "react";

export function ClearDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>clear-day</title>
      <circle cx="12" cy="12" r="4.4" stroke="var(--icon-sun)" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
        stroke="var(--icon-sun)"
      />
    </svg>
  );
}

export function ClearNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>clear-night</title>
      <path
        d="M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1z"
        stroke="var(--icon-moon)"
      />
    </svg>
  );
}

export function Cloudy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>cloudy</title>
      <path
        d="M7 18.5h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 11.6 3.5 3.5 0 0 0 7 18.5z"
        stroke="var(--icon-cloud)"
      />
    </svg>
  );
}

export function Fog(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>fog</title>
      <path
        d="M5 6.5h10M3 10.5h17M6 14.5h14M4 18.5h11"
        stroke="var(--icon-cloud)"
      />
    </svg>
  );
}

export function Hail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>hail</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <circle
        cx="8.5"
        cy="18.6"
        r="1.2"
        stroke="var(--icon-rain)"
        strokeWidth="1.5"
      />
      <circle
        cx="12.5"
        cy="20.8"
        r="1.2"
        stroke="var(--icon-rain)"
        strokeWidth="1.5"
      />
      <circle
        cx="16.5"
        cy="18.6"
        r="1.2"
        stroke="var(--icon-rain)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PartlyCloudyDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>partly-cloudy-day</title>
      <defs>
        <mask
          id="m-pcd"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M8 20h9a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 8 20z"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-pcd)">
        <circle cx="8.5" cy="8.5" r="3.2" stroke="var(--icon-sun)" />
        <path
          d="M8.5 2.6v1.2M3.8 4.4l.8.8M2.6 8.5h1.2M13.2 4.4l-.8.8"
          stroke="var(--icon-sun)"
        />
      </g>
      <g>
        <path
          d="M8 20h9a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 8 20z"
          stroke="var(--icon-cloud)"
        />
      </g>
    </svg>
  );
}

export function PartlyCloudyNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>partly-cloudy-night</title>
      <defs>
        <mask
          id="m-pcn"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M8 20h9a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 8 20z"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-pcn)">
        <path
          d="M12.6 8.4A4 4 0 1 1 7.6 3.4a3.2 3.2 0 0 0 5 5z"
          stroke="var(--icon-moon)"
        />
      </g>
      <g>
        <path
          d="M8 20h9a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 8 20z"
          stroke="var(--icon-cloud)"
        />
      </g>
    </svg>
  );
}

export function Rain(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>rain</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path
        d="M9 17.5l-1 2.5M13 17.5l-1 2.5M17 17.5l-1 2.5"
        stroke="var(--icon-rain)"
      />
    </svg>
  );
}

export function RainSnow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>rain-snow</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path d="M9 17.5l-1 2.5M17 17.5l-1 2.5" stroke="var(--icon-rain)" />
      <path
        d="M12.5 17.4v3.2M11.1 18.2l2.8 1.6M11.1 19.8l2.8-1.6"
        stroke="var(--icon-snow)"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function RainSnowShowersDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>rain-snow-showers-day</title>
      <defs>
        <mask
          id="m-rssd"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-rssd)">
        <circle cx="6.5" cy="6.5" r="2.6" stroke="var(--icon-sun)" />
        <path
          d="M6.5 1.9v.9M2.9 3.3l.6.6M1.9 6.5h.9M10.1 3.3l-.6.6"
          stroke="var(--icon-sun)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path d="M9 17.5l-1 2.5M17 17.5l-1 2.5" stroke="var(--icon-rain)" />
        <path
          d="M12.5 17.4v3.2M11.1 18.2l2.8 1.6M11.1 19.8l2.8-1.6"
          stroke="var(--icon-snow)"
          strokeWidth="1.3"
        />
      </g>
    </svg>
  );
}

export function RainSnowShowersNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>rain-snow-showers-night</title>
      <defs>
        <mask
          id="m-rssn"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-rssn)">
        <path
          d="M10.2 7.4A3.2 3.2 0 1 1 6 3.2a2.6 2.6 0 0 0 4.2 4.2z"
          stroke="var(--icon-moon)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path d="M9 17.5l-1 2.5M17 17.5l-1 2.5" stroke="var(--icon-rain)" />
        <path
          d="M12.5 17.4v3.2M11.1 18.2l2.8 1.6M11.1 19.8l2.8-1.6"
          stroke="var(--icon-snow)"
          strokeWidth="1.3"
        />
      </g>
    </svg>
  );
}

export function ShowersDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>showers-day</title>
      <defs>
        <mask
          id="m-sd"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-sd)">
        <circle cx="6.5" cy="6.5" r="2.6" stroke="var(--icon-sun)" />
        <path
          d="M6.5 1.9v.9M2.9 3.3l.6.6M1.9 6.5h.9M10.1 3.3l-.6.6"
          stroke="var(--icon-sun)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path
          d="M9 17.5l-1 2.5M13 17.5l-1 2.5M17 17.5l-1 2.5"
          stroke="var(--icon-rain)"
        />
      </g>
    </svg>
  );
}

export function ShowersNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>showers-night</title>
      <defs>
        <mask
          id="m-sn"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-sn)">
        <path
          d="M10.2 7.4A3.2 3.2 0 1 1 6 3.2a2.6 2.6 0 0 0 4.2 4.2z"
          stroke="var(--icon-moon)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path
          d="M9 17.5l-1 2.5M13 17.5l-1 2.5M17 17.5l-1 2.5"
          stroke="var(--icon-rain)"
        />
      </g>
    </svg>
  );
}

export function Sleet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>sleet</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path d="M9 17.5l-1 2.5M17 17.5l-1 2.5" stroke="var(--icon-rain)" />
      <circle cx="12.5" cy="19.2" r="1" fill="var(--icon-rain)" stroke="none" />
      <circle
        cx="10.6"
        cy="21.8"
        r="0.8"
        fill="var(--icon-rain)"
        stroke="none"
      />
      <circle
        cx="14.6"
        cy="21.8"
        r="0.8"
        fill="var(--icon-rain)"
        stroke="none"
      />
    </svg>
  );
}

export function Snow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>snow</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path
        d="M8.5 17.4v3.2M7.1 18.2l2.8 1.6M7.1 19.8l2.8-1.6M12.5 19.2v3.2M11.1 20l2.8 1.6M11.1 21.6l2.8-1.6M16.5 17.4v3.2M15.1 18.2l2.8 1.6M15.1 19.8l2.8-1.6"
        stroke="var(--icon-snow)"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function SnowShowersDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>snow-showers-day</title>
      <defs>
        <mask
          id="m-ssd"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-ssd)">
        <circle cx="6.5" cy="6.5" r="2.6" stroke="var(--icon-sun)" />
        <path
          d="M6.5 1.9v.9M2.9 3.3l.6.6M1.9 6.5h.9M10.1 3.3l-.6.6"
          stroke="var(--icon-sun)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path
          d="M8.5 17.4v3.2M7.1 18.2l2.8 1.6M7.1 19.8l2.8-1.6M16.5 17.4v3.2M15.1 18.2l2.8 1.6M15.1 19.8l2.8-1.6"
          stroke="var(--icon-snow)"
          strokeWidth="1.3"
        />
      </g>
    </svg>
  );
}

export function SnowShowersNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>snow-showers-night</title>
      <defs>
        <mask
          id="m-ssn"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 1.2)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-ssn)">
        <path
          d="M10.2 7.4A3.2 3.2 0 1 1 6 3.2a2.6 2.6 0 0 0 4.2 4.2z"
          stroke="var(--icon-moon)"
        />
      </g>
      <g transform="translate(1.6 1.2)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path
          d="M8.5 17.4v3.2M7.1 18.2l2.8 1.6M7.1 19.8l2.8-1.6M16.5 17.4v3.2M15.1 18.2l2.8 1.6M15.1 19.8l2.8-1.6"
          stroke="var(--icon-snow)"
          strokeWidth="1.3"
        />
      </g>
    </svg>
  );
}

export function Thunder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>thunder</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path d="M12.8 15.6l-2.4 3.4h3l-2 3.4" stroke="var(--icon-lightning)" />
    </svg>
  );
}

export function ThunderRain(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>thunder-rain</title>
      <path
        d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
        stroke="var(--icon-cloud)"
      />
      <path d="M8 17.5l-1 2.5M17.5 17.5l-1 2.5" stroke="var(--icon-rain)" />
      <path d="M12.8 15.6l-2.4 3.4h3l-2 3.4" stroke="var(--icon-lightning)" />
    </svg>
  );
}

export function ThunderShowersDay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>thunder-showers-day</title>
      <defs>
        <mask
          id="m-tsd"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 0.6)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-tsd)">
        <circle cx="6.5" cy="6.5" r="2.6" stroke="var(--icon-sun)" />
        <path
          d="M6.5 1.9v.9M2.9 3.3l.6.6M1.9 6.5h.9M10.1 3.3l-.6.6"
          stroke="var(--icon-sun)"
        />
      </g>
      <g transform="translate(1.6 0.6)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path d="M8 17.5l-1 2.5M17.5 17.5l-1 2.5" stroke="var(--icon-rain)" />
        <path d="M12.8 15.6l-2.4 3.4h3l-2 3.4" stroke="var(--icon-lightning)" />
      </g>
    </svg>
  );
}

export function ThunderShowersNight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>thunder-showers-night</title>
      <defs>
        <mask
          id="m-tsn"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#fff" />
          <path
            d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
            transform="translate(1.6 0.6)"
            fill="#000"
            stroke="#000"
            strokeWidth="3.4"
          />
        </mask>
      </defs>
      <g mask="url(#m-tsn)">
        <path
          d="M10.2 7.4A3.2 3.2 0 1 1 6 3.2a2.6 2.6 0 0 0 4.2 4.2z"
          stroke="var(--icon-moon)"
        />
      </g>
      <g transform="translate(1.6 0.6)">
        <path
          d="M7.5 15h9.5a3.6 3.6 0 0 0 .4-7.2 5.2 5.2 0 0 0-10-.4A3.8 3.8 0 0 0 7.5 15z"
          stroke="var(--icon-cloud)"
        />
        <path d="M8 17.5l-1 2.5M17.5 17.5l-1 2.5" stroke="var(--icon-rain)" />
        <path d="M12.8 15.6l-2.4 3.4h3l-2 3.4" stroke="var(--icon-lightning)" />
      </g>
    </svg>
  );
}

export function Wind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>wind</title>
      <path
        d="M3 9h10.5a2.5 2.5 0 1 0-2.5-2.5M3 13h15a3 3 0 1 1-3 3M3 17h6"
        stroke="var(--icon-cloud)"
      />
    </svg>
  );
}
