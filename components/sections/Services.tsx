import { SERVICES_HEADING, SERVICES_SUBTEXT, SERVICES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Services = () => {
  return (
    <div id="services" className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground  mb-4">{SERVICES_HEADING}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{SERVICES_SUBTEXT}</p>
        </div>

        <div className="space-y-2">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 ease-out hover:bg-accent/30 hover:shadow-lg hover:scale-[1.02] "
            >
              <div className="flex items-start p-8 min-h-[120px] transition-all duration-500">
                <div className="flex-shrink-0 mr-8">
                  <span className="text-2xl font-light text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm text-muted-foreground">
                        {tag}
                        {tagIndex < service.tags!.length - 1 && <span className="ml-2">•</span>}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{service.description}</p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>
                      Price: <span className="font-medium text-foreground">{service.price}</span>
                    </span>
                    <span>
                      Duration: <span className="font-medium text-foreground">{service.session}</span>
                    </span>
                  </div>

                  
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-lg">
                        <Link
                          className="flex w-full h-full items-center justify-center"
                          href="https://calendly.com/timelesshealingllc/30min"
                          target="_blank"
                        >
                          Book Appointment
                        </Link>
                      </Button>
                    </div>
                  
                </div>
              </div>

              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
