import React from 'react'
import { ABOUT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'


const About = () => {
  return (
    <section id='about' className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{ABOUT_HEADING}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {ABOUT_SUBTEXT}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {ABOUT.map((about, index) => (
          <div key={index} className='bg-background p-8 rounded-lg shadow-sm border border-border'>
            <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6'>
              <span className='text-2xl text-primary-foreground'>{about.icon}</span>
            </div>

            <h3 className='text-xl font-semibold text-foreground mb-3'>{about.title}</h3>
            <p className='text-muted-foreground mb-6'>{about.description}</p>

          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default About