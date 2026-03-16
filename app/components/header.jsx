"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, UserPlus, ChevronDown, User, LayoutDashboard } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";

// ── MENU BUTTON ─────────────────────────────────────────────────────
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

// ── DESKTOP PROFILE DROPDOWN ────────────────────────────────────────
function ProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const imageUrl = user?.imageUrl;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-gray-100 hover:border-red-200 transition-all group"
      >
        {/* Avatar */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold">
            {firstName?.[0] || email?.[0]?.toUpperCase() || "U"}
          </div>
        )}
        <span className="text-sm font-semibold text-gray-800 hidden lg:block">
          {firstName || email.split("@")[0]}
        </span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            {/* User info */}
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
              <p className="text-sm font-bold text-gray-900">
                {firstName} {lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">{email}</p>
            </div>

            {/* Clerk's built-in profile manager */}
            <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-2">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonBox: "gap-2",
                    userButtonOuterIdentifier: "text-sm text-gray-700 font-medium",
                  },
                }}
                showName
              />
            </div>

            {/* Dashboard link */}
            {/* <Link
              href="#"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <LayoutDashboard size={16} className="text-red-500" />
              Dashboard
            </Link> */}

            {/* Sign Out */}
            <SignOutButton redirectUrl="/">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100">
                <LogOut size={16} />
                Sign Out
              </button>
            </SignOutButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── MAIN HEADER ─────────────────────────────────────────────────────
export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      setTimeout(() => document.addEventListener("mousedown", handleClickOutside), 0);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/jobs", label: "Jobs" },
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

            <div className="text-xs text-red-500">
    loaded: {String(isLoaded)} | signedIn: {String(isSignedIn)}
  </div>

            {/* Desktop Nav */}
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

              {/* Desktop Auth */}
              <div className="hidden md:flex items-center gap-3">
                {!isLoaded ? (
                  // Skeleton while Clerk loads
                  <div className="w-24 h-9 rounded-full bg-gray-100 animate-pulse" />
                ) : isSignedIn ? (
                  <ProfileDropdown user={user} />
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <button className="flex items-center gap-2 px-6 py-2 border-2 border-red-600 text-red-600 text-sm font-bold rounded-full hover:bg-red-600 hover:text-white transition-all active:scale-95">
                        <LogIn size={16} />
                        Log In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-95">
                        <UserPlus size={16} />
                        Sign Up
                      </button>
                    </SignUpButton>
                  </>
                )}
              </div>

              {/* Mobile toggle */}
              <MenuButton isOpen={isOpen} toggle={toggleMenu} />
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              />
              <motion.div
                ref={menuRef}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-screen w-4/5 max-w-xs bg-white shadow-2xl flex flex-col p-8 md:hidden z-50"
              >
                <div className="flex justify-between items-center mb-12">
                  <h1 className="text-xl font-bold text-red-600">
                    Scip<span className="text-indigo-950">pra</span>
                  </h1>
                  <MenuButton isOpen={isOpen} toggle={toggleMenu} />
                </div>

                {/* Mobile: show profile info if signed in */}
                {isSignedIn && (
                  <div className="flex items-center gap-3 mb-8 p-3 bg-gray-50 rounded-2xl">
                    {user?.imageUrl ? (
                      <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                        {user?.firstName?.[0] || "U"}
                      </div>
                    )}
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.primaryEmailAddress?.emailAddress}
                      </p>
                    </div>
                  </div>
                )}

                <ul className="flex flex-col gap-6 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
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
                  {!isLoaded ? null : isSignedIn ? (
                    <>
                      {/* <Link
                        href="#"
                        onClick={closeMenu}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-colors"
                      >
                        <LayoutDashboard size={20} />
                        Dashboard
                      </Link> */}
                      <SignOutButton redirectUrl="/">
                        <button
                          onClick={closeMenu}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors"
                        >
                          <LogOut size={20} />
                          Sign Out
                        </button>
                      </SignOutButton>
                    </>
                  ) : (
                    <>
                      <SignInButton mode="modal">
                        <button
                          onClick={closeMenu}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-50 transition-colors"
                        >
                          <LogIn size={20} />
                          Log In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button
                          onClick={closeMenu}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-colors"
                        >
                          <UserPlus size={20} />
                          Sign Up
                        </button>
                      </SignUpButton>
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