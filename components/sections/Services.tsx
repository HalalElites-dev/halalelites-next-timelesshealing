import { SERVICES_HEADING, SERVICES_SUBTEXT, SERVICES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Services = () => {
  return (
    <div id="services" className="py-18 bg-white">
      <div className="max-w-7xl md:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{SERVICES_HEADING}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{SERVICES_SUBTEXT}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 ease-out hover:bg-accent/30 hover:shadow-lg hover:scale-[1.02] flex flex-col h-full"
            >
              <div className="flex flex-col p-6 h-full">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <span className="text-xl font-light text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-sm text-muted-foreground">
                      {tag}
                      {tagIndex < service.tags!.length - 1 && <span className="ml-2">•</span>}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>
                      Price: <span className="font-medium text-foreground">{service.price}</span>
                    </span>
                    <span>
                      Duration: <span className="font-medium text-foreground">{service.session}</span>
                    </span>
                  </div>

                  <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
