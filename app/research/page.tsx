"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Research } from "@/util/types";
import React from "react";

export default async function ResearchPage() {
  const resRes = await fetch(
    `${process.env.API_BASE}/editorial-manager/submission`
  );
  const researches = (await resRes.json()) as Research[];

  return (
    <div className="grid grid-cols-2 gap-4">
      <p className="p-8 from-green-200 to-purple-300 bg-gradient-to-br text-2xl font-bold text-center text-primary col-span-full">
        Our Research
      </p>

      {researches.map((item) => (
        <Card key={item.submission_id}>
          <CardHeader>
            <CardTitle>{item.paper_title}</CardTitle>
            <CardDescription>Author ID: {item.author_id}</CardDescription>
            <CardDescription className="px-2 py-1 text-xs text-white bg-green-500 w-fit rounded-full">
              {item.status}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-3 gap-2 items-center justify-start">
              <p className="text-muted-foreground text-sm col-span-full">
                Keywords
              </p>
              {item.keywords.split(",").map((kwd) => (
                <p
                  key={`${item.submission_id}-${kwd}`}
                  className="px-2 py-1 text-xs text-white bg-blue-500 w-fit rounded-full"
                >
                  {kwd.trim()}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
