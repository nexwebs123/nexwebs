import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { Header } from "@/components/shared/navbar";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexWebs - B2B Software Service Provider",
  description:
    "Scale your business with NexWebs - a trusted B2B software service provider delivering SaaS, enterprise software, and digital transformation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
