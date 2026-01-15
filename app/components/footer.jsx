"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white px-8 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Scippra</h3>
            <p className="text-sm">Empowering learners worldwide with expert-led IT courses and hands-on training for real-world success.</p>
          <div className="flex gap-4 mt-2">
            {
          [
            { icon: "bi-facebook", url:"https://www.facebook.com/scippra" },
            { icon: "bi-instagram", url:"https://www.instagram.com/scippra/" },
            { icon: "bi-twitter-x" },
            { icon: "bi-linkedin", url:"https://www.linkedin.com/company/scippra"  }
          ].map((item, i) => {
            return (
              <div key={i} className="text-white text-xl hover:text-red-300">
                <Link href={item.url || "#"}>
                <i className={`bi ${item.icon} text-xl`}></i>
                </Link>
              </div>
              );
            })
          }
          </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/#courses" className="hover:underline">Courses</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
<div>
  <h4 
    id="contact"
    className="font-semibold mb-4"
  >
    Contact Info
  </h4>

  <div className="flex flex-col gap-4 mt-2">
    {[
      { icon: "bi-envelope", info: "scippra@gmail.com", link: "mailto:scippra@gmail.com" },
      { 
        icon: "bi-telephone", 
        info: "+234 810 003 2571",
        link: "https://wa.me/2348100032571" // WhatsApp link (remove spaces + add country code)
      },
    ].map((item, i) => {
      return (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-red-300 flex items-center"
        >
          <i className={`bi ${item.icon} text-xl`}></i>
          <span className="ml-2 text-sm">{item.info}</span>
        </a>
      );
    })}
  </div>
  <div>
    <Link href="/maptrack">
    <div className="mt-4 flex gap-3 hover:text-red-300">
      <i className="bi bi-map" ></i>
      <h1>Location</h1>
    </div>
    </Link>
  </div>
</div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
            <input type="email" placeholder="Your email" className="w-full bg-orange-800 p-2 rounded-md mb-2 text-white placeholder-gray-400" />
            <button className="w-full bg-blue-500 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 flex justify-center items-center text-sm border-t pt-4 border-black/70">
          <p>© 2026 Scippra All rights reserved.</p>
        </div>
      </footer>
  );
}
