import React from "react";
import Icons from "@/components/ui/icons";

export default function NotFoundPage() {
  return (
    <div className="w-full flex-grow gap-1 md:gap-2 flex flex-col items-center justify-center">
      <Icons.rabbit size={128} />
      <p className="text-lg font-bold">Oops, something went wrong!</p>
      <p>Please try again later.</p>
    </div>
  );
}
