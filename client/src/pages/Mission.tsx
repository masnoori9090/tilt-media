/*
 * DESIGN: Neo-Brutalist Pop — Mission Page
 * Vision, mission statement, what drives the agency
 * Bold typography, diagonal sections, tilted accents
 */
import { motion } from "framer-motion";
import { Crosshair, Lightbulb, Flame, Mountain, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";

const MISSION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/mission-bg-iVWgxdXUEAxj2Cz4WitX2D.webp";

export default function Mission() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 bg-[#E8541A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${MISSION_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#1a1a1a] text-white font-display text-sm uppercase border-3 border-white/20 brutal-shadow-sm mb-6 rotate-[-2deg]">
              Our Mission
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              Making Brands
              <br />
              <span className="text-[#1a1a1a]">Impossible</span>
              <br />
              To Ignore
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-white/80 max-w-2xl font-body leading-relaxed">
              To redefine how brands connect with the new generation.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== MISSION STATEMENT ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="p-10 sm:p-14 bg-[#FFF8F0] border-3 border-[#1a1a1a] brutal-shadow-lg relative">
                {/* Decorative quote mark */}
                <span className="absolute -top-8 -left-4 font-display text-9xl text-[#E8541A]/20 leading-none">"</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                  We bridge creativity with culture — turning ideas into stories people actually want to watch, share, and remember.
                </h2>
                <p className="text-gray-600 font-body text-lg leading-relaxed">
                  We're here to make marketing feel less like advertising, and more like a movement. Tilt exists to shift perspectives, spark emotion, and create work that lives where people live — online, in real time, and always ahead of the curve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISION & VALUES ===== */}
      <section className="py-20 bg-[#1a1a1a] diagonal-both relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#E8541A] border-3 border-white/20 flex items-center justify-center rotate-[-5deg]">
                  <Crosshair size={28} className="text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl text-white">
                  Our <span className="text-[#E8541A]">Vision</span>
                </h2>
                <p className="text-gray-300 font-body text-lg leading-relaxed">
                  Our promise? To make you stand out.
                </p>
                <p className="text-gray-400 font-body leading-relaxed">
                  We believe creativity should be fearless, fast, and felt. At Tilt, we don't aim for perfection — we aim for impact.
                </p>
              </div>
            </AnimatedSection>

            {/* Purpose */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#E8541A] border-3 border-white/20 flex items-center justify-center rotate-[5deg]">
                  <Flame size={28} className="text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl text-white">
                  Our <span className="text-[#E8541A]">Purpose</span>
                </h2>
                <p className="text-gray-300 font-body text-lg leading-relaxed">
                  To level the playing field. To give every brand — big or small — the tools, strategy, and creative firepower to compete and win in the digital space.
                </p>
                <p className="text-gray-400 font-body leading-relaxed">
                  We're driven by the belief that great marketing shouldn't be reserved for brands with massive budgets. Smart strategy, killer content, and relentless optimization can turn any brand into a market leader.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHAT DRIVES US ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">What Drives Us</span>
              <h2 className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
                The Fuel Behind <span className="text-[#E8541A]">The Fire</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Innovation Over Imitation",
                desc: "We never copy what's already been done. Every strategy is original, every campaign is fresh, and every idea pushes boundaries.",
              },
              {
                icon: Mountain,
                title: "Relentless Growth",
                desc: "We're never satisfied with 'good enough.' We constantly push for better results, better content, and better strategies.",
              },
              {
                icon: Flame,
                title: "Passion That's Contagious",
                desc: "Our energy is infectious. When we're excited about your brand (and we will be), that excitement translates into marketing that resonates.",
              },
              {
                icon: Crosshair,
                title: "Results That Matter",
                desc: "Vanity metrics are cool, but we're obsessed with the numbers that actually impact your bottom line. Revenue. Leads. Growth.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex gap-5 p-6 border-3 border-[#1a1a1a] brutal-shadow hover:shadow-[8px_8px_0_0_#E8541A] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center shrink-0 rotate-[-5deg]">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-[#1a1a1a] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-[#E8541A]">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                  Ready to <span className="text-[#1a1a1a]">Tilt</span> the Game?
                </h2>
                <p className="text-white/80 font-body mt-2 text-lg">
                  Let's build something bold together.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-display text-base uppercase border-3 border-white/20 brutal-shadow-sm hover:bg-white hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-200 shrink-0"
              >
                Let's Talk <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
