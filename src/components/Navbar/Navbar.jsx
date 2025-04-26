"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "App Development", href: "/services#app-development" },
    { label: "SEO Optimization", href: "/services#seo" },
    { label: "Social Media Marketing", href: "/services#social" },
  ];

  const industryItems = [
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Education", href: "/industries#education" },
    { label: "E-Commerce", href: "/industries#ecommerce" },
    { label: "Real Estate", href: "/industries#real-estate" },
  ];

  const renderDropdown = (title, items) => (
    <div className="relative group">
      <span
        tabIndex={0}
        className="cursor-pointer text-gray-700 hover:text-blue-600 flex items-center gap-1"
      >
        {title} ▾
      </span>
      <div className="absolute top-8 left-0 hidden group-hover:flex group-focus-within:flex flex-col bg-white shadow-lg rounded-md py-2 w-52 z-20">
        {items.map(({ label, href }) => (
          <Link key={label} href={href} className="px-4 py-2 text-sm hover:bg-gray-100">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <div className="flex gap-4">
            <a href="tel:+918809155327" className="hover:underline flex items-center gap-1">
              📞 +91 8809155327
            </a>
            <a href="https://wa.me/918809155327" target="_blank" className="hover:underline flex items-center gap-1">
              🟢 WhatsApp Us
            </a>
          </div>
          <div>Lalpur, Ranchi, Jharkhand</div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg" width={40} height={40} alt="Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-blue-700">San Innovation</h1>
            <p className="text-xs text-gray-500">E-services Pvt Ltd</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className="text-gray-700 hover:text-blue-600 font-medium transition">
              {label}
            </Link>
          ))}
          {renderDropdown("Services", serviceItems)}
          {renderDropdown("Industries", industryItems)}
        </nav>

        {/* Hamburger for Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="text-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <Image src="/placeholder.svg" width={40} height={40} alt="Logo" className="w-10 h-10" />
                <div>
                  <h1 className="text-xl font-bold text-blue-700">San Innovation</h1>
                  <p className="text-xs text-gray-500">E-services Pvt Ltd</p>
                </div>
              </Link>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="text-black" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-700"
                >
                  {label}
                </Link>
              ))}

              <div className="mt-6">
                <p className="text-gray-700 font-semibold mb-2">Services</p>
                {serviceItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-500 mb-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-semibold mb-2">Industries</p>
                {industryItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-500 mb-2"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
