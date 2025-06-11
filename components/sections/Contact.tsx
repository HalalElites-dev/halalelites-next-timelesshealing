import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_HEADING, CONTACT_PHONE, CONTACT_SUBTEXT } from '@/lib/constants'
import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/button'
const Contact = () => {
     return (
        <section id='contact' className='py-20 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                {/* Main grid container for a 2-column layout on large screens */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                    {/* First Column: Heading, Subtext, and Contact Details */}
                    <div>
                        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>{CONTACT_HEADING}</h2>
                        <p className='text-xl text-muted-foreground mb-8'>{CONTACT_SUBTEXT}</p>

                        {/* Contact details list, nested within the first column */}
                        <div className='space-y-6'>
                            <div className='flex items-start'>
                                <div className='flex-shrink-0 mt-1'>
                                    <Mail className='w-6 h-6 text-primary' />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-foreground'>Email</h3>
                                    <p className='text-muted-foreground'>{CONTACT_EMAIL}</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex-shrink-0 mt-1'>
                                    <MapPin className='w-6 h-6 text-primary' />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-foreground'>Office</h3>
                                    <p className='text-muted-foreground'>{CONTACT_ADDRESS}</p>
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='flex-shrink-0 mt-1'>
                                    <Phone className='w-6 h-6 text-primary' />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-foreground'>Phone</h3>
                                    <p className='text-muted-foreground'>{CONTACT_PHONE}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column: The Form Container */}
                    <div className='bg-secondary p-8 rounded-lg border border-border'>
                        {/* The form itself, now purely for display without interactivity */}
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-foreground mb-1'>Name</label>
                                <input type="text" id="name" className='w-full h-10 px-3 py-2 ring-accent bg-background rounded-md border border-border text-foreground' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-foreground mb-1'>Email</label>
                                <input type="email" id="email" className='w-full h-10 px-3 py-2 ring-accent bg-background rounded-md border border-border text-foreground' />
                            </div>
                            {/* Adding the 'Company' field for layout parity, if it was missing */}
                            <div>
                                <label htmlFor="company" className='block text-sm font-medium text-foreground mb-1'>Company</label>
                                <input type="text" id="company" className='w-full h-10 px-3 py-2 ring-accent bg-background rounded-md border border-border text-foreground' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-foreground mb-1'>Message</label>
                                <textarea id="message" rows={4} className='w-full min-h-[120px] h-24 px-3 py-2 ring-accent bg-background rounded-md border border-border text-foreground' />
                            </div>
                            <Button type="submit" className='w-full bg-primary text-primary-foreground hover:bg-popover-foreground'>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact