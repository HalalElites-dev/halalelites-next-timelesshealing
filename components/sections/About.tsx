import React from 'react'
import { ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'

const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{ABOUT_HEADING}</h2>
          <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
            {ABOUT_SUBTEXT}
          </p>
        </div>

       
      </div>
    </section>
  )
}

export default About