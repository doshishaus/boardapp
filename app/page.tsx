import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import Link from "next/link";
import { Input } from "postcss";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
            <CardDescription>カードの説明</CardDescription>
          </CardHeader>
          <CardContent>
            カード内の内容
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/bbs-posts/1"}>詳細ページリンク</Link>
          </CardFooter>
        </Card>
      </main>

    </div>
  );
}
