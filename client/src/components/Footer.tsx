/*
 * DESIGN: Neo-Brutalist Pop
 * Footer: Black background, orange accents, chunky borders, tilted elements
 */
import { Link } from "wouter";
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/tilt-media-logo_daedc485.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative">
      {/* Orange top bar */}
      <div className="h-2 bg-[#E8541A]" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <img src={LOGO_URL} alt="Tilt Media" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              Dubai's boldest digital marketing agency. We don't just market — we make brands impossible to ignore.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/tiltmedia.ae/", label: "Instagram UAE" },
                { icon: Instagram, href: "https://www.instagram.com/tiltmedia.ar/", label: "Instagram AR" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:bg-[#E8541A] hover:border-[#E8541A] hover:rotate-[-5deg] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-5 text-[#E8541A]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Work", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "Our Mission", href: "/mission" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E8541A] hover:pl-2 transition-all duration-300 font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-5 text-[#E8541A]">Services</h4>
            <ul className="space-y-3">
              {[
                "Brand Identity & Strategy",
                "Video Production",
                "Photography",
                "Meta & Google Ads",
                "Social Media Management",
                "PR & Communications",
                "Events & Activations",
                "OOH & Media Buying",
                "Website Design",
                "SEO",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#E8541A] hover:pl-2 transition-all duration-300 font-body text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-5 text-[#E8541A]">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E8541A] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm font-body">
                  Business Bay, Dubai, UAE
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#E8541A] mt-0.5 shrink-0" />
                <a href="tel:+971501234567" className="text-gray-400 hover:text-[#E8541A] text-sm font-body transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#E8541A] mt-0.5 shrink-0" />
                <a href="mailto:info@tilt.ae" className="text-gray-400 hover:text-[#E8541A] text-sm font-body transition-colors">
                  info@tilt.ae
                </a>
              </li>
            </ul>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-display text-sm uppercase border-3 border-[#1a1a1a] brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_0_#1a1a1a] transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-body">
            &copy; {new Date().getFullYear()} Tilt Media. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-body">
            Made with boldness in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
