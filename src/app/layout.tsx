import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "./global";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
        <GlobalStyles />
      </StyledComponentsRegistry>
    </html>
  );
}
