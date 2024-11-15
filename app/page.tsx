import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import Link from "next/link";
import { Input } from "postcss";
import BBSCard from "./components/layout/BBSCard";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start">
        <BBSCard/>
        <BBSCard/>
      </main>
    </div>
  );
}
