/*
 * DESIGN: Neo-Brutalist Pop — About Page
 * Team intro, story, values, Dubai-based agency feel
 * Thick borders, hard shadows, tilted accents, orange/black/white
 */
import { motion } from "framer-motion";
import { Zap, Heart, Eye, Users, Award, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/about-team-RNHd8sqjBfv22k37khnfbs.webp";
const DUBAI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/dubai-skyline-mtgq7QkasK6q27ENDTxUvy.webp";

const values = [
  { icon: Zap, title: "Bold Moves Only", desc: "We don't play it safe. Every strategy is designed to make noise, break patterns, and get noticed." },
  { icon: Heart, title: "Passion-Driven", desc: "We genuinely love what we do. That energy shows in every campaign, every post, every pixel." },
  { icon: Eye, title: "Transparent AF", desc: "No hidden fees, no smoke and mirrors. You see exactly what we do and why we do it." },
  { icon: Users, title: "Your Team, Not Just An Agency", desc: "We embed ourselves in your brand. Your wins are our wins. Period." },
  { icon: Award, title: "Excellence Is Standard", desc: "Good enough isn't in our vocabulary. We push until it's exceptional." },
  { icon: Rocket, title: "Future-Forward", desc: "We stay ahead of trends so your brand is always one step ahead of the competition." },
];

const team = [
  { name: "Khalid Al-Mansouri", role: "Founder & CEO", color: "bg-[#E8541A]" },
  { name: "Nadia Petrova", role: "Creative Director", color: "bg-[#1a1a1a]" },
  { name: "Raj Patel", role: "Head of Performance", color: "bg-[#E8541A]" },
  { name: "Lina Farah", role: "Social Media Lead", color: "bg-[#1a1a1a]" },
  { name: "Marcus Chen", role: "SEO Strategist", color: "bg-[#E8541A]" },
  { name: "Aisha Bakr", role: "Content Manager", color: "bg-[#1a1a1a]" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${DUBAI_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-white/20 brutal-shadow-sm mb-6 rotate-[-2deg]">
              About Us
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              We're Not Your
              <br />
              <span className="text-[#E8541A]">Average</span> Agency
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl font-body leading-relaxed">
              The creative house for brands that move before the market. We don't follow trends — we tilt them.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="border-3 border-[#1a1a1a] brutal-shadow-lg overflow-hidden">
                  <img src={TEAM_IMG} alt="Tilt Media Team" className="w-full h-auto" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-[#E8541A] text-white font-display text-sm border-3 border-[#1a1a1a] brutal-shadow-sm rotate-[3deg]">
                  Est. Dubai 2020
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2 mb-6">
                Started Bold.
                <br />
                <span className="text-[#E8541A]">Stayed Bold.</span>
              </h2>
              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  Tilt is a new-age marketing agency built for the culture-driven generation. Born from a collective of creators, strategists, and designers, we exist to shake the traditional agency model.
                </p>
                <p>
                  Our work blends strategy, storytelling, and design to create content that feels real, moves fast, and connects deeper. We're not here to play it safe — we're here to redefine what marketing looks like when it's made by the ones shaping the internet.
                </p>
                <p>
                  Bold ideas. Fast execution. Real impact. That's Tilt. We don't sell products — we build obsession.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 bg-[#FFF8F0] diagonal-both relative z-10">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">Our Values</span>
              <h2 className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
                What We <span className="text-[#E8541A]">Stand For</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, rotate: -1 }}
                  className="p-7 bg-white border-3 border-[#1a1a1a] brutal-shadow hover:shadow-[8px_8px_0_0_#E8541A] transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center mb-4 rotate-[-5deg]">
                    <value.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl text-[#1a1a1a] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 font-body leading-relaxed">{value.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="font-display text-sm text-[#E8541A] uppercase tracking-wider">The Crew</span>
              <h2 className="text-4xl sm:text-5xl text-[#1a1a1a] mt-2">
                Meet The <span className="text-[#E8541A]">Tilters</span>
              </h2>
              <p className="text-gray-600 font-body mt-4 max-w-xl mx-auto">
                A diverse team of creative minds, data wizards, and strategic thinkers who live and breathe digital marketing.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border-3 border-[#1a1a1a] brutal-shadow overflow-hidden group"
                >
                  {/* Avatar placeholder */}
                  <div className={`${member.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                    <span className="font-display text-7xl text-white/20 group-hover:scale-110 transition-transform duration-300">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="font-display text-lg text-[#1a1a1a]">{member.name}</h3>
                    <p className="text-sm text-[#E8541A] font-body font-medium">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
