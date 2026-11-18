/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 외부 프로필 이미지 호스트 허용 (next/image 사용 시 필수)
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
};

export default nextConfig;
