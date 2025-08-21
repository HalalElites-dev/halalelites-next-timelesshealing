import { X, Github, Linkedin, LucideIcon,  } from "lucide-react";


// Navigation Links
export const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'WHAT IS HIJAMA?', href: '/hijama' },
  { label: 'FAQ', href: '/faq' },
]

// Hero Section
export const HERO_HEADING = 'Traditional Hijama Therapy ';
export const HERO_SUBTEXT = 'Experience the healing power of cupping therapy rooted in Sunnah tradition. Professional, safe, and spiritually grounded wellness treatments.';
export const HERO_CTA_TEXT = 'Book Appointment';
export const HERO_CTA_LINK = 'https://calendly.com/timelesshealingllc/30min';

// About Section
export const ABOUT_HEADING = 'Healing Through Sunnah';
export const ABOUT_SUBTEXT = 'Timeless Healing, we offer Hijama, or cupping therapy, a traditional healing practice rooted in Sunnah. It involves creating suction on the skin to promote healing and well-being.';
export const ABOUT_CONTENT = `
At Timeless Healing, we believe in the power of Hijama to restore balance and promote holistic health. Our trained practitioners use safe and effective techniques to provide a rejuvenating experience.

Whether you're seeking relief from pain, stress reduction, or overall wellness, Hijama can be a valuable part of your health journey.
`;
// Contact Section
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_SUBTEXT = 'We would love to hear from you! Reach out with any questions or feedback.';
export const CONTACT_EMAIL = 'Timelesshealingllc@gmail.com';
export const CONTACT_PHONE = '+1 (614) 828-7446';
export const CONTACT_ADDRESS = '123 HalalElites St, Suite 100, City, Country';


// Testimonials Section
export const TESTIMONIALS = [
  {
    quote: "Timeless Healing has changed my life. The Hijama sessions are incredibly relaxing and effective.",
    author: "Habeeb",
    role:   "Business Analyst"
  },
  {
    quote: "The Hijama sessions at Timeless Healing are a must-try! I felt so rejuvenated afterward.",
    author: "Mr X",
    role:   "Freelance Designer"
  },
  {
    quote: "I always feel so refreshed after my sessions at Timeless Healing.",
    author: "Ibrahim",
    role:   "Project Manager"
  }
];




// Services Section
export const SERVICES_HEADING = "Our Services"
export const SERVICES_SUBTEXT =
  "Our Hijama services are designed to promote healing and well-being."

export const SERVICES = [
  {
    title: "Basic Hijama",
    description: "A traditional cupping therapy session to promote healing and well-being.",
    price: "$75",
    session: "60 minutes",
    tags: ["Traditional", "Healing", "Wellness"],
  },
  {
    title: "Premium Hijama",
    description: "A comprehensive cupping therapy session with advanced techniques for enhanced healing.",
    price: "$100",
    session: "90 minutes",
    tags: ["Advanced", "Comprehensive", "Enhanced"],
  },
  {
    title: "Dry Cupping",
    description: "A specialized cupping therapy technique that focuses on specific areas for targeted relief.",
    price: "$50",
    session: "60 minutes",
    tags: ["Specialized", "Targeted", "Relief"],
  },
  {
    title: "Consultation",
    description: "Professional consultation to determine the best treatment plan for your specific needs.",
    price: "$25",
    session: "30 minutes",
    tags: ["Assessment", "Planning", "Personalized"],
  },
]

// hijama FAQ info
export const FAQ_HEADING = "Frequently Asked Questions";
export const FAQ =[
  {
    question: "What is Hijama?",
    answer: "Hijama, or cupping therapy, is a traditional healing practice that involves creating suction on the skin to promote healing and well-being."
  },
  {
    question: "Is Hijama safe?",
    answer: "Yes, Hijama is considered safe when performed by trained professionals using sterile equipment."
  },
  {
    question: "What should I expect during a session?",
    answer: "During a Hijama session, you can expect a thorough consultation, followed by the application of cups to specific areas of the body."
  },
  {
    question: "How often should I get Hijama?",
    answer: "The frequency of Hijama sessions depends on individual needs and health goals. Your practitioner will provide personalized recommendations."
  }
]

// Footer Info
export const FOOTER_TEXT = 'At Timeless Healing, we are committed to providing the highest quality care and support.';
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
