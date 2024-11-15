import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

export default function BBSCard() {
    return (
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
    )
}