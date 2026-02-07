"use client"
import React from 'react'
import Header from '../Components/Header'
import Image from 'next/image';



// --- IMAGES ---
import bgImage from "@/app/assests/Background.png";
import contactImage from "../assests/ContactPic.svg";
import { User, Mail, Phone, HelpCircle, MessageSquare, ArrowRight, MapPin } from "lucide-react";

// --- SHADCN IMPORTS ---
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseContact } from './useContact';
import Footer from '../Components/Footer';

const page = () => {

  const { form, onSubmit, isSubmitting } = UseContact()

  const contactItems = [
    {
      id: 1,
      icon: MapPin,
      title: "Location",
      content: "2nd Floor, Remilekun House, Adamasingba, 72 Adekunle Fajuyi Rd, Dugbe, Ibadan 200281, Oyo",
      isLink: false,
    },
    {
      id: 2,
      icon: Phone,
      title: "Call/Whatsapp",
      content: "(+234) 08086208192",
      isLink: false,
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Address",
      content: "hello@tekriseacademy.com",
      isLink: true, // To add underline style
    },
  ];
  return (
    <div>
      <Header />

      {/* ==================================== SECTION 1 ============================= */}
      <section className="relative  text-white pt-44 md:pt-56 md:pb-40 pb-40 px-4 text-center overflow-hidden">
        {/* Optional: Background Pattern Image */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-[62px] font-extrabold text-[#FEFEFE]">
            <span className="relative inline-block">
              Contact Us
              {/* The Green Underline/Brush Stroke */}
              <span className="absolute -bottom-1 left-0 w-full h-[8px] md:h-[12px] bg-[#00E676] rounded-full blur-[2px]" />
            </span>{' '}
            at Tekrise Academy
          </h1>
          <p className="text-[#FEFEFE] text-[16px] md:text-[18px] font-normal max-w-3xl mx-auto md:pt-3 pt-2">
            Contact us to learn more about our courses and how Tekrise Academy can support your goals.
          </p>
        </div>
      </section>

      {/* ==================================== SECTION 2 ============================= */}
      <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            <div className="order-1 lg:col-start-1 lg:row-start-1 ml-6">
              <h2 className="text-[31px] md:text-[39px] font-bold text-[#0E0E0E] mb-1.5">
                {"We're Here to Help You Grow"}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
               { "Have questions about our courses, admissions, or programs? Reach out to the Tekrise Academy team, and we'll get back to you promptly."}
              </p>
            </div>
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[13px] font-medium text-[#0E0E0E]">Full Name</FormLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0E0E0E] h-4 w-4 z-10" />
                          <FormControl>
                            <Input placeholder="Enter your full name" className="pl-10 h-12 rounded-lg border-gray-300 placeholder:text-[#404040]" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[13px] font-medium text-[#0E0E0E]">Email Address</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0E0E0E] h-4 w-4 z-10" />
                          <FormControl>
                            <Input placeholder="Enter your email address" className="pl-10 h-12 rounded-lg border-gray-300 placeholder:text-[#404040]" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[13px] font-medium text-[#0E0E0E]">Phone Number</FormLabel>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0E0E0E] h-4 w-4 z-10" />
                          <FormControl>
                            <Input placeholder="Enter your phone number" className="pl-10 h-12 rounded-lg border-gray-300 placeholder:text-[#404040]" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[13px] font-medium text-[#0E0E0E]">Reason for Contact</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 pl-10 relative text-[#0E0E0E] rounded-lg border-gray-300 placeholder:text-[#0E0E0E] ">
                              <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0E0E0E] h-4 w-4 z-10" />
                              <SelectValue placeholder="Select option" className='text-[#0E0E0E] ' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="course">Course Inquiry</SelectItem>
                            <SelectItem value="admissions">Admissions & Enrollment</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership/Collaboration</SelectItem>
                            <SelectItem value="other">Feedback or Suggestions</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-semibold text-[#1F1F1F]">Message</FormLabel>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 text-[#0E0E0E]  h-4 w-4 z-10" />
                          <FormControl>
                            <Textarea placeholder="Write your message here..." className="min-h-[120px] pl-10 py-3 rounded-lg border-gray-300 placeholder:text-[#0E0E0E]" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 data-[state=checked]:bg-[#00E676] data-[state=checked]:text-black border-gray-300 cursor-pointer"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-[13px] text-[#000000] font-normal font-normal cursor-pointer">
                            By submitting this form, you agree that Tekrise Academy may collect and use your information in line with our Privacy Policy.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#01E888] hover:bg-[#00c864] text-black font-bold text-base rounded-full flex items-center justify-center gap-3 transition-all group"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && (
                        <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* =========================================
              3. THE IMAGE
              Mobile: Position 3 (Bottom)
              Desktop: Col 1, Row 2 (Bottom Left)
          ========================================= */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 relative flex justify-center lg:justify-start lg:items-end mt-8 lg:mt-0">
              <div
                className="absolute -left-9 top-1/2 -translate-y-1/2 w-64 h-[80%] rounded-r-lg z-0"
                style={{
                  backgroundImage: `url(${bgImage.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Main Image Wrapper */}
              <div className="relative z-10 w-full w-[500px] h-[350px] md:h-[500px] md:ml-20 ml-12 md:mr-0 mr-6 rounded-4xl overflow-hidden shadow-xl">
                <Image
                  src={contactImage}
                  alt="Students working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ==================================== SECTION 3 ============================= */}
      <section className="w-full px-4 md:px-8 py-12 font-sans">
        <div className="max-w-6xl mx-auto">

          {/* --- MAIN CARD CONTAINER --- */}
          <div className="bg-[#125245] rounded-[2.5rem] p-8 md:p-6 lg:px-12 lg:py-14 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

              {contactItems.map((item) => (
                <div key={item.id} className="flex flex-col items-start gap-4 x">

                  {/* Header (Icon + Title) */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00E676] flex items-center justify-center shrink-0">
                      <item.icon className="text-[#103E33] w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#01E888] font-bold md:text-[25px] text-lg">
                      {item.title}
                    </span>
                  </div>

                  {/* Content Text */}
                  <p
                    className={`text-[#FEFEFE] font-bold text-lg md:text-xl leading-relaxed max-w-xl ${item.isLink ? "underline decoration-1 underline-offset-4 cursor-pointer hover:text-[#00E676] transition-colors" : ""
                      }`}
                  >
                    {item.content}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
      {/* ==================================== FOOTER ============================= */}
      <div className='mt-24'>
      <Footer/>
      </div>
      
    </div>
  )
}

export default page
