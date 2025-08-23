"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Heart, Shield, Sparkles, CheckCircle, Clock, BookOpen, Stethoscope } from "lucide-react"

export default function WhatIsHijamaPage() {
  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="mt-60 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
        
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            What is Hijama?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient Islamic healing practice that has been helping people achieve better health and
            wellness for over 1400 years.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl  font-bold text-foreground mb-6 font-heading">The Prophetic Practice</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hijama, derived from the Arabic word &quot;hajm&quot; meaning &quot;sucking,&quot; is a traditional Islamic therapeutic
                practice that involves creating suction on specific points of the body using specialized cups. This
                ancient healing method was practiced and recommended by Prophet Muhammad (peace be upon him) as a
                powerful remedy for various ailments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The practice combines spiritual blessing with physical healing, making it not just a medical treatment
                but a holistic approach to wellness that addresses both body and soul.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-4">Etymology</h3>
                <p className="text-muted-foreground">
                  <strong>Hijama (حجامة)</strong> comes from the Arabic root ḥ-j-m, meaning &quot;to suck&quot; or &quot;to draw out.&quot;
                  It&apos;s also known as cupping therapy in Western medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Hijama */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Types of Hijama</h2>
            <p className="text-xl text-muted-foreground">Understanding the different methods of cupping therapy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif">Wet Cupping (Hijama)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The traditional method involving small, controlled incisions followed by suction to remove stagnant
                  blood and toxins. This is the most authentic form practiced by the Prophet (ﷺ).
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Most effective for detoxification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Removes stagnant blood</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif">Dry Cupping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Suction therapy without incisions, focusing on improving circulation and relieving muscle tension.
                  Gentle and suitable for those new to cupping therapy.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Improves blood circulation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Relieves muscle tension</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif">Moving Cupping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Combines cupping with massage techniques, where cups are moved across the skin to provide broader
                  therapeutic benefits and muscle relaxation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Combines massage benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Broader treatment area</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">How Hijama Works</h2>
            <p className="text-xl text-muted-foreground">
              The science and process behind this ancient healing practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">The Therapeutic Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consultation & Assessment</h4>
                    <p className="text-muted-foreground">
                      Initial evaluation of your health concerns and determination of optimal cupping points based on
                      traditional Islamic medicine principles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preparation & Sterilization</h4>
                    <p className="text-muted-foreground">
                      Complete sterilization of equipment and preparation of treatment area following strict hygiene
                      protocols to ensure your safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cupping Application</h4>
                    <p className="text-muted-foreground">
                      Strategic placement of cups on specific points, creating controlled suction to stimulate blood
                      flow and promote healing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Post-Treatment Care</h4>
                    <p className="text-muted-foreground">
                      Proper aftercare instructions and follow-up recommendations to maximize the therapeutic benefits
                      of your session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Stethoscope className="w-5 h-5 text-accent mr-2" />
                    Scientific Benefits
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Improves local blood circulation</li>
                    <li>• Stimulates lymphatic drainage</li>
                    <li>• Reduces inflammation and pain</li>
                    <li>• Promotes tissue regeneration</li>
                    <li>• Enhances immune system function</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-2" />
                    Session Duration
                  </h4>
                  <p className="text-muted-foreground">
                    A typical hijama session lasts 30-45 minutes, including consultation, preparation, treatment, and
                    aftercare instructions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      {/* <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Conditions Treated</h2>
            <p className="text-xl text-muted-foreground">
              Hijama therapy can help address a wide range of health concerns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-center">Musculoskeletal</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Chronic back and neck pain</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Arthritis and joint stiffness</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Muscle tension and spasms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Sports injuries and recovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Fibromyalgia symptoms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-center">Circulatory & Respiratory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>High blood pressure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Poor circulation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Asthma and breathing issues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Varicose veins</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Lymphatic congestion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-center">General Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Chronic headaches and migraines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Stress and anxiety</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Insomnia and sleep disorders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Digestive issues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>General detoxification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Islamic Foundation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Islamic Foundation</h2>
            <p className="text-xl text-muted-foreground">The blessed practice as recommended by Prophet Muhammad (ﷺ)</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground mb-4 font-serif">
                  &quot;Indeed in cupping (hijama) there is a cure.&quot;
                </blockquote>
                <cite className="text-muted-foreground">— Prophet Muhammad (ﷺ), Sahih Muslim</cite>
                <p className="text-muted-foreground mt-4">
                  This authentic hadith establishes hijama as a blessed practice with healing properties, making it not
                  just a medical treatment but a spiritual act of following the Sunnah.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground mb-4 font-serif">
                  &quot;Whoever performs cupping on the 17th, 19th or 21st day (of the Islamic month) then it is a cure for
                  every disease.&quot;
                </blockquote>
                <cite className="text-muted-foreground">— Prophet Muhammad (ﷺ), Sunan Abu Dawud</cite>
                <p className="text-muted-foreground mt-4">
                  This hadith provides specific guidance on the optimal timing for hijama therapy according to the lunar
                  calendar, showing the comprehensive nature of Islamic medical guidance.
                </p>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </section>

 
    </div>
  )
}
