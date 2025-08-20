import React from 'react'
import { ABOUT_CONTENT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'
import Image from 'next/image'
const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-white">
      <div className=" max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* image here */}
          <div className='relative'>
            <div className=' w-full h-76 md:h-96 '>
            <Image src="/about-us.png" alt="About Us" fill className="w-full h-full rounded-lg shadow-md" />
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-md flex items-center justify-center shadow-lg">
              <Image src="/timelesshealing.jpeg" alt="Logo" width={64} height={64} className="h-auto w-auto" />
            </div>
          </div>
          </div>

          <div className="text-left mb-16">
            <div className='flex items-center gap-2'>
              <div className="h-0.5 w-6 bg-foreground"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-800">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">{ABOUT_HEADING}</h2>
            <p className="text-xl italic text-muted-foreground max-w-8xl mx-auto md:mb-2">
              {ABOUT_SUBTEXT}
            </p>
            <p className="text-xl italic text-muted-foreground max-w-8xl mx-auto">
              {ABOUT_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About