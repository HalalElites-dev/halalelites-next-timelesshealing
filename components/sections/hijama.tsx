import React from "react"
import Link from "next/link"
import { HeartPulse, Droplet, Leaf } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

const Hijama = () => {
  return (
    <section id="hijama" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            What is Hijama?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Hijama, also known as <span className="font-semibold">cupping therapy</span>,
            is a traditional healing practice that has been used for centuries to
            promote blood flow, detoxify the body, and restore balance.
          </p>

          {/* Quick benefit highlights */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <HeartPulse className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">
                Supports natural healing and boosts circulation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">
                Helps detoxify and cleanse the body
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Leaf className="w-6 h-6 text-accent shrink-0" />
              <span className="text-muted-foreground">
                Restores balance and improves overall wellness
              </span>
            </li>
          </ul>

          <Button  size={'lg'} className=' md:text-xl md:py-6 font-bold font-heading border-primary hover:border-accent'>
            <Link href="/hijama">Learn More</Link>
          </Button>
        </div>

        {/* Right side: single image or placeholder box */}

        <Card className="border-l-4 border-l-accent">
          <CardContent className="pt-6">


            <div className="relative">
              <div className="rounded-lg overflow-hidden ">
                <Image
                  src="/hijamaquestion.png"
                  alt="Hijama therapy illustration"
                  className="object-contain w-full h-[350px]"
                  width={400}
                  height={500}
                />
              </div>
            </div>


          </CardContent>
        </Card>

      </div>
    </section>
  )
}

export default Hijama
