import React from 'react'
import { ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'

const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-white">
      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{ABOUT_HEADING}</h2>
          <p className="text-xl italic text-muted-foreground max-w-8xl mx-auto">
            {ABOUT_SUBTEXT}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
        </div>
      </div>
    </section>
  )
}

export default About