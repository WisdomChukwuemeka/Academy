"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const[showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
        
        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* LEFT SIDE - Branding & Welcome */}
          <div className="lg:w-5/12 bg-gradient-to-br from-indigo-950 to-indigo-900 text-white p-10 lg:p-14 flex flex-col justify-center relative">
            {/* Optional decorative subtle background shapes could go here */}
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Welcome Back!
              </h1>
              <p className="text-indigo-200 text-base lg:text-lg leading-relaxed">
                Log in to access your dashboard and continue your learning journey with Scippra.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
            
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Login to your account
              </h2>
              <p className="text-gray-500 mb-8">
                Please enter your credentials to sign in.
              </p>

              <form className="flex flex-col gap-5 w-full">
                
                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Password with show/hide */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    {/* Added a standard forgot password layout (Optional but highly recommended) */}
                    <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <div className="relative flex items-center">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-transparent transition-all pr-12"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none p-1 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-lg`}></i>
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-indigo-950 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-950/30 transition-all shadow-md hover:shadow-lg flex justify-center items-center"
                >
                  Sign In
                </button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link 
                  href="/register" 
                  className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-all"
                >
                  Sign up for free
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}