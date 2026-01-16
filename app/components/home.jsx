"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import FAQSection from "./faq";
import { motion } from "framer-motion";



const images = [
    '/change/two.png', 
    '/change/three.png', 
  ];

  const studentimages = [
    '/change/studentone.png', 
    '/change/studentthree.png', 
    '/change/studenttwo.png',  
  ];

const courses = [
  {
    id: 1,
    title: "DA with Python & SQL",
    desc: "Learn data analysis using Python, pandas, and SQL to explore data, uncover insights, and support better business decisions.",
    img: "/courses/one.png",
    content: "This comprehensive course covers data analysis fundamentals, including data cleaning, visualization, and querying. You'll work on real-world projects to analyze datasets from various industries, learning how to derive actionable insights that drive business strategies.",
    syllabus: [
      "Introduction to Data Analysis",
      "Python Basics for Data Analysis",
      "Working with Pandas and NumPy",
      "SQL Fundamentals and Advanced Queries",
      "Data Visualization with Matplotlib and Seaborn",
      "Statistical Analysis",
      "Capstone Project: Real-World Data Analysis"
    ],
    enrolled: 250,
    tutor: "Dr. Emily Chen",
    weeks: 8
  },
  {
    id: 2,
    title: "Machine Learning",
    desc: "Build predictive models using supervised and unsupervised learning techniques to solve practical problems with real data.",
    img: "/courses/two.png",
    content: "Dive into machine learning algorithms and their applications. From regression to neural networks, you'll implement models using scikit-learn and TensorFlow, focusing on model evaluation, feature engineering, and deployment.",
    syllabus: [
      "Machine Learning Fundamentals",
      "Supervised Learning: Regression and Classification",
      "Unsupervised Learning: Clustering and Dimensionality Reduction",
      "Model Evaluation and Hyperparameter Tuning",
      "Introduction to Deep Learning",
      "Ensemble Methods",
      "Final Project: ML Application Development"
    ],
    enrolled: 180,
    tutor: "Prof. Michael Rodriguez",
    weeks: 10
  },
  {
    id: 3,
    title: "Data Engineering",
    desc: "Design and manage data pipelines, databases, and ETL workflows to prepare reliable data for analytics and AI systems.",
    img: "/courses/three.png",
    content: "Learn to build scalable data infrastructure. This course covers data ingestion, transformation, and storage using tools like Apache Spark, Kafka, and cloud services, emphasizing best practices for data quality and efficiency.",
    syllabus: [
      "Data Engineering Overview",
      "Database Systems: SQL and NoSQL",
      "ETL Processes and Tools",
      "Big Data Technologies: Hadoop and Spark",
      "Data Pipelines with Airflow",
      "Cloud Data Engineering (AWS/GCP/Azure)",
      "Project: Building a Complete Data Pipeline"
    ],
    enrolled: 120,
    tutor: "Sarah Thompson",
    weeks: 12
  },
  {
    id: 4,
    title: "Visualization",
    desc: "Create compelling visual reports and interactive dashboards using modern tools to communicate insights clearly and drive decisions.",
    img: "/courses/four.png",
    content: "Master data storytelling through visualizations. You'll use Tableau, Power BI, and Python libraries to create interactive dashboards that transform complex data into understandable narratives for stakeholders.",
    syllabus: [
      "Principles of Data Visualization",
      "Tools Overview: Tableau and Power BI",
      "Chart Types and Best Practices",
      "Interactive Dashboard Design",
      "Advanced Visualization Techniques",
      "Python for Visualization: Plotly and Dash",
      "Capstone: Executive Dashboard Creation"
    ],
    enrolled: 300,
    tutor: "Alex Patel",
    weeks: 6
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    desc: "Explore AI foundations and learn to build intelligent applications using Python, automation techniques, and real-world datasets.",
    img: "/courses/five.png",
    content: "From AI basics to advanced applications, this course covers natural language processing, computer vision, and ethical AI. You'll build AI-powered apps using frameworks like Hugging Face and OpenCV.",
    syllabus: [
      "AI Fundamentals and History",
      "Python for AI Development",
      "Natural Language Processing",
      "Computer Vision Basics",
      "AI Ethics and Bias",
      "Building AI Applications",
      "Project: AI-Powered Solution"
    ],
    enrolled: 200,
    tutor: "Dr. Lisa Wong",
    weeks: 10
  },
  {
    id: 6,
    title: "Excel Mastery",
    desc: "Transform raw data into insights through advanced Excel techniques and Power BI dashboards that reveal trends for business impact.",
    img: "/courses/six.png",
    content: "Elevate your data skills with advanced Excel functions and Power BI. Learn to automate workflows, create dynamic reports, and perform complex analyses for business intelligence.",
    syllabus: [
      "Advanced Excel Functions and Formulas",
      "Data Modeling in Excel",
      "Power Query for Data Transformation",
      "Power BI Fundamentals",
      "DAX Language Mastery",
      "Creating Interactive Reports",
      "Final Project: Business Intelligence Dashboard"
    ],
    enrolled: 350,
    tutor: "Robert Klein",
    weeks: 7
  }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full bg-white">
<section>
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* IMAGE SLIDER */}
        <div className="relative rounded-xs w-full overflow-hidden shadow-2xl h-150"> {/* Set a fixed height for the container */}
          {/* Stacked images with fade transition */}
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Slideshow image"
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* TEXT ON IMAGE */}
          <div className="absolute inset-0 z-20 flex items-center text-center md:text-left justify-center md:justify-start">
            <div className="px-6 md:px-16 max-w-3xl">
              <span className="inline-block text-sm text-white font-medium bg-black/70 px-3 md:px-5 py-2 md:py-3 rounded-xl">
                ⭐ Trusted by 1000+ learners worldwide
              </span>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-4 text-white leading-tight max-w-30px">
                <motion.span
  initial={{ opacity: 0, x: -20 }}
  animate={{
    opacity: 1,
    x: 0,
    textShadow: [
      "0px 0px 0px rgba(255,255,255,0)",
      "0px 0px 12px rgba(255,180,180,0.8)",
      "0px 0px 0px rgba(255,255,255,0)"
    ],
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    textShadow: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  }}
  className="text-white-300 text-[2rem] md:text-[2.5rem] xl:text-[3rem] inline-block"
