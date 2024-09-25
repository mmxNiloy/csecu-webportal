"use server";
import React from "react";
import { getNotices } from "../actions/getNotices";
import { Notice } from "@/util/types";

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function NoticePage({ searchParams }: Props) {
  const { limitParam, pageParam } = searchParams;
  const limit = Number.parseInt((limitParam as string) ?? "5");
  const page = Number.parseInt((pageParam as string) ?? "1");

  const paginatedNotices = await getNotices({ limit, page });
  var notices: Notice[] = [];
  if (paginatedNotices) {
    notices = paginatedNotices.data;
  }

  return (
    <div>
      {notices.map((notice) => (
        <p key={notice.notice_id}>{notice.notice_title}</p>
      ))}
    </div>
  );
}
