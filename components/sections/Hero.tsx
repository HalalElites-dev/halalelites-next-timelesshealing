import React from 'react'
import { HERO_HEADING, HERO_SUBTEXT, HERO_CTA_TEXT, HERO_CTA_LINK } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Hero = () => {
    return (
        <section id='home' className='py-60 px-6 bg-background'>
            {/* background image */}
            <div className='max-w-8xl mx-auto'>
                <div className='gap-12 flex justify-center'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold  mb-6 text-foreground leading-tight '>{HERO_HEADING}</h1>
                        <p className='text-xl md:text-2xl mb-8  text-muted-foreground'>{HERO_SUBTEXT}</p>
                        <div className=' flex flex-col sm:flex-row gap-4 md:justify-center'>
                            <Button size={'lg'} className='bg-primary hover:text-primary-foreground text-secondary' >
                                <Link href={HERO_CTA_LINK}>{HERO_CTA_TEXT}</Link>
                            </Button>
                            <Button variant='outline' size={'lg'} className='bg-secondary text-primary hover:text-secondary-foreground'>
                                <Link href="#about">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero