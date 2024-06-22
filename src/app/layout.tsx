import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "./global";
import Header from "@/components/header/Header";

import Footer from "@/components/footer/Footer";
import Provider from "@/themeProvider/ThemeProvider";
import ButtonProvider from "@/contextApi/buttonContorls/ButtonControls";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ButtonProvider>
            <Provider>
              <Header />
              {children}
              <Footer />
              <GlobalStyles />
            </Provider>
          </ButtonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
