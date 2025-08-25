import Link from "next/link"
import { FOOTER_TEXT, FOOTER_LINKS } from "@/lib/constants"
import Image from "next/image"
const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left section - Brand and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 gap-2">
              <Image
                src="/logo.webp"
                alt="Timeless Healing Logo"
                width={200}
                height={44}
              />
            </div>
            <p className="text-background text-sm leading-relaxed mb-6 max-w-xs italic">{FOOTER_TEXT}</p>
            {/* <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5 text-primary " />
                </Link>
              ))}
            </div> */}
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className=" hover:text-accent text-background transition-colors text-sm hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className=" hover:text-accent text-background transition-colors text-sm hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/hijama" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Hijama
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-accent mb-4 font-heading">Contact Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="tel:+16148287446" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    (614) 828-7446

                  </Link>
                </li>
                <li>
                  <Link href="https://maps.app.goo.gl/Qq52KGt2RowgAUmz6" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Our Location
                  </Link>
                </li>
                <li>
                  <Link href="mailto:Timelesshealingllc@gmail.com" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Timelesshealingllc@gmail.com
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Company Column - */}
            {/* <div>
              <h3 className="font-semibold text-accent mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-accent text-background  transition-colors text-sm hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Bottom section - Fixed: Moved outside the main grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-accent">
          <p className="text-sm  mb-4 sm:mb-0 text-background">© {currentYear} Timeless Healing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className=" text-background hover:text-accent transition-colors text-sm underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