>
  Start Your Tech Journey
</motion.span>
 <br /> <span className='text-[2rem] md:text-[2.5rem] xl:text-[3rem]'>and</span>{" "}
                <span className="text-red-300 text-[2rem] md:text-[2.5rem] xl:text-[3rem]">Shape Your Future</span>
              </h1>

              <p className="text-gray-200 mt-4 max-w-lg">
                Industry-led IT courses crafted to help both beginners and professionals develop in-demand technology skills.
              </p>

              <div className="flex gap-4 mt-6 items-center justify-center md:justify-start">
                <Link href="/register">
                  <button className="border border-white text-white p-2 rounded-md hover:bg-white hover:text-red-600 transition">
                    Get Started
                  </button>
                </Link>

                <Link href="/#courses">
                  <div className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                    Explore Courses
                  </div>
                </Link>
              </div>
              
              <div className='hidden md:flex items-center gap-3'>
              <div className='flex mt-4'>
                {studentimages.map((studentimage) => (
                  <div key={studentimage.id}>
                  <Image 
                  src={studentimage}
                  alt='student image'
                  width={400}
                  height={200}
                  className='h-16 w-16 object-cover rounded-full'
                />
                </div>
                ))}
                </div>
                 <p className="text-gray-200 mt-4 max-w-sm">
                  Become one of our 1000+ students from around the world
              </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-8 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-start">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">About Scippra</h2>
            <p className="text-gray-600 mb-4">
              At Scippra, we make tech skills accessible to everyone. Our hands-on online courses and expert mentorship prepare learners for real-world success.
            </p>
            <p className="text-gray-600">
              Whether you're starting your tech journey or advancing your career, we provide the tools, knowledge, and support you need to thrive in today's digital world.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-70 md:h-78.5 xl:h-100 overflow-hidden">
            <img src="/home/four.png" alt="Person at computer" className="object-cover w-fit h-fill" />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-gray-50 px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Why Choose Scippra?</h2>
            <p className="text-center text-gray-600 mb-12">Discover what makes us the perfect choice for your tech learning journey.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "bi-lightbulb",
                  title: "Beginner Friendly",
                  desc: "Start from zero with courses designed for all skill levels.",
                },
                {
                  icon: "bi-person-workspace",
                  title: "Expert Instructors",
                  desc: "Learn from industry professionals with years of real-world experience.",
                },
                {
                  icon: "bi-clock",
                  title: "Flexible Access",
                  desc: "Study at your own pace with 24/7 access to course materials.",
                },
                {
                  icon: "bi-award",
                  title: "Certificates",
                  desc: "Earn industry-recognized certificates upon course completion.",
                },
                {
                  icon: "bi-briefcase",
                  title: "Career Support",
                  desc: "Get job placement assistance and expert career guidance.",
                },
                {
                  icon: "bi-people",
                  title: "Community Access",
                  desc: "Connect with fellow learners and grow your professional network.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="flex mb-3 justify-center md:justify-start">
                    <i className={`bi ${item.icon} text-3xl text-red-500`}></i>
                  </div>

                  <h3 className="font-semibold md:text-left text-black">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 md:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section>
      <h2 className="text-2xl font-bold text-center pt-5 text-black">Mode of Learning</h2>

        <div className="flex justify-center">
          <div className='flex flex-col md:flex-row w-full justify-center items-center gap-8 mt-1 p-8 max-w-5xl'>
            <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src="/home/classroom.png"
                    alt="classroom image"
                    width={400}
                    height={240}
                    className="w-full object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-black">Classroom Learning</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">Immerse yourself in our expert-led, interactive classes for a hands-on
                      learning experience that goes beyound tranditional methods.
                    </p>
                      <button className="w-full bg-red-700 text-white py-2.5 rounded">
                      Explore our courses <i className='bi bi-arrow-right ml-4 bg-white rounded-full p-1.5 text-indigo-950 font-bold'></i>
                    </button>

                  </div>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src="/home/online.png"
                    alt="online image"
                    width={400}
                    height={240}
                    className="w-full object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-black">Online Learning</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">Discover the convenience of online learnning with our 
                      courses, featuring interactive sessions and instant access to valuable resources.
                    </p>
                    <button className="w-full bg-indigo-950 text-white py-2.5 rounded">
                      Explore our courses <i className='bi bi-arrow-right ml-4 bg-white rounded-full p-1.5 text-indigo-950 font-bold'></i>
                    </button>
                  </div>
                </div>
                </div>
        </div>
</section>


        {/* FEATURED COURSES */}
        <section id="courses" className="px-8 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Featured Courses</h2>
          <p className="text-center text-gray-600 mb-10">Start your learning journey with our most popular courses</p>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-lg shadow overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src={course.img}
                    alt={course.title}
                    width={400}
                    height={240}
                    className="w-full h-40 object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-black">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.desc}</p>
                    <button className="w-full bg-red-500 text-white py-2 rounded">
                      Start Learning
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            {/* <button className="text-emerald-500 border border-emerald-400 p-1.5 rounded-[5px]">See More</button> */}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-50 px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">How It Works</h2>
            <p className="text-center text-gray-600 mb-12">Your journey to mastering new skills in 4 simple steps</p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: "bi-search",
                  title: "Choose a Course",
                  desc: "Browse our perfect course for you.",
                },
                {
                  icon: "bi-laptop",
                  title: "Learn Online",
                  desc: "Interactive lessons and hands-on projects.",
                },
                {
                  icon: "bi-award",
                  title: "Get Certified",
                  desc: "Showcase your new skills to employers.",
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Apply Your Skills",
                  desc: "Advance your career or start new projects.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="bg-red-500 w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl mb-4">
                    <i className={`bi ${step.icon} text-white`}></i>
                  </div>

                  <h3 className="font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-8 py-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12">Real success stories from our learning community</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div>
              {[
                {
                  name: "Mary Vivian",
                  role: "Business Analyst",
                  quote:
                    "Scippra completely transformed my career. The Python projects gave me real-world experience. Within 3 months of completing the course, I landed my dream job as a Data Analyst!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/four.png",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-indigo-950 shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white mb-4 md:max-w-4xl">"{testimonial.quote}"</p>
                  <p className="text-yellow-500">{testimonial.stars}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Thompson Mike",
                  role: "Web Developer",
                  quote: "The Web Development Bootcamp exceeded my expectations. Great instructors and excellent support!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/two.png",
                },
                {
                  name: "Abigail Johnson",
                  role: "Business Analyst",
                  quote: "The Excel course helped me create amazing dashboards. My manager was impressed with my new skills!",
                  stars: "⭐⭐⭐⭐⭐",
                  avatar: "/academy/three.png",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white shadow-md p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h4 className="font-semibold text-black">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
                  <p className="text-yellow-500">{testimonial.stars}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </>
  );
}