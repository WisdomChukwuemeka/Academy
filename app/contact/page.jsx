import Head from "next/head";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Scippra | Get Support or Ask Questions",
  description: "Contact Scippra for course enquiries, support, or partnerships...",
  // ... (keep the rest of your metadata exactly as is)
};

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <section className="text-center mt-10 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-950">
          Feel Free To Get In Touch
        </h2>
      </section>

      <div className="flex gap-5 max-w-6xl mx-auto px-6 flex-col md:flex-row items-center">
        {/* CONTACT FORM SECTION */}
        <div className="max-w-2xl text-gray-700 mx-auto p-6 bg-white shadow-md rounded-md mt-10 mb-10 md:mb-20 w-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Leave a message
          </h2>
          {/* Form component imported here */}
          <ContactForm />
        </div>

        {/* RIGHT INFO SECTION */}
        <div className="hidden xl:flex flex-col justify-center max-w-md pl-5">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Don't hesitate to contact us
          </h3>
          <p className="text-gray-600 leading-relaxed mb-10">
            We'd love to hear from you! Whether you have a question or feedback,
            feel free to reach out. We'll get back to you as soon as we can.
          </p>
          
          <div className="flex flex-col gap-6 text-sm text-gray-700">
            {/* Info details exactly as you had them... */}
            <div className="flex flex-col gap-6 text-sm text-gray-700">
    {/* Email */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
        <i className="bi bi-envelope text-red-500 text-lg"></i>
      </span>
      <span>info@scippra.com</span>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
        <i className="bi bi-geo-alt text-red-500 text-lg"></i>
      </span>
      <span>Remote / Global</span>
    </div>

    {/* Time */}
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
        <i className="bi bi-clock text-red-500 text-lg"></i>
      </span>
      <span>Mon - Fri, 9am - 5pm (WAT)</span>
    </div>
  </div>
            {/* ... other info divs ... */}
          </div>
        </div>
      </div>
    </div>
  );
}