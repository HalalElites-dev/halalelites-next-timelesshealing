"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Navigation } from "./Navigation"
import { Calendar, MapPin, Phone,  X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 left-0 right-0 z-40 w-full bg-white shadow-md">
      <div className="flex">
        {/* Logo Area */}
        <div
          className={`bg-foreground flex items-center justify-center transition-[width] duration-300 ${
            isScrolled ? "w-28 lg:w-48" : "w-32 lg:w-72"
          }`}
        >
          <Link
            href="/"
            className="flex-shrink-0"
          >
            <Image
              src="/timelesshealing.jpeg"
              alt="Timeless Healing Logo"
              width={220}
              height={50}

              className={`h-auto w-auto  max-h-12  ${isScrolled ? "md:max-h-16 " : "md:max-h-37 "} transition-all duration-300`}
            />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col">
          {/* Top Info Bar (desktop only) */}
          <div
            className={`hidden lg:flex items-center justify-end px-6 bg-white border-b overflow-hidden transition-all duration-300 ${
              isScrolled ? "opacity-0 max-h-0 py-0" : "opacity-100 max-h-20 py-3"
            }`}
          >
            <div className="flex items-center space-x-8 text-sm ">
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
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Hours (below logo) */}
          <div
            className={`lg:hidden text-center bg-gray-100 transition-all duration-300 ${
              isScrolled ? "opacity-0 max-h-0 py-0" : "opacity-100 max-h-10 py-2"
            }`}
          >
            <span className="text-muted-foreground text-sm">
              Mon-Fri: 9am - 6pm
            </span>
          </div>

          {/* Main Nav Row */}
          <div
            className={`flex items-center justify-between px-6 transition-all duration-300 ${
              isScrolled ? "py-3" : "py-6"
            }`}
          >
            <nav className="hidden md:flex items-center space-x-8">
              <Navigation />
            </nav>

            <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-lg">
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

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`fixed inset-0 bg-black z-40 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-6">
          <Image
            src="/timelesshealing.jpeg"
            alt="Timeless Healing Logo"
            width={180}
            height={40}
            className="h-auto w-auto"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X className="h-10 w-10 text-white" />
          </button>
        </div>

        <nav className="bg-white min-h-screen px-8 py-12">
          <div
            className="space-y-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Navigation />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-xl">
              <Link
                className="flex w-full h-full items-center justify-center"
                href="https://calendly.com/timelesshealingllc/30min"
                target="_blank"
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
