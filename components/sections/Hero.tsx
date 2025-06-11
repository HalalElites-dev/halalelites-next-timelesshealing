import React from 'react'
import { HERO_HEADING, HERO_SUBTEXT, HERO_CTA_TEXT, HERO_CTA_LINK } from '@/lib/constants'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section id='#home' className='py-20 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground'>{HERO_HEADING}</h1>
                        <p className='text-xl mb-8 max-w-lg text-muted-foreground'>{HERO_SUBTEXT}</p>
                        <div className=' flex flex-col sm:flex-row gap-4'>
                            <Button size={'lg'} className='bg-primary hover:text-primary-foreground text-secondary'>
                                {HERO_CTA_TEXT}
                            </Button>
                            <Button variant='outline' size={'lg'} className='bg-secondary text-primary hover:text-secondary-foreground'>
                                <a href={HERO_CTA_LINK} target='_blank' rel='noopener noreferrer'>Learn More</a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 bg-muted rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-24 h-24 "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero