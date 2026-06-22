import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InfraSphere Network | Infrastructure Intelligence for the Physical World",
  description:
    "InfraSphere Network is the infrastructure, energy systems, AI infrastructure and industrial technology platform of the TVK ecosystem, currently in research, development and pilot preparation stage.",
  keywords: [
    "infrastructure intelligence",
    "AI infrastructure",
    "energy infrastructure",
    "smart infrastructure",
    "industrial technology",
    "modular infrastructure",
    "data center infrastructure",
    "critical infrastructure technology",
    "infrastructure platform",
  ],
  openGraph: {
    title: "InfraSphere Network | Infrastructure Intelligence for the Physical World",
    description:
      "InfraSphere Network is the infrastructure, energy systems, AI infrastructure and industrial technology platform of the TVK ecosystem.",
    url: "https://infrasphere.network",
    siteName: "InfraSphere Network",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlex.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
