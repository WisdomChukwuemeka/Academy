import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Scippra | Learn Data & AI Skills</title>
        <meta
          name="description"
          content="Scippra offers hands-on training in Data Analysis, Machine Learning, and AI to help you launch a career in tech."
        />
      </Head>

      {/* HERO SECTION */}
      <header className="text-center pt-12 pb-6 px-6 bg-indigo-50">
        <h1 className="text-3xl font-semibold text-red-600">
          About Scippra
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Home <span className="mx-1">/</span> Our Mission
        </p>
      </header>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6 items-center">
        <Image
        src="/about/one.png"
        alt="Students learning at Scippra"
        width={600}
        height={400}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL="/about/placeholder.png"
      />

        <div className=" text-center md:text-left">
        <h2 className="text-xl text-center font-semibold text-black mb-3">
        Who We Are
      </h2>
      <div className="text-sm text-center text-gray-700 leading-relaxed flex flex-col gap-4">
        <p> Scippra is a digital learning hub dedicated to teaching digital skills.</p>
        <div className="flex flex-col gap-2"> <h2 className="text-xl font-semibold text-black">Our mission</h2> is to empower early- and mid-level professionals with practical, industry-relevant skills required to succeed in today’s data-focused world.</div>
        <div>
          <h2 className="text-xl font-semibold text-black">Our vision</h2> is to grow into a global platform where individuals can acquire meaningful digital and practical skill and connect those skills to real-world opportunities.
        </div>
      </div>

        </div>
      </section>

      {/* TOOLS YOU WILL LEARN */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-xl font-semibold text-center text-black mb-8">
          Tools You Will Learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-gray-700">
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
            <div key={i} className="flex items-center gap-3 justify-center text-start md:justify-start">
              <i className={`bi ${tool.icon} text-red-500 text-lg`}></i>
              {tool.label}
            </div>
          ))}
        </div>
      </section>

{/* STATS */}
<section className="max-w-6xl mx-auto py-16 px-6">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
    {[
      { value: "50+", label: "Hours of Content" },
      { value: "1000+", label: "Active Students" },
      { value: "100%", label: "Practical Projects" },
      { value: "24/7", label: "Mentor Support" },
    ].map((stat, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-sm p-6
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 hover:shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-red-600 mb-1">
          {stat.value}
        </h3>
        <p className="text-gray-700">{stat.label}</p>
      </div>
    ))}
  </div>
</section>

      {/* INSTRUCTOR */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-center font-semibold text-xl mb-10 text-black">
          Meet Your Instructor
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center text-xl">
          <div className="bg-teal-50 p-6 rounded-lg">
          <h3 className="text-xl text-center font-semibold text-red-600">
            Mike Johnson
          </h3>
          <p className="text-xs text-center text-gray-500 mb-3">
            Certified Web Developer & Software Engineer
          </p>
          <p className="text-md text-left text-gray-700 leading-relaxed">
            Mike brings over 5 years of hands-on industry and teaching experience,
            with a strong focus on modern web development. He is passionate about
            breaking down complex concepts into practical, real-world solutions
            that help learners build scalable and user-friendly applications.
          </p>
        </div>


<div className="relative w-full h-150 md:h-110">
  <Image
  src="/about/two.png"
  alt="Instructor Erik Odinaka"
  fill
  className="rounded-lg object-cover"
  priority
/>

</div>


        </div>
      </section>
    </>
  );
}
