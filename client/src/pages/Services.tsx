/*
 * DESIGN: Neo-Brutalist Pop — Services Page
 * Full services showcase with icons, descriptions, and bold styling
 * Alternating layout, thick borders, hard shadows, tilted accents
 */
import { motion } from "framer-motion";
import {
  Target, Search, Share2, Palette, Globe, Bot, TrendingUp,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/services-bg-ey5oYnbnzrvqHtWMXV68hn.webp";

const services = [
  {
    icon: Target,
    title: "Meta Ads",
    subtitle: "Facebook & Instagram Advertising",
    desc: "We don't just run ads — we engineer scroll-stopping campaigns that turn impressions into revenue. Our Meta Ads strategies are built on deep audience insights, creative testing, and relentless optimization.",
    features: [
      "Advanced audience targeting & lookalike audiences",
      "Dynamic creative testing (50+ variations per campaign)",
      "Full-funnel strategy from awareness to conversion",
      "Retargeting sequences that bring people back",
      "Real-time performance dashboards",
      "Monthly strategy reviews & scaling plans",
    ],
  },
  {
    icon: Search,
    title: "Google Ads",
    subtitle: "Search, Display & YouTube Advertising",
    desc: "Be there when your customers are searching. Our Google Ads campaigns put your brand at the top of search results and across the display network, capturing high-intent traffic that's ready to convert.",
    features: [
      "Search, Display, Shopping & YouTube campaigns",
      "Keyword research & competitive analysis",
      "Landing page optimization for higher conversions",
      "Smart bidding strategies for maximum ROI",
      "Negative keyword management & quality score optimization",
      "Detailed conversion tracking & attribution",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Build. Engage. Grow.",
    desc: "Your social media should be more than just posts — it should be a community. We create, manage, and grow your social presence across all major platforms with content that sparks conversations.",
    features: [
      "Platform strategy for Instagram, TikTok, LinkedIn & more",
      "Content calendar planning & scheduling",
      "Community management & engagement",
      "Trend monitoring & real-time content",
      "Influencer collaboration & partnerships",
      "Monthly analytics & growth reports",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    subtitle: "Scroll-Stopping Creative",
    desc: "In a world of infinite scroll, your content needs to make people stop. Our creative team produces everything from stunning visuals to viral video content that captures attention and drives action.",
    features: [
      "Photography & videography production",
      "Motion graphics & animation",
      "Copywriting that converts",
      "Brand identity & visual design",
      "UGC-style content creation",
      "Reels, TikToks & short-form video",
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    subtitle: "Digital Experiences That Convert",
    desc: "Your website is your digital storefront — it better be good. We design and build websites that look stunning, load fast, and turn visitors into customers. No templates, no shortcuts.",
    features: [
      "Custom UI/UX design & development",
      "Mobile-first responsive design",
      "E-commerce & booking integrations",
      "Speed optimization & Core Web Vitals",
      "CMS setup & training",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    subtitle: "Work Smarter, Scale Faster",
    desc: "Leverage the power of AI to automate repetitive tasks, personalize customer journeys, and scale your marketing efforts without scaling your team. Welcome to the future of marketing.",
    features: [
      "AI-powered chatbots & customer service",
      "Marketing automation workflows",
      "Personalized email sequences",
      "Predictive analytics & forecasting",
      "AI content generation & optimization",
      "CRM integration & lead scoring",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO",
    subtitle: "Own Page One of Google",
    desc: "SEO isn't dead — it's just evolved. We help your brand climb the rankings with technical SEO, content strategy, and link building that drives sustainable organic traffic growth.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword strategy & content planning",
      "On-page & off-page optimization",
      "Local SEO for Dubai & UAE businesses",
      "Link building & digital PR",
      "Monthly ranking reports & insights",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${SERVICES_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-white/20 brutal-shadow-sm mb-6 rotate-[-2deg]">
              Our Services
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              Everything You Need
              <br />
              To <span className="text-[#E8541A]">Dominate</span> Digital
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl font-body leading-relaxed">
              From paid ads to organic growth, content creation to AI automation — we've got every angle covered. Pick one service or take the whole package.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {/* Info Side */}
                  <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: -10 }}
                        className="w-14 h-14 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center rotate-[-5deg]"
                      >
                        <service.icon size={26} className="text-white" />
                      </motion.div>
                      <div>
                        <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a]">{service.title}</h2>
                        <p className="text-[#E8541A] font-body font-medium text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 font-body text-lg leading-relaxed">{service.desc}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8541A] text-white font-display text-sm uppercase border-3 border-[#1a1a1a] brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_0_#1a1a1a] transition-all duration-200"
                    >
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Features Side */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="p-6 sm:p-8 bg-[#FFF8F0] border-3 border-[#1a1a1a] brutal-shadow">
                      <h3 className="font-display text-lg text-[#1a1a1a] mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-[#E8541A] mt-0.5 shrink-0" />
                            <span className="text-sm text-gray-700 font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {i < services.length - 1 && (
                  <div className="mt-20 h-1 bg-[#1a1a1a]/10 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-[#E8541A] border-2 border-[#1a1a1a] rotate-45" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGES CTA ===== */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container">
          <AnimatedSection>
            <div className="p-10 sm:p-14 bg-[#E8541A] border-3 border-white/20 brutal-shadow-lg text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-white/80 font-body text-lg max-w-2xl mx-auto mb-8">
                Book a free strategy call and we'll audit your current digital presence, identify the biggest opportunities, and build a custom plan for your brand.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] font-display text-base uppercase border-3 border-[#1a1a1a] brutal-shadow hover:bg-[#1a1a1a] hover:text-white hover:border-white transition-all duration-200"
              >
                Book Free Strategy Call <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
