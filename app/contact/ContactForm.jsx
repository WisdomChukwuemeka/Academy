"use client";

export default function ContactForm() {

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
      headers: {
        "Content-Type": "application/json",
      },
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <div className="flex flex-col md:flex-row gap-4">

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-md"
        />

      </div>

      <input
        name="subject"
        type="text"
        placeholder="Subject"
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-indigo-950 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition"
      >
        Send Message
      </button>

    </form>
  );
}