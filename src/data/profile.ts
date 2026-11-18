// 프로필과 링크 목록 — 이 파일만 수정하면 페이지 내용이 바뀝니다.

export type LinkItem = {
  id: string; // 클릭 수 집계 키 (바꾸면 기존 집계와 분리됨)
  title: string;
  url: string;
};

// TODO: 아래는 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.
export const profile = {
  name: "김개발",
  bio: "풀스택 개발자 : 요즘에는 Ai개발에 관심이 많아요",
  // 화면 표시 크기(160px)의 2배로 요청해 레티나에서도 선명하게, PNG로 받아 next/image 최적화 사용
  image: "https://placehold.co/320x320/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
