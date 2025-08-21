'use client';

import React, { useEffect, useState } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

const Testimonials = () => {


    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])


    return (
        <section id='testimonials' className='py-24 px-6 bg-[#f0f0f0] '>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>
                    <div className='flex items-center justify-center  space-x-2 '>
                       

                    </div>

                    <h2 className='text-5xl md:text-6xl  text-foreground mb-8 leading-tight tracking-tight font-heading font-bold uppercase'>
                       What Our Clients Say
                    </h2>

                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-background rounded-2xl shadow-xl p-8 md:p-12 border-primary/30 border-2">
                        <div className="text-center">
                           

                            <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                                &quot;{TESTIMONIALS[currentTestimonial].quote}&quot;
                            </blockquote>

                            <cite className="font-semibold text-muted-foreground text-lg">
                                — {TESTIMONIALS[currentTestimonial].author}
                            </cite>
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials