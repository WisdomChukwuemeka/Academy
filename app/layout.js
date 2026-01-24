import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "./components/header";
import Footer from "./components/footer";
import PageLoaderWrapper from "./components/pageloaderwrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.Scippra.com"),

  title: {
    default: "Scippra | Online IT, Data & AI Skill Development",
    template: "%s | Scippra",
  },

  description:
    "Scippra is a modern e-learning platform delivering industry-focused IT training in data analytics, machine learning, artificial intelligence, Power BI, and software engineering. Gain practical, career-ready tech expertise.",

  keywords: [
  // Brand-focused
  "Scippra",
  "Scippra online courses",
  "Scippra IT training",
  "Scippra tech academy",
  "Scippra learning platform",

  // Core search intent
  "online IT courses",
  "learn IT skills online",
  "technology training platform",
  "professional tech courses",

  // Data & AI
  "data analysis courses online",
  "data analytics training",
  "machine learning courses",
  "artificial intelligence courses",
  "AI training online",

  // Software & tools
  "software development courses",
  "web development training",
  "Python programming courses",
  "Power BI training online",

  // Career-focused
  "tech skills for jobs",
  "career-focused IT training",
  "digital skills learning platform",
  "learn tech skills online",
],


  authors: [{ name: "Scippra" }],
  creator: "Scippra",
  publisher: "Scippra",

  alternates: {
    canonical: "https://www.Scippra.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "Scippra | Build High-Demand Technology Skills",
    description:
      "Advance your tech career through professionally curated courses in data science, AI, and software development.",
    url: "https://www.Scippra.com",
    siteName: "Scippra",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scippra Digital Learning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scippra | Build High-Demand Technology Skills",
    description:
      "Professionally guided IT training crafted to equip learners with practical, real-world technology skills.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* <PageLoaderWrapper> */}
        <Header />
            <main className="grow w-full bg-zinc-50">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        <Footer />
        {/* </PageLoaderWrapper> */}
      </body>
    </html>
  );
}
