import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_HEADING,
  CONTACT_PHONE,
  CONTACT_SUBTEXT,
} from "@/lib/constants"
import React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      {/* Background image wrapper */}
      <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* Background image */}
        <Image
          src="/cta.webp" // replace with your image
          alt="Work together"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 p-10 text-white text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ml-4">
            {CONTACT_HEADING}
          </h2>
          <p className="text-xl mb-8 ml-4">{CONTACT_SUBTEXT}</p>

          <div className="space-y-6 text-left p-4 md:p-6 mx-auto">
            {/* Email */}
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-white mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Email</h3>
                <p>{CONTACT_EMAIL}</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-white mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Office</h3>
                <p>{CONTACT_ADDRESS}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-white mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>{CONTACT_PHONE}</p>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4 flex justify-left">
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black px-6 py-3 text-lg rounded-md"
              >
                <Link
                  href="https://calendly.com/timelesshealingllc/30min"
                  target="_blank"
                >
                  Book via Calendly
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
