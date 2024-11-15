import BBSCardList from "./components/layout/BBSCardList";
import { BBSData } from "./components/types/types";

const bbsAllData: BBSData[] = [
  {
    id: 1,
    username: "ユーザー１",
    title: "１つ目の投稿",
    content: "１つ目の投稿の内容、これはダミーデータを使用してるからデータベースから取得したものではないよ",
    createdAt: new Date(),
  },
  {
    id: 2,
    username: "ユーザー２",
    title: "２つ目の投稿",
    content: "２つ目の投稿の内容、これはダミーデータを使用してるからデータベースから取得したものではないよ",
    createdAt: new Date(),
  },
  {
    id: 3,
    username: "ユーザー３",
    title: "３つ目の投稿",
    content: "３つ目の投稿の内容、これはダミーデータを使用してるからデータベースから取得したものではないよ",
    createdAt: new Date(),
  },
];


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start">
        <BBSCardList bbsAllData={bbsAllData} />
      </main>
    </div>
  );
}
