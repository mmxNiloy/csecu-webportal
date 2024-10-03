"use server";
import Counter from "@/components/custom/Counter";
import LabInfo from "@/components/custom/LabInfo";
import MessageFromChairman from "@/components/custom/MessageFromChairman";
import VisionMission from "@/components/custom/VisionMission";
import React from "react";

export default async function HomePage() {
  var counts = {
    teacherCount: 0,
    studentCount: 0,
    courseCount: 0,
  };

  try {
    const statsRes = await fetch(`${process.env.API_BASE}/portal/all-count`);
    counts = (await statsRes.json()) as {
      teacherCount: number;
      studentCount: number;
      courseCount: number;
    };
  } catch (err) {
    console.error("Failed to get count data", err);
  }

  return (
    <div className="flex flex-col gap-4">
      <MessageFromChairman />
      <VisionMission />
      {/* <NoticeNews /> */}
      <Counter {...counts} />
      <LabInfo />
    </div>
  );
}
