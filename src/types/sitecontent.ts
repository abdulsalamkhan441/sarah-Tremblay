import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Sarah Tremblay - RE/MAX Renaissance
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "ST",
    name: "Sarah Tremblay",
    title: "Residential Real Estate Broker",
    heroImage: "/3.jpg",
    heroImageAlt: "Quebec Residential Real Estate",
  },
  hero: {
    eyebrow: "RE/MAX Renaissance · Montérégie & Eastern Townships",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Sarah Tremblay.",
    subheading:
      "Dedicated residential real estate broker serving Saint-Hyacinthe, Beloeil, Granby, Drummondville, and surrounding communities since 2018. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$2M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "8+", suffix: " Yrs", label: "of experience (Since 2018)" },
    { icon: Users, value: "95%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "35+", suffix: " Cities", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Sarah Tremblay Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Sarah?",
  headingMain: "The Sarah Tremblay ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Montérégie and surrounding regions with personalized service, clear communication, and dedicated broker representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:4505184323",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving over 35 municipalities including Saint-Hyacinthe, Granby, Beloeil, Boucherville, Drummondville, and Sherbrooke.",
    },
    {
      icon: ShieldCheck,
      title: "OACIQ & RE/MAX Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Residential Broker",
      description:
        "Expert strategic guidance tailored to single-family homes, condos, multi-family units, and residential properties.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Sarah",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Sarah Tremblay",
  role: "Residential Real Estate Broker | RE/MAX Renaissance",
  bio: "Since 2018, Sarah Tremblay has provided clients across Montérégie, the Eastern Townships, and Central Quebec with attentive, professional real estate brokerage services. Known for her approachable style, strong market knowledge, and client-first attitude, Sarah guides buyers and sellers through every stage of the real estate process with care, integrity, and efficiency.",
  image: "/user1.png",
  specialties: [
    "Residential Single-Family Homes",
    "Condominiums & Townhomes",
    "First-Time Homebuyer Guidance",
    "Multi-Family & Income Properties",
    "Free Comparative Market Assessments",
    "Saint-Hyacinthe, Beloeil, Granby & Surrounding Communities",
  ],
  recentClosings: [
    { address: "Single-Family & Condo Sales", neighbourhood: "Saint-Hyacinthe & Beloeil", price: "Guidance" },
    { address: "Suburban & Regional Homes", neighbourhood: "Granby, Bromont & Area", price: "Expertise" },
    { address: "Free Property Evaluation", neighbourhood: "Montérégie Region", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "95% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Regional Listings)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "Saint-Hyacinthe Bungalow",
    subtitle: "Charming single-family home in a quiet family neighborhood close to schools and services.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,450 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202630001",
  },
  {
    id: "2",
    number: "02/07",
    title: "Beloeil Waterfront View Residence",
    subtitle: "Modern open-concept property with beautiful views near Mont-Saint-Hilaire.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,100 sq ft", beds: "4 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202630002",
  },
  {
    id: "3",
    number: "03/07",
    title: "Granby Contemporary Two-Storey",
    subtitle: "Spacious family residence featuring a large lot, modern kitchen, and finished basement.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,980 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202630003",
  },
  {
    id: "4",
    number: "04/07",
    title: "Saint-Bruno-de-Montarville Condo",
    subtitle: "Elegant condo unit with abundant natural light, private balcony, and indoor parking.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,150 sq ft", beds: "2 Beds", baths: "2 Baths" },
    mls: "MLS® 202630004",
  },
  {
    id: "5",
    number: "05/07",
    title: "Boucherville Executive Home",
    subtitle: "Refined living in a sought-after sector close to parks, schools, and major routes.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,400 sq ft", beds: "4 Beds", baths: "3.5 Baths" },
    mls: "MLS® 202630005",
  },
  {
    id: "6",
    number: "06/07",
    title: "Bromont Country Residence",
    subtitle: "Peaceful property near outdoor recreational trails and ski hills with scenic views.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "1,800 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202630006",
  },
  {
    id: "7",
    number: "07/07",
    title: "Drummondville Investment Duplex",
    subtitle: "Well-maintained residential investment building offering reliable rental history.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,600 sq ft", beds: "5 Beds", baths: "3 Baths" },
    mls: "MLS® 202630007",
  },
];

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Broker",
      quote: "Providing dedicated guidance and professional expertise for every step of your home transaction.",
      tags: ["RE/MAX Renaissance", "95% Satisfaction"],
      handle: "Sarah Tremblay | RE/MAX",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Montérégie and the Eastern Townships.",
      name: "Sarah Tremblay",
      role: "Residential Real Estate Broker",
      initials: "ST",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 2018",
      quote: "8+ years of professional real estate experience serving over 35 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Sarah Tremblay",
      role: "Residential Real Estate Broker | RE/MAX Renaissance",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Sarah brings local market knowledge, thorough communication, and personalized care to buyers and sellers across Quebec.",
      rating: 5,
    },
    badge: { reviewCount: "95%", ratingLabel: "Client Satisfaction", clientsCount: "35+ Municipalities" },
    split: {
      date: "Montérégie & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families and buyers navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Quebec Real Estate", body: "Comprehensive residential buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the RE/MAX network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$2M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Sarah Tremblay at RE/MAX Renaissance for expert residential real estate services across Montérégie and surrounding areas.",
  bulletPoints: [
    "Over 8 years of dedicated experience serving buyers and sellers since 2018",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 35+ municipalities including Saint-Hyacinthe, Beloeil, and Granby",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Sarah 450 518-4323",
  secondaryCtaLink: "tel:4505184323",
  agentName: "Sarah Tremblay",
  agentTitle: "Residential Real Estate Broker",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Sarah Tremblay's Approach",
  subtitle: "Montérégie & Eastern Townships",
  stats: [
    { label: "Satisfaction", value: "95%" },
    { label: "Experience", value: "8+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "RE/MAX Renaissance",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "8+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "95%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared personally by Sarah Tremblay.",
  contactDetails: {
    phone: { label: "Direct: 450 518-4323", href: "tel:4505184323" },
    email: { label: "sarah.tremblay@remax-quebec.com", href: "mailto:sarah.tremblay@remax-quebec.com" },
    location: "RE/MAX Renaissance, Saint-Hyacinthe & Regional Office",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "RE/MAX Renaissance - Sarah Tremblay",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Sarah Tremblay", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "OACIQ Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Montérégie & Surrounding Regions, QC",
    phonePrimary: { label: "Direct: 450 518-4323", href: "tel:4505184323" },
    phoneSecondary: { label: "Office: 450 771-7707", href: "tel:4507717707" },
    contactLink: { label: "Email: sarah.tremblay@remax-quebec.com", href: "mailto:sarah.tremblay@remax-quebec.com" },
  },
  brandBar: {
    brandName: "SARAH TREMBLAY",
    badgeText: "RE/MAX Renaissance",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Sarah Tremblay - RE/MAX Renaissance.",
    copyrightRights: "All rights reserved.",
  },
};