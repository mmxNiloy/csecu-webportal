"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icons from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { login } from "../actions/login";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const fd = new FormData(e.currentTarget);

      setLoading(true);

      const response = await login(fd);

      if (!response) {
        toast({
          title: "Login Failed!",
          description: "Invalid Credeitials. Please try again.",
          variant: "destructive",
        });
      } else {
        router.replace("/");
      }

      setLoading(false);
    },
    [router, toast]
  );

  return (
    <div className="flex flex-grow items-center justify-center w-full">
      <Card className="w-fit h-fit">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Gain access to all of our services by loggin into your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="flex flex-col gap-2">
            <div className="w-full grid grid-cols-3 gap-2 border-b">
              <Link href={"/login"} passHref>
                <div
                  className={cn(
                    "text-center p-2 text-sm font-semibold cursor-pointer",
                    pathname === "/login" ? "border-b-2 border-purple-500" : ""
                  )}
                >
                  Student
                </div>
              </Link>

              <Link href={"/login/teacher"} passHref>
                <div
                  className={cn(
                    "text-center p-2 text-sm font-semibold cursor-pointer",
                    pathname === "/login/teacher"
                      ? "border-b-2 border-purple-500"
                      : ""
                  )}
                >
                  Teacher
                </div>
              </Link>

              <Link href={"/login/staff"} passHref>
                <div
                  className={cn(
                    "text-center p-2 text-sm font-semibold cursor-pointer",
                    pathname === "/login/staff"
                      ? "border-b-2 border-purple-500"
                      : ""
                  )}
                >
                  Staff
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-col gap-4">{children}</div>
          </CardContent>

          <CardFooter className="flex flex-col gap-1 md:gap-2">
            <Button
              disabled={loading}
              type="submit"
              variant={"outline"}
              className="w-full gap-1 md:gap-2 items-center"
            >
              {loading ? (
                <Icons.spinner className="animate-spin ease-in-out" />
              ) : (
                <Icons.login />
              )}
              Login
            </Button>

            {/* <p>Don&apos;t have an account?</p>
        <Link href="/join-us" passHref className="w-full">
          <Button
            type="button"
            variant={"outline"}
            className="w-full gap-1 md:gap-2 items-center"
          >
            <Icons.badgeCheck />
            Join us
          </Button>
        </Link> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
