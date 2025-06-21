import React from 'react'
import { ABOUT, ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'
import Image from 'next/image'

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

        <div className="space-y-24">
          {ABOUT.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Image/Visual side */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                  </div>
                  {/* Timeline connector - only show if not the last item */}
                  {index < ABOUT.length - 1 && (
                    <div className="absolute h-24 w-0.5 bg-border left-1/2 -bottom-24 transform -translate-x-1/2 hidden md:block"></div>
                  )}
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About