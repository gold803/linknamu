import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

// 클릭 수를 매 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

export default async function Home() {
  const dbEnabled = Boolean(process.env.MONGODB_URI);
  const counts = dbEnabled ? await getClickCounts() : {};

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      {/* 와이어프레임의 둥근 카드 프레임 */}
      <div className="relative flex min-h-[80vh] w-full max-w-md flex-col items-center rounded-[2rem] border-2 border-gray-800 bg-white px-8 pb-10 pt-14 shadow-sm dark:border-gray-600 dark:bg-gray-900">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        {/* 상단: 원형 프로필 사진 · 이름 · 한 줄 소개 */}
        <Profile {...profile} />

        {/* 하단: 링크 카드 세로 배치 */}
        <ul className="mt-12 flex w-full flex-col gap-9">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard {...link} initialCount={dbEnabled ? counts[link.id] ?? 0 : undefined} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
