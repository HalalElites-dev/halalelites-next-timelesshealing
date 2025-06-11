'use client';
import { SITE_TITLE } from '@/lib/constants'
import React from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { ThemeToggle } from '../ThemeToggle'
import { MobileMenu } from '@/components/layout/mobileMenu'
import { scrollToSection  } from '@/lib/utils'

export function Header() {
        return (
            <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <div className='max-w-7xl flex h-16 items-center justify-between m-auto'>

                    {/* left section: Site title or logo*/}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}>
                    <div className='flex items-center space-x-2'>
                        <div className='h-8 w-8 rounded bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary'></div>
                        <span className='text-xl font-bold text-primary'>{SITE_TITLE}</span>
                    </div>
                    </a>


                    {/* middle section: Desktop Navigation */}
                    <div className="hidden md:flex"> 
                        <Navigation />
                    </div>


                    {/* Right Section: Theme Toggle, CTA Button (Desktop) & Mobile Menu (Mobile) */}
                    <div className='flex items-center space-x-2'> 
                        {/* Desktop Items */}
                        <div className="hidden md:flex items-center space-x-2">
                            <ThemeToggle />
                            <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>Get Started</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden'>
                            <ThemeToggle />
                            <MobileMenu />
                        </div>
                    </div>


                </div>
            </header>
        )
}