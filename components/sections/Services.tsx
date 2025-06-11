import React from 'react'
import { SERVICES_HEADING, SERVICES_SUBTEXT, SERVICES } from '@/lib/constants'
const Services = () => {
  return (
    <section id='services' className='py-20 px-6 bg-secondary'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>{SERVICES_HEADING}</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>{SERVICES_SUBTEXT}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {SERVICES.map((service, index) => (
            <div key={index} className='bg-background p-8 rounded-lg shadow-sm border border-border'>
              <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6'>
                <span className='text-2xl text-primary-foreground'>{service.icon}</span>
              </div>

              <h3 className='text-xl font-semibold text-foreground mb-3'>{service.title}</h3>
              <p className='text-muted-foreground mb-6'>{service.description}</p>

              {service.features && (
                <ul className='space-y-2 text-muted-foreground'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center'>
                      <svg
                        className='w-5 h-5 mr-2 text-primary'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services