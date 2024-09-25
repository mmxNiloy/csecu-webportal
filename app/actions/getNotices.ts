"use server";

import { PaginatedNotice } from "@/util/types";

export async function getNotices({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) {
  var result: PaginatedNotice | undefined = undefined;
  try {
    const apiRes = await fetch(
      `${process.env.API_BASE}/notice?page=${page}&limit=${limit}`
    );
    if (apiRes.ok) {
      result = (await apiRes.json()) as PaginatedNotice;
    } else result = undefined;
  } catch (err) {
    console.error("Action > Get Notice > Failed to get notices", err);
    result = undefined;
  }

  return result;
}
