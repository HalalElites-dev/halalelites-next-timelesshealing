import { X, Github, Linkedin, LucideIcon} from "lucide-react";
// Site Metadata
export const SITE_TITLE = 'HalalElites';
export const SITE_TAGLINE = 'Boost your productivity with AI-powered tools.';
export const SITE_URL = 'https://halalelites.dev';

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Hero Section
export const HERO_HEADING = 'Work smarter, not harder.';
export const HERO_SUBTEXT = 'halalElites helps you stay organized and get more done with less effort.';
export const HERO_CTA_TEXT = 'Start Free Trial';
export const HERO_CTA_LINK = '/signup';

// About Section
export const ABOUT_HEADING = 'About halalElites';
export const ABOUT_SUBTEXT = 'halalElites is an innovative platform designed to enhance productivity through AI-driven tools and features.';
export const ABOUT_CONTENT = `
  At halalElites, we believe that productivity should be effortless. Our platform combines advanced AI technology with intuitive design to help you manage tasks, set priorities, and achieve your goals efficiently.

  Whether you're a freelancer, a small business owner, or part of a large team, halalElites adapts to your workflow and enhances your productivity.
`;
// Contact Section
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_SUBTEXT = 'We would love to hear from you! Reach out with any questions or feedback.';
export const CONTACT_EMAIL = 'support@halalelites.com';

// Testimonials Section

export const TESTIMONIALS = [
  {
    quote: "halalElites has transformed the way I work. I'm more organized and focused than ever!",
    author: "Habeeb, CEO of halalElites"
  },
  {
    quote: "The AI suggestions are a game changer. They help me prioritize tasks effectively.",
    author: "Mr X, Freelance Designer"
  },
  {
    quote: "I love the smart scheduling feature! It takes the stress out of planning my day.",
    author: "Ibrahim, Project Manager"
  }
];

// Features Section, use icons when available, prefferably lucide icons
export const FEATURES = [
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'Automatically plan your day based on priority and deadlines.',
  },
  {
    icon: '🤖',
    title: 'AI Assistance',
    description: 'Get AI-generated suggestions to improve productivity.',
  },
  {
    icon: '🔔',
    title: 'Reminders & Alerts',
    description: 'Never miss a task with intelligent reminders and alerts.',
  },
];

// Pricing Plans (if applicable)
export const PRICING_PLANS = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic task management', 'Limited AI suggestions', '1 project'],
  },
  {
    name: 'Pro',
    price: '$12/mo',
    features: ['Unlimited projects', 'Full AI suite', 'Priority support'],
  },
];

// Footer Info
export const FOOTER_TEXT = '© 2025 HalalElites empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.';
export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Settings', href: '/cookie-settings' },
];


export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: 'X',
    url: 'https://twitter.com/yourprofile',
    icon: X,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourprofile',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
  },
];

// HOW TO USE 
// components/sections/Contact.tsx
// import { SITE_CONFIG } from '@/lib/constants'

// export function Contact() {
//   return (
//     <section>
//       <h2>Contact {SITE_CONFIG.name}</h2>
//       <p>Phone: {SITE_CONFIG.contact.phone}</p>
//       <p>Email: {SITE_CONFIG.contact.email}</p>
//     </section>
//   )
// }
