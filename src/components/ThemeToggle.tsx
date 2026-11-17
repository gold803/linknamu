"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="rounded-full border border-gray-300 p-2 text-lg leading-none transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {/* 하이드레이션 전에는 아이콘 자리만 확보 */}
      <span className="inline-block h-5 w-5">{dark === null ? "" : dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
