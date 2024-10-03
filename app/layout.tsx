import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import UserContextProvider from "./providers/UserContextProvider";
import Appbar from "../components/custom/Appbar";
import { ToastProvider } from "@/components/ui/toast";
import { cookies } from "next/headers";
import { User } from "@/util/types";
import Footer from "@/components/custom/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSECU | Web Portal",
  description:
    "The official web portal for the Department of Computer Science and Engineering, Univeristy of Chittagong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const userCookie = cookies().get(process.env.USER_COOKIE_KEY!);
  // var user: User | undefined = undefined;
  // try {
  //   const apiRes = await fetch(`${process.env.API_BASE}/user`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${userCookie?.value}`,
  //     },
  //   });

  //   if (apiRes.ok) {
  //     const res = await apiRes.json();
  //     console.log("Appbar.tsx > User info found >", res);
  //     user = res as User;
  //   } else {
  //     console.log("Appbar.tsx > User info not found >", await apiRes.json());
  //     user = undefined;
  //   }
  // } catch (err) {
  //   console.error("Appbar.tsx > Failed to parse user cookie", err);
  //   user = undefined;
  // }

  return (
    <html lang="en">
      <body
        className={nunito.className}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <ThemeProvider defaultTheme="light" attribute="class">
          {/* <UserContextProvider> */}
          <Appbar />
          <main className="container flex flex-col flex-grow">{children}</main>
          {/* </UserContextProvider> */}
          <ToastProvider />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
