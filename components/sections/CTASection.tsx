import React from 'react'
import { Button } from '@/components/ui/button'
const CTASection = () => {
  return (
   <section id='cta' className='py-20 px-6 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary '>
    <div className='max-w-7xl mx-auto text-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground mb-4'>Ready to Get Started?</h2>
      <p className='text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto'>Join us today and elevate your productivity with HalalElites.</p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center '>
        <Button 
        size="lg" 
        className='bg-background text-foreground hover:bg-backround/90 transition-colors'
        >
        Join us now
        </Button>
        <Button
            size="lg"
            variant="default"
            className="text-primary-foreground"
          >
            Schedule demo
          </Button>
      </div>
    </div>
   </section>
  )
}

export default CTASection