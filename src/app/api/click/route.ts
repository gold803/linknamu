import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts, getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const validIds = new Set(links.map((l) => l.id));

// 링크별 클릭 수 조회
export async function GET() {
  return NextResponse.json(await getClickCounts());
}

// 클릭 1회 기록: { id: string }
export async function POST(req: Request) {
  let id: unknown;
  try {
    ({ id } = await req.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }
  if (typeof id !== "string" || !validIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크" }, { status: 400 });
  }

  try {
    const col = await getClicksCollection();
    if (!col) {
      return NextResponse.json({ error: "DB 미설정" }, { status: 503 });
    }
    await col.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("클릭 기록 실패:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
