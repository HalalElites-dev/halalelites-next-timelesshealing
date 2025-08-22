'use client';
import { ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { FAQ } from "@/lib/constants";
import React, { useState } from 'react'

{/* FAQ Section */ }


const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }
    return (
        <section id="faq" className="py-20 px-6 bg-muted">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl  md:text-5xl font-bold text-foreground mb-4 font-heading">Frequently Asked Questions</h2>
                    <p className="text-xl text-muted-foreground font-heading">Common questions about hijama therapy and our services</p>
                </div>

                <div className="space-y-4">
                    {FAQ.map((faq, index) => (
                        <Card key={index} className="border-2  transition-colors">
                            <CardHeader className="cursor-pointer" onClick={() => toggleFaq(index)}>
                                <div className="flex items-center justify-between">
                                    <CardTitle className=" text-left">{faq.question}</CardTitle>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                    )}
                                </div>
                            </CardHeader>
                            {openFaq === index && (
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq

