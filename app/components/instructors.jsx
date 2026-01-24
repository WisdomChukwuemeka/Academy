import { useEffect, useState, useRef } from 'react';
import { instructor } from '../localAPI/api';

export default function Instructorpage() {
  const [instructors, setInstructors] = useState([]);
  const scrollRef = useRef(null);


  useEffect(() => {
    setInstructors(instructor);
  }, []);

  const scrollLeft = () => {
  scrollRef.current.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
};

const scrollRight = () => {
  scrollRef.current.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
};


  return (
    <>
      {/* Instructors Section */}
      <section className="py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div className="max-w-3xl pt-6">
              <div className="flex justify-center md:justify-start">
            <span className="text-gray-600 text-sm uppercase font-semibold tracking-wide flex justify-center md:justify-start items-center bg-red-100 w-fit h-fit rounded-md p-1.5">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Distinguished Instructors
            </span>
            </div>

            <h1 className="text-indigo-700 text-3xl text-center md:text-left md:text-5xl font-bold mt-4 leading-tight">
                Learn from the best
            </h1>

            <p className="text-gray-600 text-lg mt-3 text-center md:text-left">
                Our instructors are rigorously vetted professionals with extensive experience building
                scalable products, platforms, and systems used across modern industries.
            </p>
            </div>

            
          </div>

          <div className="flex justify-center md:justify-end">
          <button className="text-gray-600 px-6 text-right rounded-full border border-white hover:bg-white hover:text-red-500">Apply to Teach →</button>
          </div>

          {/* Instructor Cards Carousel (horizontal scroll) */}
            <div className="relative">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scroll-smooth"
            >
                {instructor.map((inst) => (
                <div
                    key={inst.id}
                    className="bg-white rounded-3xl shadow-md w-64 shrink-0 overflow-hidden transform transition-all hover:scale-105"
                >
                    <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-72 object-cover rounded-t-3xl"
                    />
                    <div className="p-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                        ★ Verified
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">{inst.name}</h2>
                    <p className="text-black text-bold text-sm">{inst.role}</p>
                    <p className="text-gray-600 text-sm">at {inst.company}</p>
                    <div className="flex items-center mt-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <p className="text-gray-500 text-sm">
                        {inst.location} • {inst.exp}
                        </p>
                    </div>
                    </div>
                </div>
                    ))}
                </div>

        {/* ✅ Buttons OUTSIDE the scroll container */}
        <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 text-orange-500 p-2 rounded-full hover:bg-white z-10"
        >
            &lt;
        </button>

        <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 text-orange-500 p-2 rounded-full hover:bg-white z-10"
        >
            &gt;
        </button>
        </div>

        </div>
      </section>
      </>
  );
}