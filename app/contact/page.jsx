import Head from "next/head";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Scippra | Get Support or Ask Questions",

  description:
    "Contact Scippra for course enquiries, support, or partnerships. Our team is ready to help you start your journey in tech.",

  keywords: [
    "contact Scippra",
    "Scippra support",
    "Scippra tech courses enquiry",
    "IT training contact",
  ],

  alternates: {
    canonical: "https://www.scippra.com/contact",
  },

  openGraph: {
    title: "Contact Scippra",
    description:
      "Get in touch with Scippra to learn more about our tech training programs.",
    url: "https://www.scippra.com/contact",
    siteName: "Scippra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Scippra",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Scippra",
    description: "Reach out to Scippra for enquiries and support.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert("Message sent successfully");
    e.target.reset();
  } else {
    alert("Failed to send message");
  }
};

  return (
    <>
<div className=" bg-gray-50">
      <section className="text-center mt-10 px-6  ">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-950">
          Feel Free To Get In Touch
        </h2>
      </section>

<div className="flex gap-5 max-w-6xl mx-auto px-6 flex-col md:flex-row items-center">
      {/* CONTACT SECTION */}
<div className="max-w-2xl text-gray-700 mx-auto p-6 bg-white shadow-md rounded-md mt-10 mb-10 md:mb-20">

<h2 className="text-lg font-semibold text-gray-900 mb-6">
  Leave a message
</h2>


<ContactForm />

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
      <span>Mon – Sat, 9am – 6pm (WAT)</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
}






