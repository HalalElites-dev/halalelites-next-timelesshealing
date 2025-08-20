import React from 'react'
import { TESTIMONIALS } from '@/lib/constants'
const Testimonials = () => {
    return (
        <section id='testimonials' className='py-20 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-5xl font-bold text-foreground mb-4'>What Our Clients Say</h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Hijama, or cupping therapy, has been a transformative experience for many of our clients. Here are some of their stories.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className='bg-secondary p-8 rounded-lg border border-border flex flex-col'>
                            {/* Star ratings */}
                            <div className='flex mb-6'>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className='w-5 h-5 text-brand-primary'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                ))}
                            </div>
                            {/* Quote */}
                            <blockquote className='text-muted-foreground mb-6 flex-grow'>
                                {testimonial.quote}
                            </blockquote>
                            {/* Author */}
                            <div className='flex items-center mt-auto'>
                                <div className='w-10 h-10 bg-muted rounded-full mr-3'></div>
                                <div>
                                    <p className='font-semibold text-foreground'>{testimonial.author}</p>
                                    <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials