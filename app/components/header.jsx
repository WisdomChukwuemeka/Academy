"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AuthAPI } from "../services/api"; // Adjust path
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, UserPlus } from "lucide-react";


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

function MenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="relative md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col items-center justify-center w-6 h-6 gap-1.5">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-0.5 bg-gray-800 rounded-full block origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-0.5 bg-gray-800 rounded-full block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-0.5 bg-gray-800 rounded-full block origin-center"
        />
      </div>
    </button>
  );
}

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
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500 transition-colors">
                  learn • create • build
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
                     className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-95"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                     className="flex items-center gap-2 px-6 py-2 border-2 border-red-600 text-red-600 text-sm font-bold rounded-full hover:bg-red-600 hover:text-white transition-all active:scale-95"
                  >
                    <LogIn size={16} />
                      Log In
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <MenuButton isOpen={isOpen} toggle={toggleMenu} />
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
{/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.div
                ref={menuRef}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-white shadow-2xl flex flex-col p-8 md:hidden z-50"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex flex-col leading-tight">
                    <h1 className="text-xl font-bold text-red-600">
                      Scip<span className="text-indigo-950">pra</span>
                    </h1>
                  </div>
                  <MenuButton isOpen={isOpen} toggle={toggleMenu} />
                </div>

                <ul className="flex flex-col gap-6 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-800 hover:text-red-600 transition-colors flex items-center justify-between group"
                      >
                        {link.label}
                        <span className="w-2 h-2 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto space-y-4">
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors"
                    >
                      <LogOut size={20} />
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href="/login" onClick={closeMenu} className="block">
                        <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-colors">
                          <LogIn size={20} />
                          Log In
                        </button>
                      </Link>
                      <Link href="/register" onClick={closeMenu} className="block">
                        <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors">
                          <UserPlus size={20} />
                          Sign up
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}