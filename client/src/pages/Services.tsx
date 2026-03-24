/*
 * DESIGN: Neo-Brutalist Pop — Services Page
 * Full-service media agency — Dubai
 * Covers: Brand, Creative Production, Digital Marketing, PR, Events, OOH, Media Buying
 */
import { motion } from "framer-motion";
import {
  Target, Search, Share2, Palette, Globe, Bot, TrendingUp,
  ArrowRight, CheckCircle2, Camera, Megaphone, CalendarDays,
  Layers, BarChart3, Film, Brush, Radio
} from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030033902/9hpfYMUD3osJpZXz9UmNvK/services-bg-ey5oYnbnzrvqHtWMXV68hn.webp";

const serviceCategories = [
  {
    category: "Brand & Strategy",
    emoji: "🎯",
    services: [
      {
        icon: Brush,
        title: "Brand Identity & Strategy",
        subtitle: "Define. Design. Dominate.",
        desc: "Your brand is more than a logo — it's a feeling. We craft complete brand identities that are unforgettable: from naming and positioning to visual identity systems and brand guidelines that scale.",
        features: [
          "Brand naming, positioning & messaging",
          "Logo design & full visual identity system",
          "Brand guidelines & style manuals",
          "Brand voice & tone development",
          "Market research & competitor analysis",
          "Rebranding & brand refresh projects",
        ],
      },
      {
        icon: Layers,
        title: "Creative Direction",
        subtitle: "Vision Brought to Life",
        desc: "Creative direction is the soul of every campaign. Our directors lead the concept-to-execution journey, ensuring every piece of content, every campaign, and every touchpoint feels unmistakably on-brand.",
        features: [
          "Campaign concept development",
          "Art direction for shoots & productions",
          "Mood boarding & visual storytelling",
          "Cross-channel creative consistency",
          "Concept pitches & creative decks",
          "Ongoing creative retainer packages",
        ],
      },
    ],
  },
  {
    category: "Creative Production",
    emoji: "🎬",
    services: [
      {
        icon: Film,
        title: "Video Production",
        subtitle: "Stories Worth Watching",
        desc: "From 15-second Reels to full-scale commercial productions, we handle everything in-house. Our Dubai-based production team delivers cinematic quality with the speed and agility modern brands demand.",
        features: [
          "TV commercials & brand films",
          "Social media content (Reels, TikTok, YouTube)",
          "Product launches & corporate videos",
          "Motion graphics & 2D/3D animation",
          "Aerial & drone videography",
          "Post-production, editing & color grading",
        ],
      },
      {
        icon: Camera,
        title: "Photography",
        subtitle: "Visuals That Stop the Scroll",
        desc: "Great photography is the foundation of every brand. Our photographers capture your products, people, and spaces with an eye for detail and a style that is instantly recognizable across every platform.",
        features: [
          "Commercial & editorial photography",
          "Product & e-commerce photography",
          "Lifestyle & fashion shoots",
          "Corporate & headshot photography",
          "Architectural & interior photography",
          "Post-production & retouching",
        ],
      },
      {
        icon: Palette,
        title: "Graphic Design & Content",
        subtitle: "Scroll-Stopping Creative",
        desc: "Every post, every banner, every ad — designed to make your audience stop mid-scroll and take action. Our design team works at the speed of culture, delivering fresh creative that never feels dated.",
        features: [
          "Social media content & templates",
          "Digital ads (static, animated, HTML5)",
          "Print & out-of-home design",
          "Packaging & merchandise design",
          "Presentation & pitch deck design",
          "UGC-style & native content creation",
        ],
      },
    ],
  },
  {
    category: "Digital Marketing",
    emoji: "📱",
    services: [
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
        desc: "Be there when your customers are searching. Our Google Ads campaigns put your brand at the top of search results and across the display network, capturing high-intent traffic ready to convert.",
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
      {
        icon: Globe,
        title: "Website Design & Development",
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
    ],
  },
  {
    category: "PR & Communications",
    emoji: "📣",
    services: [
      {
        icon: Megaphone,
        title: "PR & Media Relations",
        subtitle: "Get Noticed. Stay Relevant.",
        desc: "In Dubai's competitive market, earned media is priceless. Our PR team connects your brand with the right journalists, influencers, and media outlets to build credibility and amplify your message.",
        features: [
          "Media outreach & press release distribution",
          "Crisis communications & reputation management",
          "Influencer relations & ambassador programs",
          "Thought leadership & executive profiling",
          "Arabic & English media coverage",
          "Media monitoring & coverage reports",
        ],
      },
    ],
  },
  {
    category: "Events & Experiences",
    emoji: "🎉",
    services: [
      {
        icon: CalendarDays,
        title: "Event Management & Activation",
        subtitle: "Experiences People Cannot Forget",
        desc: "From intimate brand activations to large-scale events, we handle every detail so you can focus on what matters — making an impact. We create immersive brand experiences that people talk about long after.",
        features: [
          "Brand activations & product launches",
          "Corporate events & conferences",
          "Pop-up experiences & installations",
          "Sponsorship management & partnerships",
          "Event photography & videography coverage",
          "Social media amplification & live coverage",
        ],
      },
    ],
  },
  {
    category: "Media Buying & OOH",
    emoji: "🏙️",
    services: [
      {
        icon: BarChart3,
        title: "Media Buying & Planning",
        subtitle: "Right Message. Right Place. Right Time.",
        desc: "We negotiate and place media across every relevant channel — digital, print, TV, radio, and out-of-home — ensuring your media budget works harder and reaches more of the right people.",
        features: [
          "Integrated media planning across all channels",
          "Programmatic & digital display buying",
          "Print, TV & radio media placement",
          "Budget allocation & performance optimization",
          "Audience research & media analysis",
          "Post-campaign measurement & reporting",
        ],
      },
      {
        icon: Radio,
        title: "Out-of-Home (OOH) Advertising",
        subtitle: "Own the Streets of Dubai",
        desc: "From Sheikh Zayed Road billboards to mall activations and transit advertising, we plan and execute OOH campaigns that put your brand where Dubai's decision-makers cannot ignore it.",
        features: [
          "Billboards & large-format outdoor displays",
          "Mall & retail media placements",
          "Transit & metro advertising",
          "Digital OOH & DOOH campaigns",
          "Site selection & audience mapping",
          "Creative production for all OOH formats",
        ],
      },
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
          style={{ backgroundImage: "url(" + SERVICES_BG + ")", backgroundSize: "cover", backgroundPosition: "center" }}
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
              Full-Service Media
              <br />
              <span className="text-[#E8541A]">That Moves</span> the Market
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-300 max-w-2xl font-body leading-relaxed">
              From brand identity to billboards, content creation to PR — we cover every angle of your growth. One agency. Every service. Zero compromise.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-3 mt-8">
              {serviceCategories.map((cat) => (
                <a
                  key={cat.category}
                  href={"#" + cat.category.toLowerCase().replace(/[\s&]/g, "-").replace(/-+/g, "-")}
                  className="px-4 py-2 bg-white/10 text-white font-display text-xs uppercase border border-white/20 hover:bg-[#E8541A] hover:border-[#E8541A] transition-all duration-200"
                >
                  {cat.emoji} {cat.category}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ===== SERVICES BY CATEGORY ===== */}
      {serviceCategories.map((cat, catIdx) => (
        <section
          key={cat.category}
          id={cat.category.toLowerCase().replace(/[\s&]/g, "-").replace(/-+/g, "-")}
          className={"py-20 " + (catIdx % 2 === 0 ? "bg-white" : "bg-[#FFF8F0]")}
        >
          <div className="container">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-14">
                <div className={"px-5 py-3 " + (catIdx % 2 === 0 ? "bg-[#E8541A]" : "bg-[#1a1a1a]") + " text-white font-display text-sm uppercase border-3 border-[#1a1a1a] brutal-shadow-sm rotate-[-1deg]"}>
                  {cat.emoji} {cat.category}
                </div>
                <div className="flex-1 h-1 bg-[#1a1a1a]/10" />
              </div>
            </AnimatedSection>

            <div className="space-y-16">
              {cat.services.map((service, i) => (
                <AnimatedSection key={service.title} delay={0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={"space-y-6 " + (i % 2 === 1 ? "lg:order-2" : "")}>
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: -10 }}
                          className="w-14 h-14 bg-[#E8541A] border-3 border-[#1a1a1a] flex items-center justify-center rotate-[-5deg] shrink-0"
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

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="p-6 sm:p-8 bg-[#1a1a1a] border-3 border-[#1a1a1a] brutal-shadow">
                        <h3 className="font-display text-lg text-[#E8541A] mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-[#E8541A] mt-0.5 shrink-0" />
                              <span className="text-sm text-gray-300 font-body">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {i < cat.services.length - 1 && (
                    <div className="mt-16 h-px bg-[#1a1a1a]/10 relative">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-[#E8541A] border-2 border-[#1a1a1a] rotate-45" />
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container">
          <AnimatedSection>
            <div className="p-10 sm:p-14 bg-[#E8541A] border-3 border-white/20 brutal-shadow-lg text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-white/80 font-body text-lg max-w-2xl mx-auto mb-8">
                Book a free strategy call and we'll audit your current presence, identify the biggest opportunities, and build a custom plan across whichever services fit your goals.
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
