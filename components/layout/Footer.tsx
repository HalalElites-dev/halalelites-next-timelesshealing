import Link from "next/link"
import { FOOTER_TEXT, SOCIAL_LINKS, FOOTER_LINKS } from "@/lib/constants"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left section - Brand and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 gap-2">
              <Image
                src="/timelesshealing.jpeg"
                alt="Timeless Healing Logo"
                width={200}
                height={44}
              />
            </div>
            <p className="text-primary text-sm leading-relaxed mb-6 max-w-xs">{FOOTER_TEXT}</p>
            <div className="flex items-center gap-4">
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
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/help" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/api" className=" hover:text-primary transition-colors text-sm hover:underline">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column - Fixed: Added missing div wrapper */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className=" hover:text-primary transition-colors text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className=" hover:text-primary transition-colors text-sm hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Fixed: Moved outside the main grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-accent-foreground">
          <p className="text-sm  mb-4 sm:mb-0">© 2025 Timeless Healing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className=" hover:text-primary transition-colors text-sm underline"
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
