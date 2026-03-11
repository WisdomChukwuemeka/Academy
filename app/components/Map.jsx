"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet default marker icon paths (essential in Next.js)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function ContactMap() {
  const position = [4.9049134, 7.017084]; // Port Harcourt coordinates

  // Contact information
  const contactInfo = {
    address:
      "#2 Salvation Close off Wamadi Asonye Elder Benjamin Street, Rumpokwu, Eneka Road, Port Harcourt, Rivers State, Nigeria",
    phone: "+234 905 998 7650",
    email: "info@scippra.com",
    whatsapp: "+234 905 998 7650",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Contact Info Card - Above the Map */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-xl mt-1">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Our Location</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-xl mt-1">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-gray-600 hover:text-red-600 transition"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-xl mt-1">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-red-600 transition"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-xl mt-1">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition flex items-center gap-2"
              >
                {contactInfo.whatsapp}
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Chat Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Map */}
      <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "500px", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup className="font-sans">
              <div className="text-base">
                <strong className="block text-lg mb-1">Scippra Headquarters</strong>
                <p className="text-gray-700">{contactInfo.address}</p>
                <div className="mt-3 text-sm text-gray-600">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-red-600"
                  >
                    {contactInfo.phone}
                  </a>
                  {" • "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-red-600"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}