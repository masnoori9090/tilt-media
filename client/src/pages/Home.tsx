/*
 * DESIGN: Neo-Brutalist Pop — Home Page
 * Full-service media agency positioning
 * Hero → Services Overview → Stats → Client Logos → Why Tilt → Testimonials → CTA
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import {
  Target, Search, Share2, Palette, Globe, Bot, TrendingUp,
  ArrowRight, Star, ChevronLeft, ChevronRight, Send,
  Film, Camera, Megaphone, CalendarDays, BarChart3, Brush
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/hero-bg-HWT2FPQBxv3U4b4FFrzL7i.webp";
const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/services-bg-ey5oYnbnzrvqHtWMXV68hn.webp";

const services = [
  { icon: Brush, title: "Brand Identity", desc: "Complete brand systems that make your identity impossible to ignore." },
  { icon: Film, title: "Video Production", desc: "Cinematic content from concept to final cut — all in-house." },
  { icon: Camera, title: "Photography", desc: "Commercial and lifestyle photography that elevates every platform." },
  { icon: Target, title: "Meta & Google Ads", desc: "Performance campaigns engineered for maximum ROI." },
  { icon: Share2, title: "Social Media", desc: "Content, community, and growth across every platform." },
  { icon: Palette, title: "Graphic Design", desc: "Visuals that stop the scroll and drive action." },
  { icon: Megaphone, title: "PR & Communications", desc: "Earned media and reputation management across Arabic & English press." },
  { icon: CalendarDays, title: "Events & Activations", desc: "Brand experiences people talk about long after they leave." },
  { icon: BarChart3, title: "Media Buying & OOH", desc: "From Sheikh Zayed Road billboards to programmatic display." },
  { icon: Globe, title: "Website Design", desc: "Websites that look incredible and actually drive results." },
  { icon: TrendingUp, title: "SEO", desc: "Climb the rankings and own your space on Google." },
  { icon: Bot, title: "AI & Automation", desc: "Work smarter with AI-powered marketing workflows." },
];

const testimonials = [
  {
    name: "Sarah Al-Rashid",
    company: "Luxe Properties Dubai",
    text: "Tilt Media completely transformed our digital presence. Our leads tripled in just 3 months. From the brand refresh to the video production — everything was world-class.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    company: "Desert Bloom Restaurants",
    text: "The content they create is insane. Our Instagram went from 2K to 50K followers and the photography they did for our new menu was stunning. Every post goes viral.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "TechVenture MENA",
    text: "Their Google Ads strategy cut our cost per lead by 60%. We also used them for a PR push and got picked up by Gulf News and Khaleej Times. The ROI speaks for itself.",
    rating: 5,
  },
  {
    name: "Omar Khalil",
    company: "FitZone UAE",
    text: "We came to Tilt for social media and ended up doing our brand identity, a full video campaign, and a Sheikh Zayed Road billboard. They deliver on everything.",
    rating: 5,
  },
];

const industries = [
  "Real Estate", "F&B", "Retail", "Technology", "Hospitality",
  "Fashion", "Healthcare", "Automotive", "Education", "Finance",
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
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
        source: "home",
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

  const nextTestimonial = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "url(" + HERO_BG + ")", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <AnimatedSection delay={0.1}>
              <div className="inline-block px-4 py-2 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-[#1a1a1a] brutal-shadow-sm mb-6 rotate-[-2deg]">
                Dubai's Full-Service Media Agency
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95] mb-6">
                We Don't Do
                <br />
                <span className="text-[#E8541A] inline-block rotate-[-2deg]">Boring</span>
                <br />
                Marketing
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8 font-body leading-relaxed">
                Brand strategy. Video production. Digital campaigns. PR. Events. OOH. We handle every facet of your brand's growth — boldly, and with real results.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#E8541A] text-white font-display text-base uppercase border-3 border-[#1a1a1a] brutal-shadow-lg hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0_0_#1a1a1a] transition-all duration-200"
                >
                  Explore Services <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#1a1a1a] font-display text-base uppercase border-3 border-[#1a1a1a] brutal-shadow-lg hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0_0_#E8541A] transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== INDUSTRY TICKER ===== */}
      <section className="bg-[#E8541A] py-4 border-y-4 border-[#1a1a1a] overflow-hidden">
        <div className="flex gap-0 whitespace-nowrap">
          {[...industries, ...industries, ...industries].map((industry, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 font-display text-sm text-white uppercase tracking-wider">
              {industry}
              <span className="w-2 h-2 bg-white/50 rotate-45 inline-block shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
              <div>
                <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">What We Do</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2">
                  Every Service
                  <br />
                  <span className="text-[#E8541A]">Your Brand Needs</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] text-white font-display text-sm uppercase border-3 border-[#1a1a1a] brutal-shadow-sm hover:bg-[#E8541A] transition-all duration-200 self-start lg:self-auto"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.06}>
                <Link href="/services">
                  <motion.div
                    whileHover={{ y: -5, rotate: -1 }}
                    className="p-6 bg-white border-3 border-[#1a1a1a] brutal-shadow hover:shadow-[8px_8px_0_0_#E8541A] transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center mb-4 rotate-[-5deg]">
                      <service.icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg text-[#1a1a1a] mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 font-body leading-relaxed">{service.desc}</p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-[#E8541A] py-16 diagonal-both relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: 100, suffix: "+", label: "Clients" },
              { number: 200, suffix: "+", label: "Campaigns" },
              { number: 3, suffix: "M+", label: "Ad Spend Managed" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/80 font-body text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY TILT SECTION ===== */}
      <section className="py-20 bg-[#1a1a1a] relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(" + SERVICES_BG + ")", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
                Why Brands Choose <span className="text-[#E8541A]">Tilt</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "One Agency. Every Service.",
                desc: "Brand identity. Video. Social media. PR. OOH. Events. We do it all under one roof — no briefing five different agencies, no fragmented strategy.",
                num: "01",
              },
              {
                title: "Results, Not Excuses",
                desc: "We're obsessed with ROI. Every dirham you spend with us is tracked, optimized, and multiplied. We bring receipts.",
                num: "02",
              },
              {
                title: "Dubai DNA",
                desc: "We know this market inside out. From local culture to global trends, we bridge the gap between your brand and your audience — in Arabic and English.",
                num: "03",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <div className="p-8 bg-white/5 border-3 border-white/20 backdrop-blur-sm hover:border-[#E8541A] transition-all duration-300 h-full">
                  <span className="font-display text-6xl text-[#E8541A]/30">{item.num}</span>
                  <h3 className="font-display text-2xl text-white mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-400 font-body leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">Testimonials</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] mt-2">
                What Our <span className="text-[#E8541A]">Clients</span> Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="relative">
                <div className="p-8 sm:p-10 bg-[#FFF8F0] border-3 border-[#1a1a1a] brutal-shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} size={20} className="fill-[#E8541A] text-[#E8541A]" />
                    ))}
                  </div>
                  <p className="text-lg sm:text-xl text-[#1a1a1a] font-body leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-display text-lg text-[#1a1a1a]">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-500 font-body">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-3 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 border-3 border-[#1a1a1a] bg-white flex items-center justify-center brutal-shadow-sm hover:bg-[#E8541A] hover:text-white transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentTestimonial(i)}
                        className={"w-3 h-3 border-2 border-[#1a1a1a] transition-all duration-200 " + (i === currentTestimonial ? "bg-[#E8541A]" : "bg-white")}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 border-3 border-[#1a1a1a] bg-white flex items-center justify-center brutal-shadow-sm hover:bg-[#E8541A] hover:text-white transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA + LEAD FORM ===== */}
      <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#E8541A] rotate-12 opacity-20" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-[#E8541A] rotate-[-15deg] opacity-10" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">Ready to Grow?</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-6">
                Let's Make
                <br />
                Your Brand
                <br />
                <span className="text-[#E8541A] inline-block rotate-[-2deg]">Unforgettable</span>
              </h2>
              <p className="text-gray-400 font-body text-lg leading-relaxed max-w-md">
                Drop us a message and let's talk about how we can take your brand to the next level. No boring pitches — just real talk and real results.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="p-8 bg-white border-3 border-[#1a1a1a] brutal-shadow-lg">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center mx-auto mb-4 rotate-[-5deg]">
                      <Send size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl text-[#1a1a1a] mb-2">Message Sent!</h3>
                    <p className="text-gray-600 font-body">We'll get back to you faster than you can say "ROI".</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-display text-2xl text-[#1a1a1a] mb-4">Get Your Free Strategy Call</h3>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] bg-white focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all"
                    >
                      <option value="">Service Interested In</option>
                      <option value="brand-identity">Brand Identity & Strategy</option>
                      <option value="video-production">Video Production</option>
                      <option value="photography">Photography</option>
                      <option value="meta-ads">Meta Ads</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="pr">PR & Communications</option>
                      <option value="events">Events & Activations</option>
                      <option value="ooh">OOH / Media Buying</option>
                      <option value="website">Website Design</option>
                      <option value="seo">SEO</option>
                      <option value="full-package">Full Service Package</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-3 border-[#1a1a1a] font-body text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#E8541A] focus:shadow-[3px_3px_0_0_#E8541A] transition-all resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-[#E8541A] text-white font-display text-base uppercase border-3 border-[#1a1a1a] brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_0_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#1a1a1a] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
