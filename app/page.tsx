"use server";
import Counter from "@/components/custom/Counter";
import LabInfo from "@/components/custom/LabInfo";
import MessageFromChairman from "@/components/custom/MessageFromChairman";
import VisionMission from "@/components/custom/VisionMission";
import React from "react";

export default async function HomePage() {
  const statsRes = await fetch(`${process.env.API_BASE}/portal/all-count`);
  const counts = (await statsRes.json()) as {
    teacherCount: number;
    studentCount: number;
    courseCount: number;
  };

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
