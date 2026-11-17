"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
  url: string;
  initialCount?: number;
};

export default function LinkCard({ id, title, url, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    // 페이지 이동 중에도 요청이 끊기지 않도록 sendBeacon 우선 사용
    const body = JSON.stringify({ id });
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/click", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
    if (count !== undefined) setCount(count + 1);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {title}
      {count !== undefined && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          {count.toLocaleString()}
        </span>
      )}
    </a>
  );
}
