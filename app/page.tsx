import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
// import Testimonials from "@/components/sections/Testimonials";
import Hijama from "@/components/sections/hijama";
export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    
    <Hijama/>
    <Services/>
    <Faq/>
    {/* <Testimonials/> */}
    <Contact/>
  </main>
  );
}
