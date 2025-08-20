"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { scrollToSection } from "@/lib/utils"
import { Navigation } from "./Navigation"
import { MapPin, Phone, Timer } from "lucide-react"
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="bg-white text-foreground fixed top-0 left-0 right-0 z-40 shadow-md transition-all duration-300">
            <div className="flex">
                <div
                    className={`bg-foreground flex items-center  justify-center transition-all duration-300  ${isScrolled ? "w-48 lg:w-48 " : "w-32 lg:w-72"
                        }`}
                >
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("home")
                        }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/timelesshealing.jpeg"
                            alt="Timeless Healing Logo"
                            width={isScrolled ? 180 : 265}
                            height={isScrolled ? 25 : 37}
                            className={`transition-all duration-300  ${isScrolled ? "h-full " : "h-42 "} `}
                        />
                    </a>
                </div>

                <div className="flex-1 flex flex-col">
                    <div
                        className={`hidden lg:flex items-center justify-end px-6 py-3 bg-white border-b transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-15 opacity-100"
                            }`}
                    >
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <Phone className="text-primary h-6 w-6" />
                                <div className="flex flex-col">
                                    <span className="text-primary font-semibold text-sm">TIMELESS HEALING</span>
                                    <a href="tel:555-123-4567" className="text-muted-foreground hover:text-primary text-sm">
                                        (555) 123-4567
                                    </a>
                                </div>
                            </div>
                            {/* divider between each info item */}
                            <div className="h-6 w-px bg-black" />

                            <div className="flex items-center space-x-2">
                                <MapPin className="text-primary h-6 w-6" />
                                <div className="flex flex-col">
                                    <span className="text-primary font-semibold text-sm">LOCATION</span>
                                    <span className="text-muted-foreground text-sm">Pittsburgh, PA</span>
                                </div>
                            </div>
                            <div className="h-6 w-px bg-black" />

                            <div className="flex items-center space-x-2">
                                <Timer className="text-primary h-6 w-6" />
                                <div className="flex flex-col">
                                    <span className="text-primary font-semibold text-sm">HOURS</span>
                                    <span className="text-muted-foreground text-sm">Mon-Fri: 9am - 6pm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`lg:hidden bg-gray-100 text-center transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-12 py-2 opacity-100"
                            }`}
                    >
                        <span className="text-muted-foreground text-sm">Mon-Fri: 9am - 6pm</span>
                    </div>

                    <div
                        className={`flex items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"} flex-1`}
                    >
                        <nav className="hidden md:flex items-center space-x-8">
                            <Navigation />
                        </nav>

                        <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-8 text-lg">
                            <Link
                                className="flex w-full h-full items-center justify-center"
                                href="https://calendly.com/timelesshealingllc/30min"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Book Appointment
                            </Link>
                        </Button>
                        <button
                            className="lg:hidden flex flex-col space-y-1 p-2 ml-auto"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black z-50 overflow-y-auto">
                    {/* Black Header with Logo and Close Button */}
                    <div className="flex justify-between items-center p-6 bg-black">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/timelesshealing.png"
                                alt="Timeless Healing Logo"
                                width={210}
                                height={29}
                                className="h-2 w-auto"
                            />
                            <span className="text-white text-sm">Mon-Fri: 9am - 6pm</span>
                        </div>
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white text-3xl font-light"
                            aria-label="Close mobile menu"
                        >
                            x
                        </button>
                    </div>

                    {/* White Dropdown Menu */}
                    <div className="bg-background min-h-screen">
                        <nav className="px-8 py-12">
                            <div onClick={toggleMobileMenu}
                                className="space-y-8">
                                <Navigation />


                                {/* Book Appointment Button - Mobile */}
                                <div className="pt-8">
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 px-2 text-2xl">
                                        <Link
                                            className="flex w-full h-full items-center justify-center"
                                            href="https://calendly.com/timelesshealingllc/30min"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Book Appointment
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
