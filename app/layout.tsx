import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import UserContextProvider from "./providers/UserContextProvider";
import Appbar from "../components/custom/Appbar";
import { ToastProvider } from "@/components/ui/toast";

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
      </body>
    </html>
  );
}
