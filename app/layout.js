import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "./components/header";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.erikodxit.com"),

  title: {
    default: "ErikodxIT | Learn IT Skills, Data & AI Courses Online",
    template: "%s | ErikodxIT",
  },

  description:
    "ErikodxIT is a leading online learning platform offering expert-led IT courses in data analysis, machine learning, AI, Power BI, and software development. Learn in-demand tech skills and advance your career.",

  keywords: [
    "ErikodxIT",
    "Online IT Courses",
    "Tech Skills Training",
    "Data Analysis Courses",
    "Machine Learning Training",
    "Artificial Intelligence Courses",
    "Power BI Training",
    "Python Courses",
    "Career Growth",
    "Learn Tech Online",
  ],

  authors: [{ name: "ErikodxIT" }],
  creator: "ErikodxIT",
  publisher: "ErikodxIT",

  alternates: {
    canonical: "https://www.erikodxit.com",
  },

  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/logo.png", type: "image/png" },
  ],
  apple: "/logo.png",
},


openGraph: {
    title: "ErikodxIT | Master In-Demand Tech Skills Online",
    description:
      "Unlock your potential with expert-led IT courses in data, AI, and software development.",
    url: "https://www.erikodxit.com",
    siteName: "ErikodxIT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ErikodxIT Online Learning Platform",
      },
    ],
  },

 twitter: {
  card: "summary_large_image",
  title: "ErikodxIT | Master In-Demand Tech Skills Online",
  description:
    "Expert-led IT courses designed to help beginners and professionals build real-world tech skills.",
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
        <Header />
            <main className="grow w-full bg-zinc-50">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        <Footer />
      </body>
    </html>
  );
}
