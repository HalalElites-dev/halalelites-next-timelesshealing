import React from 'react'

const CTASection = () => {
  return (
    <div className='py-20 px-6 bg-background'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>Ready to Get Started?</h2>
        <p className='text-xl text-muted-foreground mb-8'>
          Sign up today and take your productivity to the next level with HalalElites.
        </p>
        <a href='/signup' className='inline-block bg-brand-primary text-white py-3 px-6 rounded-lg'>
          Start Free Trial
        </a>
      </div>
    </div>
  )
}

export default CTASection