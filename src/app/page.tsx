import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile, socials } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

// 클릭 수를 매 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

export default async function Home() {
  const dbEnabled = Boolean(process.env.MONGODB_URI);
  const counts = dbEnabled ? await getClickCounts() : {};

  return (
    <>
      {/* 유리 너머로 비치는 흐릿한 빛 덩어리 */}
      <div aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="fixed right-4 top-4 z-20">
        <ThemeToggle />
      </div>

      <main className="relative z-10 flex min-h-screen justify-center px-5 py-16 sm:px-6 sm:py-20">
        <div className="w-full max-w-[460px]">
          {/* 상단: 프로필 사진 · 이름 · 소개 · SNS 아이콘 */}
          <Profile {...profile} socials={socials} />

          {/* 하단: 주요 링크 버튼 */}
          <ul className="mt-9 flex flex-col gap-[21px]">
            {links.map((link, i) => (
              <li key={link.id} className="reveal" style={{ ["--delay" as string]: `${120 + i * 80}ms` }}>
                <LinkCard {...link} initialCount={dbEnabled ? counts[link.id] ?? 0 : undefined} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
