"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/util/types";
import React from "react";

export default async function CoursePage() {
  var courses: Course[] = [];

  try {
    const coursesRes = await fetch(`${process.env.API_BASE}/course?limit=all`);
    courses = (await coursesRes.json()) as Course[];
  } catch (err) {
    console.error("Failed to get courses >", err);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <p className="col-span-full text-2xl font-bold text-primary p-8 text-center from-green-200 to-purple-300 bg-gradient-to-br rounded-md">
        Courses offered
      </p>
      {courses.map((item) => (
        <Card key={`${item.course_id}`}>
          <CardHeader>
            <CardTitle>{item.course_title}</CardTitle>
            <CardDescription>{item.course_code}</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <p className="text-xs px-2 py-1 bg-green-500 text-white rounded-full">
              {item.course_type}
            </p>
            <p className="text-xs px-2 py-1 bg-amber-500 text-white rounded-full">
              Credit(s): {item.credit}
            </p>
            <p className="text-xs px-2 py-1 bg-teal-500 text-white rounded-full">
              Exam Minutes: {item.exam_minutes}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
