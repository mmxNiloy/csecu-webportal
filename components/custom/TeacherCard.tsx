"use server";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TeacherInfo } from "@/util/types";
import Icons from "../ui/icons";

export default async function TeacherCard({
  teacher_id,
}: {
  teacher_id: number;
}) {
  const teachRes = await fetch(`${process.env.API_BASE}/teacher/${teacher_id}`);
  const teacher = (await teachRes.json()) as TeacherInfo;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          {Boolean(teacher.profile_image?.remote_image_url) ? (
            <img
              className="rounded-full size-32 object-contain object-center bg-muted"
              alt="Profile Pic Image"
              src={teacher.profile_image.remote_image_url}
            />
          ) : (
            <Icons.user className="size-32" />
          )}
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-primary">
              {teacher.personal_info.first_name}{" "}
              {teacher.personal_info.last_name}
            </p>
            <p className="text-primary">{teacher.personal_info.designation}</p>
          </div>
        </div>
        <p className="text-xs px-2 py-1">
          Email: {teacher.personal_info.email}
        </p>
        <p className="text-xs px-2 py-1">
          Phone: {teacher.personal_info.phone}
        </p>
        <p className="text-xs px-2 py-1 bg-teal-500 text-white rounded-full">
          {teacher.personal_info.area_of_interest}
        </p>
      </CardContent>
    </Card>
  );
}
