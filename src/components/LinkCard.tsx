"use client";

import { useState, type PointerEvent } from "react";

type Props = {
  id: string;
  icon: string;
  title: string;
  url: string;
  initialCount?: number;
};

export default function LinkCard({ id, icon, title, url, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);
  const external = !url.startsWith("mailto:");

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

  // 마우스 위치를 CSS 변수로 넘겨 유리 표면의 빛 위치를 정함
  const handlePointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      href={url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
      className="glass link-card focus-ring grid min-h-[64px] w-full grid-cols-[44px_1fr_44px] items-center gap-2 rounded-[24px] px-3 py-2"
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/35 text-xl shadow-[inset_1px_1px_0_rgba(255,255,255,0.7)] dark:bg-white/10"
      >
        {icon}
      </span>

      <span className="text-center text-base font-semibold">{title}</span>

      <span className="flex items-center justify-end gap-1.5 pr-1 text-[color:var(--text-sub)]">
        {count !== undefined && (
          <span className="text-xs tabular-nums" aria-label={`클릭 ${count}회`}>
            {count.toLocaleString()}
          </span>
        )}
        <svg
          className="link-arrow"
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m8 5 5 5-5 5" />
        </svg>
      </span>
    </a>
  );
}
