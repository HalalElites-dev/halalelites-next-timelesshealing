import React from 'react'
import { ABOUT_HEADING, ABOUT_SUBTEXT } from '@/lib/constants'


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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{ABOUT_HEADING}</h3>
            <p className="text-muted-foreground">
              {ABOUT_SUBTEXT}
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{ABOUT_HEADING}</h3>
            <p className="text-muted-foreground">
              {ABOUT_SUBTEXT}
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg hover:shadow-sm transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{ABOUT_HEADING}</h3>
            <p className="text-muted-foreground">
              {ABOUT_SUBTEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default About