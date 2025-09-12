import React from 'react'
import { ABOUT_CONTENT, ABOUT_HEADING, ABOUT_SUBTEXT, HERO_CTA_LINK, HERO_CTA_TEXT } from '@/lib/constants'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* image here */}
          <div className='relative'>
            <div className=' w-auto h-96 md:h-160 lg:h-166 relative'>
              <Image src="/about-us.png" alt="About Us" fill className="w-auto h-auto rounded-lg shadow-md" />
              <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 w-24 h-24 md:w-60 md:h-32  bg-primary rounded-md flex items-center justify-center shadow-lg">
                <span className='text-md md:text-2xl font-heading font-bold text-left p-6 text-background md:shadow-md '>Sunnah-Based Healing</span>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="text-left mb-16">
            <div className='flex items-center gap-2'>
              <div className="h-0.5 w-6 bg-primary"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">{ABOUT_HEADING}</h2>
            <p className="text-xl italic text-muted-foreground max-w-8xl mx-auto md:mb-2 leading-relaxed">
              {ABOUT_SUBTEXT}
            </p>
            <p className="text-xl italic text-muted-foreground max-w-8xl mx-auto md:mt-10 leading-relaxed">
              {ABOUT_CONTENT}
            </p>
            <div className="mt-8">
              <ul className="flex flex-col gap-6 md:flex-col md:gap-10">
              <li className="flex items-start gap-4">
                <span className="bg-primary/10 rounded-full p-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-primary"><path d="M19.5 13.5 12 21l-7.5-7.5a5.25 5.25 0 0 1 7.5-7.5 5.25 5.25 0 0 1 7.5 7.5Z"/></svg>
                </span>
                <div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-1">Compassionate Care</h3>
                <p className="text-muted-foreground text-base">Personalized healing rooted in authentic tradition and empathy.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary/10 rounded-full p-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-primary"><path d="M12 3v2"/><path d="M12 19v2"/><path d="M5.22 5.22l1.42 1.42"/><path d="M17.36 17.36l1.42 1.42"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 1.42-1.42"/><path d="m16.24 7.76 1.42-1.42"/><circle cx="12" cy="12" r="5"/></svg>
                </span>
                <div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-1">Holistic Solutions</h3>
                <p className="text-muted-foreground text-base">Integrating mind, body, and spirit for lasting wellness.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary/10 rounded-full p-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-1">Trusted Expertise</h3>
                <p className="text-muted-foreground text-base">Guided by knowledge, experience, and proven results.</p>
                </div>
              </li>
              </ul>
            </div>
            <div className='mt-8'>
               <Button size={'lg'} className='bg-primary hover:text-primary-foreground text-background md:text-xl md:py-6 font-bold font-heading border border-transparent'>
                                <Link href={HERO_CTA_LINK} target='_blank'>{HERO_CTA_TEXT}</Link>
                            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About