"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AuthAPI } from "../services/api"; // Adjust path
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // null = loading/not checked, false = not logged in, object = logged in
  const [loadingAuth, setLoadingAuth] = useState(true);
  const menuRef = useRef(null);
  

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await AuthAPI.me();
        setUser(response.data); // { id, full_name, email, role, is_active }
      } catch (error) {
        // 401 or any error = not logged in
        setUser(false);
      } finally {
        setLoadingAuth(false);
      }
    };

    checkAuth();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await AuthAPI.logout();
      toast.success("Logged out successfully");
      router.push('/login');
      setUser(false);
      // Optional: redirect
      // window.location.href = "/";
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#courses", label: "Courses" },
    { href: "/about", label: "About" },
    {href: "/jobs", label: "Jobs"},
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="relative bg-white shadow-sm z-50">
        <header>
          <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col leading-tight">
                <h1 className="text-xl font-bold text-red-600">
                  Scip<span className="text-indigo-950">pra</span>
                </h1>
                <span className="text-[10px] text-gray-500 italic">
                  learn, create, build
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-6">
              <ul className="hidden md:flex gap-6 text-gray-600">
                {navLinks.map((link) => (
                  <li key={link.href} className="li-hover">
                    <Link href={link.href} className="block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center gap-3">
                {user ? (
                  <>
                    {/* Optional: Show user name/email */}
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition"
                    >
                      Log In
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="md:hidden text-black relative z-40"
              >
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
  {isOpen && (
    <motion.div
      ref={menuRef}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white shadow-lg flex flex-col py-10 md:hidden z-50"
    >

            <ul className="flex flex-col text-center gap-4 text-gray-600 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="hover:text-red-500 block py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Auth */}
            <div className="flex flex-col gap-3 w-full px-8">
              
              {user ? (
                <>
                  
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={closeMenu}>
                    <button className="w-full px-4 py-2 border border-red-500 text-red-500 rounded">
                      Log In
                    </button>
                  </Link>
                  <Link href="/register" onClick={closeMenu}>
                    <button className="w-full px-4 py-2 bg-red-500 text-white rounded">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
            </motion.div>
  )}
</AnimatePresence>

      </div>
    </>
  );
}