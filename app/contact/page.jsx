import Head from "next/head";

export default function Contact() {
  return (
    <>
<div className=" bg-gray-50">
      <section className="text-center mt-10 px-6  ">
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600">
          Feel Free To Get In Touch
        </h2>
      </section>

<div className="flex gap-5 max-w-6xl mx-auto px-6 flex-col md:flex-row items-center">
      {/* CONTACT SECTION */}
<div className="max-w-2xl text-gray-700 mx-auto p-6 bg-white shadow-md rounded-md mt-10 mb-10 md:mb-20">

<h2 className="text-lg font-semibold text-gray-900 mb-6">
  Leave a message
</h2>


       <form className="flex flex-col gap-6">
  {/* Name & Email */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/2 flex flex-col gap-1">
      <label htmlFor="name" className="text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div className="w-full md:w-1/2 flex flex-col gap-1">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  </div>

  {/* Subject */}
  <div className="flex flex-col gap-1">
    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
      Subject
    </label>
    <input
      id="subject"
      type="text"
      placeholder="Subject"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col gap-1">
    <label htmlFor="message" className="text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      rows="6"
      placeholder="Your Message"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    ></textarea>
  </div>

  {/* Privacy Policy */}
  <label className="flex items-center gap-2 text-sm text-gray-700">
    <input type="checkbox" className="accent-emerald-500" />
    I agree to the privacy policy
  </label>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition text-md md:text-md xl:text-xl"
  >
    Send Message
  </button>
</form>

        </div>

{/* RIGHT INFO */}
<div className="hidden xl:flex flex-col justify-center max-w-md pl-5">
  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
    Don't hesitate to contact us
  </h3>

  <p className="text-gray-600 leading-relaxed mb-10">
    We'd love to hear from you! Whether you have a question or feedback,
    feel free to reach out. We'll get back to you as soon as we can.
  </p>

  <div className="flex flex-col gap-6 text-sm text-gray-700">
    {/* Email */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
        <i className="bi bi-envelope text-emerald-500 text-lg"></i>
      </span>
      <span>support@erikodxit.com</span>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
        <i className="bi bi-geo-alt text-emerald-500 text-lg"></i>
      </span>
      <span>Remote / Global</span>
    </div>

    {/* Time */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
        <i className="bi bi-clock text-emerald-500 text-lg"></i>
      </span>
      <span>Mon – Sat, 9am – 6pm (WAT)</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
}






