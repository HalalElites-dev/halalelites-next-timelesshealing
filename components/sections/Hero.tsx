import React from 'react'
import { HERO_HEADING, HERO_SUBTEXT, HERO_CTA_TEXT, HERO_CTA_LINK } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const Hero = () => {
    return (
        <section id='home' className='relative py-35 px-6 bg-white'>
            {/* background image */}
            <div className='absolute inset-0 bg-[url("/hero-imagee.png")] bg-cover bg-no-repeat bg-center opacity-70'></div>
            {/* content */}
            <div className='relative max-w-8xl mx-auto'>
                <div className='gap-12 flex justify-center'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold max-w-4xl mb-6 text-foreground leading-tight  '>{HERO_HEADING}</h1>
                        <p className='text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground m-auto font-heading'>{HERO_SUBTEXT}</p>
                        <div className=' flex flex-col sm:flex-row gap-4 md:justify-center'>
                            <Button size={'lg'} className='bg-primary hover:text-primary-foreground text-background md:text-xl md:py-6 font-bold font-heading border border-transparent'>
                                <Link href={HERO_CTA_LINK}>{HERO_CTA_TEXT}</Link>
                            </Button>
                            <Button variant='outline' size={'lg'} className='bg-transparent text-primary hover:text-background hover:bg-accent md:text-xl md:py-6 font-bold font-heading border-primary hover:border-accent'>
                                <Link href="tel:555-123-4567">Consult Us</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero