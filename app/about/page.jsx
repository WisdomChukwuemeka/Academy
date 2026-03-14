import Head from "next/head";
import Image from "next/image";
import AboutImage from "../../public/about/one.png";
import AboutImageTwo from "../../public/about/two.png";

export const metadata = {
  title: "About Scippra | Learn Data Analytics, AI & Software Development",

  description:
    "Discover Scippra’s mission to empower learners with practical skills in data analytics, machine learning, artificial intelligence, and software development.",

  keywords:[
    "about Scippra",
    "Scippra tech academy",
    "learn data analytics",
    "AI learning platform",
    "software development training",
  ],

  alternates: {
    canonical: "https://www.scippra.com/about",
  },

  openGraph: {
    title: "About Scippra | Our Mission & Vision",
    description:
      "Learn how Scippra helps professionals build real-world skills in data analytics, AI and software development.",
    url: "https://www.scippra.com/about",
    siteName: "Scippra",
    images:[
      {
        url: "/about/one.png",
        width: 1200,
        height: 630,
        alt: "Students learning at Scippra",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Scippra",
    description:
      "Learn about Scippra’s mission to teach modern digital skills and technology.",
    images: ["/about/one.png"],
  },
};

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>About Scippra | Learn Data & AI Skills</title>
        <meta
          name="description"
          content="Scippra offers hands-on training in Data Analysis, Machine Learning, and AI to help you launch a career in tech."
        />
      </Head>

      {/* HERO SECTION */}
      <header className="relative bg-linear-to-b from-indigo-100/60 to-gray-50 pt-20 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 tracking-tight mb-4">
            About <span className="text-red-600">Scippra</span>
          </h1>
          <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Home</span>
            <span className="text-gray-300">/</span>
            <span className="text-indigo-900">Our Mission</span>
          </p>
        </div>
      </header>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-1 gap-12 lg:gap-20 pt-5 pb-20 px-6 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 w-full h-full min-h-75">
          <Image
            src={AboutImage}
            alt={"Students collaborating at Scippra"}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
            placeholder="blur"
            blurDataURL="/about/placeholder.png"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-indigo-950 mb-8">
            Who We Are
          </h2>
          <div className="text-base text-gray-600 leading-relaxed flex flex-col gap-8">
            <p className="text-lg font-medium text-gray-800">
              Scippra is a digital learning hub dedicated to teaching digital skills.
            </p>
            
            <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left">
              <h2 className="text-xl font-bold text-indigo-950 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-sm">
                  <i className="bi bi-bullseye"></i>
                </span>
                Our Mission
              </h2>
              <p className="text-gray-600">
                is to empower early and mid level professionals with practical, industry relevant skills required to succeed in today's data focused world.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left">
              <h2 className="text-xl font-bold text-indigo-950 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm">
                  <i className="bi bi-eye"></i>
                </span>
                Our Vision
              </h2>
              <p className="text-gray-600">
                is to grow into a global platform where individuals can acquire meaningful digital and practical skill and connect those skills to real world opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS YOU WILL LEARN */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-indigo-950 mb-4">
            Tools You Will Learn
          </h2>
          <p className="text-gray-500">
            Master the industry standard software and frameworks required to thrive in the modern tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm text-gray-700">
          {[
            { icon: "bi-box-seam", label: "Python, Jupyter, Google Colab" },
            { icon: "bi-code-slash", label: "VS Code, Pandas, NumPy" },
            { icon: "bi-bezier", label: "Scikit-Learn, Matplotlib, Seaborn" },
            { icon: "bi-palette", label: "Power BI, Tableau, Excel" },
            { icon: "bi-database", label: "SQL (PostgreSQL / MySQL)" },
            { icon: "bi-git", label: "Git & GitHub" },
            { icon: "bi-cpu", label: "TensorFlow, PyTorch" },
            { icon: "bi-cloud", label: "AWS / GCP (Basics)" },
            { icon: "bi-diagram-3", label: "Flask, FastAPI, Streamlit" },
          ].map((tool, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-500 rounded-lg shrink-0 text-xl">
                <i className={`bi ${tool.icon}`}></i>
              </div>
              <span className="font-medium text-gray-800 text-base">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-sm">
          {[
            { value: "50+", label: "Hours of Content" },
            { value: "1000+", label: "Active Students" },
            { value: "100%", label: "Practical Projects" },
            { value: "24/7", label: "Mentor Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/5"
            >
              <h3 className="text-4xl lg:text-5xl font-extrabold text-indigo-950 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-950">
            Meet Your Instructor
          </h2>
        </div>

        <div className="bg-white grid md:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Text Content */}
          <div className="p-10 lg:p-16 flex flex-col justify-center bg-indigo-950 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Mike Johnson
            </h3>
            <p className="text-sm font-semibold text-red-400 mb-6 uppercase tracking-wider">
              Certified Web Developer & Software Engineer
            </p>
            <p className="text-lg text-indigo-100 leading-relaxed">
              Mike brings over 5 years of hands on industry and teaching experience,
              with a strong focus on modern web development. He is passionate about
              breaking down complex concepts into practical, real-world solutions
              that help learners build scalable and user-friendly applications.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative w-full min-h-100 lg:min-h-125">
            <Image
              src={AboutImageTwo}
              alt={"Instructor Mike Johnson"}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
}