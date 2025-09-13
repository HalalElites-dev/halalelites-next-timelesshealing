'use client';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const Services = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  const steps = [
    { step: "01", title: "Consultation", desc: "We discuss your health goals and concerns", detail: "Initial assessment to understand your specific needs and medical history" },
    { step: "02", title: "Preparation", desc: "Comfortable positioning and area cleaning", detail: "Ensuring optimal positioning and sanitization for effective treatment" },
    { step: "03", title: "Cup Placement", desc: "Strategic placement based on your needs", detail: "Precise placement targeting your specific areas of concern" },
    { step: "04", title: "Treatment", desc: "15-20 minutes of gentle suction therapy", detail: "Relaxing therapeutic session promoting blood flow and healing" },
    { step: "05", title: "Aftercare", desc: "Instructions for optimal healing", detail: "Comprehensive guidance for post-treatment care and recovery" }
  ]

  return (
    <div id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with centered layout */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Your Healing Journey</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our comprehensive treatment process designed for your comfort and optimal results
          </p> */}
        </div>

        {/* Interactive timeline layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left: Steps timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              <div className="space-y-8">
                {steps.map((item, i) => (
                  <div 
                    key={i} 
                    className={`relative flex gap-6 cursor-pointer transition-all duration-300 p-4 rounded-xl ${
                      activeStep === i ? 'bg-white shadow-lg scale-105' : 'hover:bg-white/50'
                    }`}
                    onClick={() => setActiveStep(i)}
                  >
                    {/* Step number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full text-white font-bold flex items-center justify-center transition-all duration-300 ${
                      activeStep === i 
                        ? 'bg-primary shadow-lg transform scale-110' 
                        : 'bg-primary/70'
                    }`}>
                      {item.step}
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg transition-colors ${
                        activeStep === i ? 'text-primary' : 'text-gray-700'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                      
                      {/* Expanded detail for active step */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        activeStep === i ? 'max-h-20 mt-2' : 'max-h-0'
                      }`}>
                        <p className="text-sm text-accent font-medium italic">{item.detail}</p>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeStep === i && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="md:w-3 md:h-3 bg-accent rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Treatment card with floating design */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform  transition-transform duration-300">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Treatment Details</h3>
                  <p className="text-primary-foreground/80">Everything you need to know</p>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Pricing with highlight */}
                  <div className="text-center">
                    <div className="inline-block bg-background rounded-2xl p-6 border-2 border-accent/20">
                      <div className="text-3xl font-bold text-primary mb-1">$20 
                        <span className="text-sm text-muted-foreground font-normal ml-1">per cup</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Most sessions: 8-10 cups</div>
                    </div>
                  </div>
                  
                  {/* Session details in cards */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-l-primary">
                      <h4 className="font-semibold text-primary mb-1">Session Length</h4>
                      <p className="text-sm text-muted-foreground">45-60 minutes including consultation</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-l-accent">
                      <h4 className="font-semibold text-primary mb-2">Perfect For:</h4>
                      <div className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                        {["Chronic pain relief", "Improved circulation", "Stress reduction", "Sports recovery"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button with animation */}
                  <Button className="w-full bg-primary hover:from-primary/90 hover:to-accent/90 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 transform">
                    <Link href="https://calendly.com/timelesshealingllc/30min" target="_blank" className="flex w-full h-full items-center justify-center gap-2">
                      Book Your Healing Session
                      
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial or trust indicators */}
        <div className="text-center bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-muted-foreground italic mb-4">
            &quot;Experience the prophetic sunnah of cupping therapy with modern comfort and care&quot;
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Licensed Practitioner
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Sterile Equipment
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Personalized Care
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services