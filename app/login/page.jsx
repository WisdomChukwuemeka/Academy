"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="min-h-screen py-15 flex items-center justify-center bg-teal-50 px-4">
        <div className="flex flex-col w-full max-w-4xl md:mx-8 bg-white rounded-lg shadow-lg overflow-hidden xl:flex-row">

          {/* LEFT SIDE */}
          <div className="flex grow md:w-full bg-indigo-950 text-white p-10 flex-col justify-center">
            <h1 className="text-xl md:text-3xl text-center font-semibold mb-4">
              Welcome Back
            </h1>
            <p className="text-sm md:text-2xl text-center leading-relaxed text-emerald-100">
              Login to access your dashboard, continue learning with Scippra.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grow md:w-full p-8 md:p-10 flex flex-col justify-between min-h-full">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
              Login to your account
            </h2>

            <form className="flex flex-col gap-6 w-full px-4 md:px-8 py-3.5">
              
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xl text-gray-600">Email Address</label>
                <input
                  type="email"
              className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password with show/hide */}
              <div className="flex flex-col gap-1">
                <label className="text-xl text-gray-600">Password</label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
              className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-2xl`}></i>
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-xl md:text-2xl bg-indigo-950 text-white py-3 rounded-md font-medium 
                hover:bg-indigo-800 transition"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-sm md:text-xl text-center text-gray-600">
              Don’t have an account?{" "}
              <Link href="/register" className="text-red-600 font-medium hover:underline">
                Sign up
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}