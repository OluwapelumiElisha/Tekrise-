"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- IMAGE IMPORTS ---
import arrowIcon from "../assests/Go-In-Arrow.svg";
import frontendIcon from "../assests/Frontend.svg";
import backendIcon from "../assests/Backend.svg";
import uiuxIcon from "../assests/UiUx.svg";
import dataIcon from "../assests/DataAnalysis.svg";
import bgArrow from "../assests/OurCoursesArrow.svg"
import YbgImage from "../assests/YPattern.svg";
import arrowBgImage from "../assests/arrowBgImage.svg"



const CoursesSection = () => {
    const router = useRouter();

    const courses = [
        {
            title: "Frontend Development",
            description: "Master HTML, CSS, JavaScript, React, and modern frontend frameworks to build stunning user interfaces.",
            icon: frontendIcon,
            path: "/courses/frontend"
        },
        {
            title: "Backend Development",
            description: "Learn server-side programming, databases, APIs, and cloud technologies to power modern applications.",
            icon: backendIcon,
            path: "/courses/backend"
        },
        {
            title: "UI/UX Design",
            description: "Create beautiful, user-centered designs using industry-standard tools and design thinking principles.",
            icon: uiuxIcon,
            path: "/courses/ui-ux"
        },
        {
            title: "Data Analysis",
            description: "Transform raw data into actionable insights using Python, SQL, and modern analytics tools.",
            icon: dataIcon,
            path: "/courses/data-analysis"
        }
    ];

    const steps = [
        {
            id: "01",
            title: "Choose Your Path",
            desc: "Select a course that aligns with your goals."
        },
        {
            id: "02",
            title: "Learn by Doing",
            desc: "Join live sessions and complete hands-on projects."
        },
        {
            id: "03",
            title: "Build Your Portfolio",
            desc: "Create real-world projects that showcase your skills."
        },
        {
            id: "04",
            title: "Grow Your Career",
            desc: "Receive mentorship, guidance, and career support."
        }
    ];

    return (
        <div>
            <section className="bg-black py-20 px-6 md:px-10 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER AREA */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-[39px] font-bold text-white mb-1">Our Courses</h2>
                            <p className="text-[#FEFEFE] text-lg font-normal">Choose a Path. Build a Future.</p>
                        </div>

                        <button
                            onClick={() => router.push("/courses")}
                            className="hidden cursor-pointer md:flex bg-[#00E676] hover:bg-[#00c864] text-black font-bold py-3 px-8 rounded-full items-center gap-3 transition-all group"
                        >
                            Explore Courses
                            <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform ">
                                <div className="relative w-7 h-7">
                                    <Image src={arrowIcon} alt="" fill className="object-contain rotate-300" />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* COURSES GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white rounded-3xl p-5 flex flex-col h-full shadow-lg"
                            >
                                {/* Icon Circle */}
                                <div className="w-14 h-14 rounded-full bg-[#00E676] flex items-center justify-center mb-14">
                                    <div className="relative w-full h-full">
                                        <Image src={course.icon} alt="" fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-2xl font-bold text-[#0E0E0E] mb-4 leading-tight">
                                    {course.title}
                                </h3>
                                <p className="text-[#404040] text-[16px] leading-relaxed mb-10 flex-grow">
                                    {course.description}
                                </p>

                                {/* Action Button */}
                                <button
                                    onClick={() => router.push(course.path)}
                                    className="w-full border border-gray-300 hover:border-[#00E676] hover:bg-[#00E676]/5 text-[#0E0E0E] font-bold py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                                >
                                    Learn More
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* MOBILE EXPLORE BUTTON (Visible only on mobile) */}
                    <div className="mt-10 md:hidden">
                        <button
                            onClick={() => router.push("")}
                            className="w-full bg-[#00E676] text-black font-bold py-4 rounded-full flex items-center justify-center gap-3 active:scale-95"
                        >
                            Explore Courses
                            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
                                <div className="relative w-7 h-7">
                                    <Image src={arrowIcon} alt="" fill className="object-contain rotate-300" />
                                </div>
                            </div>
                        </button>
                    </div>

                    <Image
                        src={bgArrow}
                        alt=''
                        className='absolute bottom-0 left-0'
                    />

                </div>
            </section>

            <section className="bg-white pt-28 overflow-hidden pb-28">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[39px] font-bold text-[#0E0E0E] mb-3">
                            The Tekrise Learning Experience
                        </h2>
                        <p className="text-[#0E0E0E] text-lg font-normal text-[20px]">
                            Built for Growth. Designed for Results.
                        </p>
                    </div>

                    {/* STEPS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-3 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Number Circle */}
                                <div className="w-16 h-16 rounded-full bg-[#00E676] flex items-center justify-center text-[#0E0E0E] font-bold text-xl mb-8 shadow-lg shadow-[#00E676]/20 transition-transform group-hover:scale-110">
                                    {step.id}
                                </div>

                                {index !== steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-24 left-1/2 w-full items-center justify-center z-0 pointer-events-none">
                                        {/* The visual line: Short, dark green, distinct */}
                                        <div className="w-12 h-[2px] bg-[#124438]" />
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-[#0E0E0E] mb-3 md:mt-5 mt-0">{step.title}</h3>
                                <p className="text-[#404040] text-[16px] font-normal leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>

                                {index !== steps.length - 1 && (
                                    <div className="flex md:hidden items-center justify-center my-6">
                                        <div className="h-8 w-[2px] bg-[#124438]" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* ADVISOR CTA BOX */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-32 relative md:w-[90%] w-[90%] mx-auto bg-[#052C26] rounded-4xl p-10 md:p-12 overflow-hidden text-center flex flex-col items-center justify-center"
                    >
                        {/* Background Wavy Pattern Overlay */}
                        <div
                            className="absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                            style={{ backgroundImage: `url(${YbgImage.src})` }}
                        />

                        <div className="relative z-10 md:max-w-3xl w-[100%]">
                            <h2 className="text-[25px] md:text-[39px] font-bold text-white mb-4">
                                Not Sure Which Course Is Right for You?
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                                Get personalized guidance from experienced professionals who are ready to help you choose the right learning path and answer your tech-related questions.
                            </p>

                            <div className='flex justify-center'>
                                <button
                                    onClick={() => router.push("/advisor")}
                                    className="bg-[#00E676] hover:bg-[#00c864] text-[#0E0E0E] font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-xl shadow-[#00E676]/10"
                                >
                                    Talk to an Advisor
                                    <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                        <div className="relative w-full h-full">
                                            <Image src={arrowIcon} alt="" fill className="object-contain rotate-300" />
                                        </div>
                                    </div>
                                </button>
                            </div>


                        </div>

                        {/* Large Decorative Arrow (Matches y.png branding) */}
                        {/* <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-20 hidden lg:block w-[200px] h-[300px]">
            <Image 
              src={arrowIcon} 
              alt="" 
              fill 
              className="object-contain object-right" 
            />
          </div> */}


                        <div className="absolute md:right-14 right-4 md:top-[72%] top-[80%] -translate-y-1/2 w-[179px] h-[208px]  select-none pointer-events-none z-0 md:block hidden">
                            <Image
                                src={arrowBgImage}
                                alt=""
                                fill
                                className="object-contain object-right"
                                priority={false}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>

    );
};

export default CoursesSection;