/*
 * DESIGN: Neo-Brutalist Pop — Contact Page
 * Full contact form, Dubai address, WhatsApp button
 * Thick borders, hard shadows, tilted accents, orange/black/white
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const DUBAI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/dubai-skyline-mtgq7QkasK6q27ENDTxUvy.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLeadMutation = trpc.leads.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLeadMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        service: formData.service || undefined,
        message: formData.message || undefined,
        source: "contact",
      });

      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      toast.success("Message sent successfully!");
      setTimeout(() => setFormSubmitted(false), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${DUBAI_IMG})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-white/20 brutal-shadow-sm mb-6 rotate-[-2deg]">
              Contact Us
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              Let's Build
              <br />
              Something <span className="text-[#E8541A]">Bold</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl font-body leading-relaxed">
              Got a project in mind? Want to dominate digital? Or just want to say hi? We're all ears. Drop us a message and let's make it happen.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== CONTACT FORM + INFO ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="p-8 sm:p-10 bg-white border-3 border-[#1a1a1a] brutal-shadow-lg">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center mx-auto mb-6 rotate-[-5deg]">
                        <Send size={36} className="text-white" />
                      </div>
                      <h3 className="font-display text-3xl text-[#1a1a1a] mb-3">Message Sent!</h3>
                      <p className="text-gray-600 font-body text-lg">
                        We'll get back to you within 24 hours. Get ready for some bold ideas.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-display text-3xl text-[#1a1a1a] mb-2">Send Us a Message</h2>
                      <p className="text-gray-500 font-body mb-8">Fill out the form and we'll be in touch faster than you can say "ROI".</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-display text-xs uppercase text-[#1a1a1a] mb-2">Your Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all bg-white"
                            />
                          </div>
                          <div>
                            <label className="block font-display text-xs uppercase text-[#1a1a1a] mb-2">Email Address *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all bg-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-display text-xs uppercase text-[#1a1a1a] mb-2">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+971 50 123 4567"
                              className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all bg-white"
                            />
                          </div>
                          <div>
                            <label className="block font-display text-xs uppercase text-[#1a1a1a] mb-2">Service Interested In</label>
                            <select
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] bg-white focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all"
                            >
                              <option value="">Select a service</option>
                              <option value="meta-ads">Meta Ads</option>
                              <option value="google-ads">Google Ads</option>
                              <option value="social-media">Social Media Management</option>
                              <option value="content">Content Creation</option>
                              <option value="website">Website Design</option>
                              <option value="ai">AI & Automation</option>
                              <option value="seo">SEO</option>
                              <option value="full-package">Full Package</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block font-display text-xs uppercase text-[#1a1a1a] mb-2">Your Message *</label>
                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your project, goals, and what you're looking for..."
                            className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all resize-none bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 bg-[#E8541A] text-white font-display text-base uppercase border-3 border-[#1a1a1a] brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_0_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#1a1a1a] transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={18} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right" delay={0.1}>
                <div className="p-6 bg-[#1a1a1a] border-3 border-[#1a1a1a] brutal-shadow-lg">
                  <h3 className="font-display text-xl text-white mb-6">Contact Info</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#E8541A] border-2 border-white/20 flex items-center justify-center shrink-0 rotate-[-3deg]">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-display text-sm">Address</p>
                        <p className="text-gray-400 font-body text-sm mt-1">
                          Warehouse 99, Goshi Warehouse City
                          <br />
                          Al Quoz 3, Dubai - Tilt Media
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#E8541A] border-2 border-white/20 flex items-center justify-center shrink-0 rotate-[3deg]">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-display text-sm">Phone</p>
                        <a href="tel:+971585911780" className="text-gray-400 hover:text-[#E8541A] font-body text-sm mt-1 block transition-colors">
                          +971 58 591 1780
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#E8541A] border-2 border-white/20 flex items-center justify-center shrink-0 rotate-[-3deg]">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-display text-sm">Email</p>
                        <a href="mailto:info@tilt.ae" className="text-gray-400 hover:text-[#E8541A] font-body text-sm mt-1 block transition-colors">
                          info@tilt.ae
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#E8541A] border-2 border-white/20 flex items-center justify-center shrink-0 rotate-[3deg]">
                        <Clock size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-display text-sm">Working Hours</p>
                        <p className="text-gray-400 font-body text-sm mt-1">
                          Mon - Fri: 9:00 AM - 6:00 PM
                          <br />
                          Sat - Sun: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection direction="right" delay={0.2}>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ y: -3, rotate: -1 }}
                    className="p-6 bg-[#25D366] border-3 border-[#1a1a1a] brutal-shadow-lg flex items-center gap-4"
                  >
                    <div className="w-14 h-14 bg-white border-3 border-[#1a1a1a] flex items-center justify-center shrink-0 rotate-[-5deg]">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-lg text-white">WhatsApp Us</p>
                      <p className="text-white/80 font-body text-sm">Quick response guaranteed</p>
                    </div>
                  </motion.div>
                </a>
              </AnimatedSection>

              {/* Quick Note */}
              <AnimatedSection direction="right" delay={0.3}>
                <div className="p-6 bg-[#FFF8F0] border-3 border-[#1a1a1a] brutal-shadow">
                  <h3 className="font-display text-lg text-[#1a1a1a] mb-3">Free Strategy Call</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    Not sure what you need? Book a free 30-minute strategy call and we'll audit your current digital presence, identify opportunities, and map out a game plan — no strings attached.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="border-3 border-white/20 brutal-shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=46C9%2BJ9V+Al+Quoz+Dubai&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tilt Media Location - Tilt Studio, Dubai"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
