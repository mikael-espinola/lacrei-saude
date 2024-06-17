import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "./global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lacrei saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
        <GlobalStyles />
      </StyledComponentsRegistry>
    </html>
  );
}
