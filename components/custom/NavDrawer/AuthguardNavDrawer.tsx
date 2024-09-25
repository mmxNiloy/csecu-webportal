"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import React, { useState } from "react";
import Icons from "@/components/ui/icons";

export default function AuthguardNavDrawer() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} size="icon">
          <Icons.menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 min-w-64 rounded-none">
        <DrawerHeader className="text-muted">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        <div className="px-4 w-full h-full flex flex-col items-center justify-center gap-1 md:gap-2">
          <Icons.warn size={64} />
          <p className="text-lg md:text-xl font-semibold">
            Please login to use our app to the full extent.
          </p>
          <Link className="w-full" href="/login" passHref>
            <Button
              variant={"outline"}
              onClick={() => setOpen(false)}
              className="w-full gap-1 md:gap-2"
            >
              <Icons.login />
              Login
            </Button>
          </Link>

          <p className="md:text-lg mt-4">Don&apos;t have an account?</p>

          <Link className="w-full" href="/join-us" passHref>
            <Button
              variant={"outline"}
              onClick={() => setOpen(false)}
              className="w-full gap-1 md:gap-2"
            >
              <Icons.badgeCheck />
              Join us
            </Button>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
