import { X, Github, Linkedin, LucideIcon,  } from "lucide-react";


// Navigation Links
export const NAV_LINKS = [
  { label: 'ABOUT', href: '/#about' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'TESTIMONIALS', href: '/#testimonials' },
  { label: 'CONTACT', href: '/#contact' },
  { label: 'WHAT IS HIJAMA?', href: '/hijama' },
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
export const CONTACT_ADDRESS = '3252 Cleveland Avenue, Columbus, OH';


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
    title: "Hijama Cupping Therapy",
    description: "Traditional cupping therapy charged per cup used. Each cup is individually placed and treated according to your specific needs.",
    price: "$20 per cup",
    session: "Varies by treatment",
    tags: ["Traditional", "Per Cup", "Customized"],
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
  },
  {
    question: "Does hijama break the wudu?",
    answer: "It does not break the wudu if the amount of blood is little. However, if there is a lot of blood, it will break the wudu."}
]

// Footer Info
export const FOOTER_TEXT = 'At Timeless Healing, we are committed to providing the highest quality care and support.';
export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  // { label: 'Cookie Settings', href: '/cookie-settings' },
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
