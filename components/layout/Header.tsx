"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Navigation } from "./Navigation"
import { MapPin, Phone, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      
      const scrollY = window.scrollY
      const isScrolled = scrollY > 50
      
      // Add/remove CSS class instead of React state
      if (isScrolled) {
        headerRef.current.classList.add('is-scrolled')
      } else {
        headerRef.current.classList.remove('is-scrolled')
      }
    }

    // Use requestAnimationFrame for smooth updates
    let rafId: number | null = null
    const smoothScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        handleScroll()
        rafId = null
      })
    }

    window.addEventListener("scroll", smoothScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", smoothScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 w-full bg-background shadow-md transition-all duration-300 ease-out"
      >
        <div className="flex">
          {/* Logo Area */}
          <div className="bg-primary flex items-center justify-center flex-shrink-0 w-32 md:w-72 transition-all duration-300 [.is-scrolled_&]:w-28 [.is-scrolled_&]:md:w-48">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="Timeless Healing Logo"
                width={1000}
                height={50}
                className="h-auto w-auto max-h-16 lg:max-h-32 transition-all duration-300 [.is-scrolled_&]:max-h-8 [.is-scrolled_&]:md:max-h-12"
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col">
            {/* Top Info Bar (desktop only - now xl: instead of lg:) */}
            <div className="hidden xl:flex items-center justify-end px-6 bg-primary border-b overflow-hidden transition-all duration-300 max-h-20 py-3 [.is-scrolled_&]:max-h-0 [.is-scrolled_&]:py-0 [.is-scrolled_&]:opacity-0">
              <div className="flex items-center space-x-8 text-sm">
                {[
                  {
                    icon: Phone,
                    label: "TIMELESS HEALING",
                    value: "(614) 828-7446",
                    link: "tel:+16148287446",
                  },
                  { icon: MapPin, label: "LOCATION", value: "Columbus, OH" },
                  // { icon: Calendar, label: "HOURS", value: "Mon-Fri: 9am - 6pm" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <item.icon className="text-accent h-6 w-6" />
                    <div className="flex flex-col">
                      <span className="text-background font-bold text-md">
                        {item.label}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-background hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-background">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Hours (below logo - now shows up to xl:) */}
            {/* <div className="xl:hidden text-center bg-primary overflow-hidden transition-all duration-300 max-h-10 py-2 [.is-scrolled_&]:max-h-0 [.is-scrolled_&]:py-0 [.is-scrolled_&]:opacity-0">
              <span className="text-accent-foreground text-sm block">
                Mon-Fri: 9am - 6pm
              </span>
            </div> */}

            {/* Main Nav Row */}
            <div className="flex items-center justify-between px-6 py-6 transition-all duration-300 [.is-scrolled_&]:py-3">
              {/* Desktop navigation - now only shows on xl: screens */}
              <nav className="hidden xl:flex items-center space-x-8">
                <Navigation />
              </nav>

              {/* Desktop CTA button - now only shows on xl: screens */}
              <Button className="hidden xl:block bg-primary hover:bg-primary/90  hover:text-primary-foreground text-background font-bold px-6 py-3 text-lg font-heading">
                <Link
                  className="flex w-full h-full items-center justify-center"
                  href="https://calendly.com/timelesshealingllc/30min"
                  target="_blank"
                >
                  Book Appointment
                </Link>
              </Button>

              {/* Mobile Menu Toggle - now shows up to xl: instead of lg: */}
              <button
                className="xl:hidden flex flex-col space-y-1 p-2 ml-auto z-50 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-brand-primary bg-foreground">
         <Image
           src="/logo.webp"
           alt="Timeless Healing Logo"
           width={150}
           height={40}
           className="h-20 w-auto object-contain"
         />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-background" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="p-6 space-y-6 ">
          <div onClick={() => setIsMobileMenuOpen(false)}>
            <Navigation />
          </div>
          
          {/* Mobile Contact Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a 
                href="tel:+16148287446"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (614) 828-7446
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Columbus, OH</span>
            </div>
            {/* <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Mon-Fri: 9am - 6pm</span>
            </div> */}
          </div>

          {/* Mobile CTA Button */}
          <Button 
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg font-heading"
          >
            <Link
              href="https://calendly.com/timelesshealingllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </Button>
        </nav>
      </div>
    </>
  )
}