// 프로필과 링크 목록 — 이 파일만 수정하면 페이지 내용이 바뀝니다.

export type LinkItem = {
  id: string; // 클릭 수 집계 키 (바꾸면 기존 집계와 분리됨)
  icon: string; // 버튼 왼쪽에 표시되는 이모지
  title: string;
  url: string;
};

export type SocialItem = {
  label: string; // 스크린리더·툴팁용 이름
  icon: "github" | "instagram" | "mail";
  url: string;
};

export const profile = {
  name: "태링",
  bio: "풀스택 개발자 : 요즘에는 Ai개발에 관심이 많아요",
  image: "/profile.jpg",
};

// 프로필 아래 작은 원형 SNS 아이콘
export const socials: SocialItem[] = [
  { label: "GitHub", icon: "github", url: "https://github.com/gold803" },
  // TODO: 예시 주소입니다. 본인 인스타그램 주소로 바꾸거나 이 줄을 지우세요.
  { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/" },
  { label: "이메일", icon: "mail", url: "mailto:803gom@naver.com" },
];

export const links: LinkItem[] = [
  { id: "github", icon: "🐙", title: "GitHub", url: "https://github.com/gold803" },
  // TODO: 예시 주소입니다. 실제 블로그 주소로 바꾸세요.
  { id: "blog", icon: "✍️", title: "Blog", url: "https://example.com" },
  { id: "email", icon: "📮", title: "Email", url: "mailto:803gom@naver.com" },
];
