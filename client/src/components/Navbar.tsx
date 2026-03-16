/*
 * DESIGN: Neo-Brutalist Pop
 * Navbar: Thick black border bottom, white background, logo on left, chunky nav links
 * Mobile: Hamburger with slide-down menu, orange accent
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/tilt-media-logo_daedc485.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b-4 border-[#1a1a1a] shadow-[0_4px_0_0_#1a1a1a]"
          : "bg-white/95 border-b-4 border-[#1a1a1a]"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={LOGO_URL}
            alt="Tilt Media"
            className="h-14 w-auto hover:rotate-[-3deg] transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 font-display text-sm uppercase tracking-wide transition-all duration-200 border-3 ${
                location === link.href
                  ? "bg-[#E8541A] text-white border-[#1a1a1a] brutal-shadow-sm"
                  : "bg-transparent text-[#1a1a1a] border-transparent hover:bg-[#E8541A] hover:text-white hover:border-[#1a1a1a] hover:brutal-shadow-sm"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 font-display text-sm uppercase bg-[#1a1a1a] text-white border-3 border-[#1a1a1a] hover:bg-[#E8541A] hover:brutal-shadow-sm transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border-3 border-[#1a1a1a] brutal-shadow-sm hover:bg-[#E8541A] hover:text-white transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b-4 border-[#1a1a1a] overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 font-display text-base uppercase border-3 transition-all duration-200 ${
                    location === link.href
                      ? "bg-[#E8541A] text-white border-[#1a1a1a] brutal-shadow-sm"
                      : "bg-transparent text-[#1a1a1a] border-[#1a1a1a] hover:bg-[#E8541A] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-4 py-3 font-display text-base uppercase bg-[#1a1a1a] text-white border-3 border-[#1a1a1a] text-center hover:bg-[#E8541A] transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
