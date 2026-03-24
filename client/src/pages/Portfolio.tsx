/*
 * DESIGN: Neo-Brutalist Pop — Portfolio / Work Page
 * Case studies showcasing Tilt Media's full-service capabilities
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/services-bg-ey5oYnbnzrvqHtWMXV68hn.webp";

type Category = "All" | "Brand" | "Digital" | "Production" | "PR & Events" | "OOH";

const categories: Category[] = ["All", "Brand", "Digital", "Production", "PR & Events", "OOH"];

const caseStudies = [
  {
    id: 1,
    client: "Luxe Properties Dubai",
    industry: "Real Estate",
    category: "Digital" as Category,
    services: ["Meta Ads", "Google Ads", "Social Media"],
    headline: "3x Leads in 90 Days",
    desc: "A full-funnel digital campaign that tripled qualified leads while cutting cost-per-lead by 45%. We rebuilt their entire ad strategy from scratch.",
    result: "+300% Leads",
    color: "bg-[#E8541A]",
    tag: "Digital",
  },
  {
    id: 2,
    client: "Desert Bloom Restaurants",
    industry: "Food & Beverage",
    category: "Production" as Category,
    services: ["Video Production", "Photography", "Social Media"],
    headline: "From 2K to 50K Instagram Followers",
    desc: "We reshot their entire menu, produced weekly video content, and built a social strategy that turned their account into a viral food destination.",
    result: "25x Growth",
    color: "bg-[#1a1a1a]",
    tag: "Production",
  },
  {
    id: 3,
    client: "FitZone UAE",
    industry: "Health & Fitness",
    category: "Brand" as Category,
    services: ["Brand Identity", "Video Production", "OOH"],
    headline: "Brand Relaunch Across Dubai",
    desc: "Complete rebrand from logo to full identity system, paired with a cinematic brand film and Sheikh Zayed Road billboard placement.",
    result: "+180% Signups",
    color: "bg-[#E8541A]",
    tag: "Brand",
  },
  {
    id: 4,
    client: "TechVenture MENA",
    industry: "Technology",
    category: "PR & Events" as Category,
    services: ["PR & Communications", "Event Management", "Content Creation"],
    headline: "Gulf News & Khaleej Times Coverage",
    desc: "A PR-led launch campaign that secured front-page coverage in two of the UAE's biggest publications, plus a 200-person launch event in DIFC.",
    result: "50+ Media Mentions",
    color: "bg-[#1a1a1a]",
    tag: "PR & Events",
  },
  {
    id: 5,
    client: "Marina Walk Retail",
    industry: "Retail",
    category: "OOH" as Category,
    services: ["OOH Advertising", "Media Buying", "Graphic Design"],
    headline: "Sheikh Zayed Road Takeover",
    desc: "A 6-week outdoor campaign across 12 prime Dubai locations, coordinated with a digital retargeting push that drove a 40% spike in foot traffic.",
    result: "+40% Foot Traffic",
    color: "bg-[#E8541A]",
    tag: "OOH",
  },
  {
    id: 6,
    client: "Nomad Coffee Co.",
    industry: "Food & Beverage",
    category: "Brand" as Category,
    services: ["Brand Identity", "Photography", "Packaging Design"],
    headline: "From Concept to Shelf in 60 Days",
    desc: "Full brand identity, product photography, and packaging design for a new specialty coffee brand. Launched into three major UAE retailers.",
    result: "3 Retail Chains",
    color: "bg-[#1a1a1a]",
    tag: "Brand",
  },
  {
    id: 7,
    client: "Urban Stays Hospitality",
    industry: "Hospitality",
    category: "Production" as Category,
    services: ["Video Production", "Photography", "Google Ads"],
    headline: "Cinematic Brand Film — 2M Views",
    desc: "A 90-second brand film showcasing Dubai's luxury hospitality experience. Distributed on YouTube and Instagram, achieving 2M organic views in 30 days.",
    result: "2M Views",
    color: "bg-[#E8541A]",
    tag: "Production",
  },
  {
    id: 8,
    client: "Gulf Fashion Week",
    industry: "Fashion & Events",
    category: "PR & Events" as Category,
    services: ["Event Management", "PR", "Social Media", "Photography"],
    headline: "300-Guest Fashion Activation",
    desc: "End-to-end event production for a high-profile fashion week activation in Downtown Dubai, including influencer outreach, live coverage, and post-event PR.",
    result: "300+ Attendees",
    color: "bg-[#1a1a1a]",
    tag: "PR & Events",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url(" + SERVICES_BG + ")", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-white/20 brutal-shadow-sm mb-6 rotate-[-2deg]">
              Our Work
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              Results That
              <br />
              <span className="text-[#E8541A]">Speak</span> for Themselves
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl font-body leading-relaxed">
              We don't measure success in impressions — we measure it in leads, sales, and market share. Here's proof.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== FILTER + GRID ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={"px-5 py-2.5 font-display text-sm uppercase border-3 border-[#1a1a1a] transition-all duration-200 " + (activeCategory === cat ? "bg-[#E8541A] text-white brutal-shadow-sm" : "bg-white text-[#1a1a1a] hover:bg-[#E8541A] hover:text-white")}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Case Study Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((cs, i) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4, rotate: -0.5 }}
                  className="border-3 border-[#1a1a1a] brutal-shadow hover:shadow-[8px_8px_0_0_#E8541A] transition-all duration-300 overflow-hidden"
                >
                  {/* Card header */}
                  <div className={cs.color + " p-8 relative"}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="font-display text-xs uppercase text-white/60 tracking-wider">{cs.industry}</span>
                        <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">{cs.client}</h3>
                      </div>
                      <div className="px-3 py-1.5 bg-white/20 border border-white/30 text-white font-display text-xs uppercase">
                        {cs.tag}
                      </div>
                    </div>
                    {/* Big result stat */}
                    <div className="font-display text-5xl sm:text-6xl text-white/20 leading-none">
                      {cs.result}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8 bg-white">
                    <h4 className="font-display text-xl text-[#1a1a1a] mb-3">{cs.headline}</h4>
                    <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">{cs.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.services.map((svc) => (
                        <span key={svc} className="px-3 py-1 bg-[#FFF8F0] border-2 border-[#1a1a1a] font-display text-xs uppercase text-[#1a1a1a]">
                          {svc}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-display text-2xl text-[#E8541A]">{cs.result}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-[#E8541A]">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                  Ready to Be Our <span className="text-[#1a1a1a]">Next Success Story?</span>
                </h2>
                <p className="text-white/80 font-body mt-2 text-lg">
                  Let's build a case study with your name on it.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-display text-base uppercase border-3 border-white/20 brutal-shadow-sm hover:bg-white hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-200 shrink-0"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
