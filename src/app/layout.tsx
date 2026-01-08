import type { Metadata } from "next";
import {
  DotGothic16,
  Geist,
  Geist_Mono,
  Manrope,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Globals/Navbar";
import Footer from "@/components/Globals/footer";
import ContactIcon from "@/features/Contact/ContactIcon";
import LoaderOverlay from "@/features/LoaderOverlay";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import AccentWrapper from "@/Wrapper/AccentWrapper";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DotGothic = DotGothic16({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
});

const manRope = Manrope({
  variable: "--font-man-rope",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bishesh Tuladhar | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer showcasing projects in web development, mobile apps, and cloud deployment. Explore my portfolio, skills, and experience.",
  keywords: ["portfolio", "developer", "web development", "full stack"],
  metadataBase: new URL("https://bisheshxx.vercel.app/"),
  // robots: { canonical: "https://bisheshxx.vercel.app/" },
  openGraph: {
    title: "Bishesh Tuladhar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in web development, mobile apps, and cloud deployment. Explore my projects, skills, and experience.",
    type: "website",
    url: "https://bisheshxx.vercel.app/",
    images: [
      {
        url: "/profile-bishesh.png",
        width: 1200,
        height: 630,
        alt: "Bishesh Tuladhar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishesh Tuladhar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in web development, mobile apps, and cloud deployment. Explore my projects, skills, and experience.",
    creator: "@bisheshxx",
    images: "/profile-bishesh.png",
  },
  alternates: {
    canonical: "https://bisheshxx.vercel.app/",
  },
  // robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${DotGothic.variable} ${manRope.variable} ${montserrat.variable} antialiased md:w-[767px] mx-auto font-montserrat relative w-full`}
      >
        <ThemeProvider>
          <AccentWrapper>
            <Navbar />
            {children}
            <Footer />
            <ContactIcon />
            <LoaderOverlay />
            <Analytics />
          </AccentWrapper>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bishesh Tuladhar",
              url: "https://bisheshxx.vercel.app/",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://www.linkedin.com/in/bishesh-tuladhar-9a3888193/",
                "https://github.com/Bisheshxx",
              ],
              image: "https://bisheshxx.vercel.app/profile-bishesh.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
