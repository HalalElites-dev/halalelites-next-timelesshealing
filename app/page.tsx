import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Services/>
    <Faq/>
    <Testimonials/>
    <Contact/>
  </main>
  );
}
