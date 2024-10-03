"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import NavDrawer from "./NavDrawer/NavDrawer";
import { User } from "@/util/types";
import { cookies } from "next/headers";
import AuthguardNavDrawer from "./NavDrawer/AuthguardNavDrawer";

export default async function Appbar({ user }: { user?: User }) {
  const userCookie = cookies().get(process.env.USER_COOKIE_KEY!);
  var user: User | undefined = undefined;
  console.log("Appbar.tsx > Session value", userCookie?.value);

  try {
    const apiRes = await fetch(`${process.env.API_BASE}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userCookie?.value}`,
      },
    });

    if (apiRes.ok) {
      const res = await apiRes.json();
      console.log("Appbar.tsx > User info found >", res);
      user = res as User;
    } else {
      console.log("Appbar.tsx > User info not found >", await apiRes.json());
      console.log("Appbar.tsx > User info not found > Status >", apiRes.status);
      user = undefined;
    }
  } catch (err) {
    console.error("Appbar.tsx > Failed to parse user cookie", err);
    user = undefined;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* LOGO: home ref */}
        <Link href="/" className="flex gap-1 md:gap-2 items-center">
          <Image
            height={56}
            width={37}
            alt="CU Logo"
            className="invert-0 dark:invert"
            priority
            src="/cu_logo.svg"
          />
          <p className="font-semibold hidden md:flex md:text-lg">
            University of Chittagong
          </p>
        </Link>

        {/* To fill out the empty space in the middle */}
        <span className="flex flex-grow" />

        {/* Navigation */}

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/notice"
                className={navigationMenuTriggerStyle()}
              >
                Notices
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Faculty</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-6 w-96">
                  <ListItem href="/faculty/teacher" title="Teachers">
                    Discover our esteemed teachers and their incredible
                    expertise. Dive in to learn more about the brilliant minds
                    shaping our future!
                  </ListItem>

                  <ListItem href="/faculty/course" title="Courses">
                    Explore our diverse courses in programming, design,
                    management, and a vast array of computer science courses.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/research"
                className={navigationMenuTriggerStyle()}
              >
                Research
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {user ? <NavDrawer user={user} /> : <AuthguardNavDrawer />}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
