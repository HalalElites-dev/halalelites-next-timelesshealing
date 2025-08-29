import React from 'react'
import { ABOUT_CONTENT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'
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
            <div className=' w-auto h-76 md:h-166 '>
              <Image src="/about-us.png" alt="About Us" fill className="w-full h-full rounded-lg shadow-md" />
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
            {/* <div>
              <div className='w-full h-0.5 bg-foreground mt-6 mb-4'>
                <ul className='flex text-muted-foreground'>
                  <li> <span className='text-xs md:text-lg font-heading font-bold text-left p-6 text-black shadow-md'>Our Mission</span><h3 className='text-sm md:text-xl font-heading font-bold text-left p-6 text-black shadow-md'></h3></li>
                  <li><span className='text-xs md:text-lg font-heading font-bold text-left p-6 text-black shadow-md'>Our Vision</span><h3 className='text-sm md:text-xl font-heading font-bold text-left p-6 text-black shadow-md'></h3></li>
                  <li><span className='text-xs md:text-lg font-heading font-bold text-left p-6 text-black shadow-md'>Our Values</span><h3 className='text-sm md:text-xl font-heading font-bold text-left p-6 text-black shadow-md'></h3></li>
                </ul>
              </div>
            </div> */}
            <div className='mt-8'>
              <Button variant='outline' size={'lg'} className='bg-primary text-white md:bg-transparent md:text-primary hover:text-background hover:bg-accent md:text-xl md:py-6 font-bold font-heading border-primary hover:border-accent'>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About