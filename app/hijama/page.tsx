"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, CheckCircle, Clock, BookOpen, Stethoscope, Calendar, Droplets } from "lucide-react"

export default function WhatIsHijamaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mt-60 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl  font-bold text-foreground mb-6">What is Hijama?</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient Islamic healing practice that has been helping people achieve better health and
            wellness for over 1400 years.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl  font-bold text-foreground mb-6 font-heading">Introduction to Hijama</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ibn Qayim mentioned in his book <strong>At-Tibb An-Nabawiyy</strong> (Prophetic Medicine) the
                fundamental principles of medicine. These principles are: preservation of health, prevention of harm,
                and removal of harmful substances. He also stated that if a person is afflicted with an illness, it is
                upon them to seek a cure. Cupping (Hijama) is one of the most effective cures for removing harm from the
                body.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hijama originated in China and was a well-known practice among the Arabs even before Islam. The Prophet
                Muhammad (ﷺ) further encouraged its use, saying:{" "}
                <strong>&quot;The best of that with which you can be treated is Hijamah.&ldquo;</strong>
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl  font-semibold mb-4">Etymology</h3>
                <p className="text-muted-foreground">
                  The word <strong>Hijama</strong> is an Arabic word originating from <strong>Hajm</strong>, which means{" "}
                  <strong>&quot;to suck.&quot;</strong> In English, it&apos;s often referred to as wet cupping and is distinct from
                  bloodletting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-foreground mb-4">Hijama: A Cure for Various Ailments</h2>
            <p className="text-xl text-muted-foreground">Authentic Islamic guidance on the healing benefits</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This well-known practice is highly effective in curing many different types of illnesses, including{" "}
                <strong>diabetes, migraines, back pain, and asthma</strong>. However, it&apos;s essential for a believer to
                place complete trust in Allah while taking the necessary means to cure themselves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It has been established that every sickness, except for death, has been sent down with its cure, and it
                is upon every individual to seek it.
              </p>
            </div>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-accent mr-2" />
                  The Importance of Health in Islam
                </h4>
                <blockquote className="text-muted-foreground italic mb-4">
                  &quot;There are two blessings which many people are duped out of: good health and free time.&quot;
                </blockquote>
                <cite className="text-sm text-muted-foreground">— Prophet Muhammad (ﷺ)</cite>
                <p className="text-muted-foreground mt-4 text-sm">
                  He also advised:{" "}
                  <strong>
                    &quot;Take advantage of five before five: your youth before old age, your health before your illness,
                    your wealth before your poverty...&quot;
                  </strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-foreground mb-4">Hijamah: Terminology and Practice</h2>
            <p className="text-xl text-muted-foreground">Understanding the authentic Islamic practice</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="">Hijama (Wet Cupping)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>Hijama</strong> removes stagnant blood from beneath the skin&apos;s surface, carefully avoiding
                    veins. This is the authentic prophetic method.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Purifies outer layer of body</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Removes stagnant blood safely</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="">Bloodletting (Different Practice)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>Bloodletting</strong> extracts blood from veins and arteries, making it a more invasive
                    procedure, distinct from Hijama.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">More suitable for systemic ailments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Different from Hijama practice</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground italic">
              As referenced by Ibn al-Qayyim, Hijama is better for purifying the outer layer of the body, while
              bloodletting is more suitable for deeper, more systemic ailments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-foreground mb-4">Recommended Days for Hijama</h2>
            <p className="text-xl text-muted-foreground">Following the authentic Sunnah guidance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Prophetic Guidance</h3>
                </div>
                <blockquote className="text-lg italic text-foreground mb-4">
                  &quot;The best days upon which you can be cupped are the 17th, the 19th, and the 21st.&quot;
                </blockquote>
                <cite className="text-muted-foreground">— Prophet Muhammad (ﷺ), Hadith of Ibn Abbas</cite>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Additional Narration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A similar narration from Abu Hurayrah states that cupping on these days is a remedy for every ailment.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> No authentic narrations prohibit Hijama on other days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-foreground mb-4">Instruments and Modern Practice</h2>
            <p className="text-xl text-muted-foreground">Evolution from traditional to modern methods</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl  font-semibold mb-6">Historical Tools</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Historically, various tools were used for Hijama, including hollowed animal horns, bamboo, clay, and
                glass. The incisions for wet cupping evolved from chiseled stones to modern surgical blades.
              </p>
              <h3 className="text-2xl  font-semibold mb-6">Modern Practice</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, modern, sterile equipment is used. The safest method today is using mechanical plastic cups and
                pumps, ensuring the highest standards of hygiene and safety.
              </p>
            </div>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-accent mr-2" />
                  Safety Standards
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sterile, single-use equipment</li>
                  <li>• Modern surgical blades</li>
                  <li>• Mechanical plastic cups</li>
                  <li>• Professional hygiene protocols</li>
                  <li>• Safe disposal methods</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold text-foreground mb-4">Does Hijama Nullify Wudu?</h2>
            <p className="text-xl text-muted-foreground">Scholarly guidance on ritual purity</p>
          </div>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based on the Hadith of Anas ibn Malik, the Prophet (ﷺ) was cupped and did not perform Wudu afterward.
              </p>
              <blockquote className="text-lg italic text-foreground mb-4 border-l-4 border-accent pl-4">
                &quot;What comes out of the body does not nullify Wudu, except for that which exits from the private
                passages. The one who claims it breaks Wudu must provide evidence.&quot;
              </blockquote>
              <cite className="text-muted-foreground">— Sheikh Muhammad ibn Salih Al-Uthaymeen</cite>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
