"use server";
import TeacherCard from "@/components/custom/TeacherCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course, Teacher } from "@/util/types";
import React from "react";

export default async function TeacherPage() {
  var teachers: Teacher[] = [];
  try {
    const teachRes = await fetch(`${process.env.API_BASE}/teacher?limit=all`);
    teachers = (await teachRes.json()) as Teacher[];
  } catch (err) {
    console.log("Failed to get teacher info >", err);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <p className="col-span-full text-2xl font-bold text-primary p-8 text-center from-green-200 to-purple-300 bg-gradient-to-br rounded-md">
        Meet our Faculty Members
      </p>
      {teachers.map((item) => (
        <TeacherCard key={item.teacher_id} teacher_id={item.teacher_id} />
      ))}
    </div>
  );
}
