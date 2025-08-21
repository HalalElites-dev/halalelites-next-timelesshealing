"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Navigation } from "./Navigation"
import { Calendar, MapPin, Phone, X } from "lucide-react"

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
        className="fixed top-0 left-0 right-0 z-40 w-full bg-white shadow-md transition-all duration-300 ease-out"
      >
        <div className="flex">
          {/* Logo Area */}
          <div className="bg-white flex items-center justify-center flex-shrink-0 w-32 md:w-72 transition-all duration-300 [.is-scrolled_&]:w-28 [.is-scrolled_&]:md:w-48">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/timelesshealing.jpeg"
                alt="Timeless Healing Logo"
                width={1000}
                height={50}
                className="h-auto w-auto max-h-12 md:max-h-36 transition-all duration-300 [.is-scrolled_&]:max-h-12 [.is-scrolled_&]:md:max-h-16"
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col">
            {/* Top Info Bar (desktop only) */}
            <div className="hidden lg:flex items-center justify-end px-6 bg-white border-b overflow-hidden transition-all duration-300 max-h-20 py-3 [.is-scrolled_&]:max-h-0 [.is-scrolled_&]:py-0 [.is-scrolled_&]:opacity-0">
              <div className="flex items-center space-x-8 text-sm">
                {[
                  {
                    icon: Phone,
                    label: "TIMELESS HEALING",
                    value: "(555) 123-4567",
                    link: "tel:555-123-4567",
                  },
                  { icon: MapPin, label: "LOCATION", value: "Pittsburgh, PA" },
                  { icon: Calendar, label: "HOURS", value: "Mon-Fri: 9am - 6pm" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <item.icon className="text-primary h-6 w-6" />
                    <div className="flex flex-col">
                      <span className="text-black font-bold text-md">
                        {item.label}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Hours (below logo) */}
            <div className="lg:hidden text-center bg-gray-100 overflow-hidden transition-all duration-300 max-h-10 py-2 [.is-scrolled_&]:max-h-0 [.is-scrolled_&]:py-0 [.is-scrolled_&]:opacity-0">
              <span className="text-muted-foreground text-sm block">
                Mon-Fri: 9am - 6pm
              </span>
            </div>

            {/* Main Nav Row */}
            <div className="flex items-center justify-between px-6 py-6 transition-all duration-300 [.is-scrolled_&]:py-3">
              <nav className="hidden md:flex items-center space-x-8">
                <Navigation />
              </nav>

              <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-lg font-heading">
                <Link
                  className="flex w-full h-full items-center justify-center"
                  href="https://calendly.com/timelesshealingllc/30min"
                  target="_blank"
                >
                  Book Appointment
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex flex-col space-y-1 p-2 ml-auto z-50 relative"
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Image
            src="/timelesshealing.jpeg"
            alt="Timeless Healing Logo"
            width={150}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-900" />
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
                href="tel:555-123-4567"
                className="text-gray-900 hover:text-primary transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-gray-600">Pittsburgh, PA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-gray-600">Mon-Fri: 9am - 6pm</span>
            </div>
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