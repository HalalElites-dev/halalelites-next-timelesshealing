import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTASection";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Services/>
    <Testimonials/>
    <CTASection/>
    <Contact/>
  </main>
  );
}
