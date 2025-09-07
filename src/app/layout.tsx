import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { Header } from "@/components/shared/navbar";
import { GridBackground } from "@/components/grid-background";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/context/query-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} antialiased dark:bg-black/[0.96]`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative z-10">
              <Header />
              {children}
              <SpeedInsights />
              <Analytics />
              <GridBackground />
              <Toaster />
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
