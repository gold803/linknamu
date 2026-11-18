import Image from "next/image";
import type { SocialItem } from "@/data/profile";
import SocialIcons from "./SocialIcons";

type Props = { name: string; bio: string; image: string; socials: SocialItem[] };

export default function Profile({ name, bio, image, socials }: Props) {
  return (
    <section className="glass reveal flex flex-col items-center rounded-[32px] px-6 pb-8 pt-10 text-center">
      {/* 유리 링 안에 담긴 원형 프로필 사진 */}
      <div className="rounded-full bg-white/40 p-1.5 shadow-[0_10px_30px_-12px_rgba(14,50,96,0.45),inset_1px_1px_0_rgba(255,255,255,0.8)] dark:bg-white/15">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={120}
          height={120}
          priority
          className="h-[120px] w-[120px] rounded-full object-cover"
        />
      </div>

      <h1 className="mt-6 text-[32px] font-bold leading-tight tracking-[-0.02em]">{name}</h1>
      <p className="mt-3 max-w-[22rem] text-[15.5px] font-normal leading-[1.6] text-[color:var(--text-sub)]">
        {bio}
      </p>

      <div className="mt-7">
        <SocialIcons items={socials} />
      </div>
    </section>
  );
}
