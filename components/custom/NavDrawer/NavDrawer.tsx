"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useContext, useState } from "react";
import Icons from "@/components/ui/icons";
import UserContext from "../../../app/providers/UserContext";
import AuthguardNavDrawer from "./AuthguardNavDrawer";
import { LucideIcon } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User } from "@/util/types";
import { logout } from "@/app/actions/logout";

interface NavItem {
  title: string;
  Icon:
    | LucideIcon
    | React.ForwardRefExoticComponent<
        Omit<Partial<React.SVGProps<SVGSVGElement>>, "ref"> &
          React.RefAttributes<SVGElement>
      >;
  ref: string;
  hidden?: boolean;
}

export default function NavDrawer({ user }: { user: User }) {
  const navItems: NavItem[] = [
    {
      title: "Manage Editorials",
      Icon: Icons.note,
      ref: "http://bike-csecu.com:3010/",
      hidden: !user.teacher_id,
    },
    {
      title: "Withdraw Certificate",
      Icon: Icons.badgeCheck,
      ref: "http://bike-csecu.com:3020",
    },
    {
      title: "Manage Leave",
      Icon: Icons.logout,
      ref: "http://bike-csecu.com:3030/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Manage Attendance",
      Icon: Icons.userCheck,
      ref: "http://bike-csecu.com:3040/",
      hidden: !user.teacher_id,
    },
    {
      title: "Manage Teacher Information",
      Icon: Icons.teacher,
      ref: "http://bike-csecu.com:3060/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Manage Forms",
      Icon: Icons.todo,
      ref: "https://affsm.bike-csecu.com/",
    },
    {
      title: "Manage Exam Renumerations",
      Icon: Icons.money,
      ref: "http://bike-csecu.com:3080/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Manage Students",
      Icon: Icons.userCog,
      ref: "http://bike-csecu.com:3090/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Process Results",
      Icon: Icons.fileCog,
      ref: "http://bike-csecu.com:3100/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Manage Staff",
      Icon: Icons.userCog,
      ref: "http://bike-csecu.com:3110/",
      hidden: Boolean(user.student_id),
    },
    {
      title: "Manage Meetings",
      Icon: Icons.users,
      ref: "http://bike-csecu.com:3120/",
      hidden: Boolean(user.student_id),
    },
  ];

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant={"ghost"} size="icon">
          <Icons.menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 min-w-64 rounded-none">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="flex flex-col h-11/12 gap-1 md:gap-2 px-4">
          <ListItem
            navItem={{
              title: "Home",
              Icon: Icons.home,
              ref: "/",
            }}
          />
          {navItems.map((item, index) => (
            <DrawerClose key={`nav-list-item-${index}`} asChild>
              <ListItem popup navItem={item} />
            </DrawerClose>
          ))}

          <span className="flex-grow"></span>

          <form action={logout}>
            <Button variant={"destructive"} className="gap-2 w-full">
              <Icons.logout /> Logout
            </Button>
          </form>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

const ListItem = ({
  navItem,
  popup,
}: {
  navItem: NavItem;
  popup?: boolean;
}) => {
  if (navItem.hidden) return null;

  return (
    <Link
      href={navItem.ref}
      target={popup ? "_blank" : "_parent"}
      className={
        "flex flex-row w-full items-center gap-1 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      }
    >
      <navItem.Icon />
      <div className="text-sm font-medium leading-none flex-grow">
        {navItem.title}
      </div>
    </Link>
  );
};
ListItem.displayName = "ListItem";
