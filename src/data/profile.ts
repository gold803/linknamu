// 프로필과 링크 목록 — 이 파일만 수정하면 페이지 내용이 바뀝니다.

export type LinkItem = {
  id: string; // 클릭 수 집계 키 (바꾸면 기존 집계와 분리됨)
  title: string;
  url: string;
};

// TODO: 아래는 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile = {
  name: "골드",
  bio: "웹 개발자 · 만들고 기록하는 사람",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
