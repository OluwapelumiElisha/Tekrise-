"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- IMAGE IMPORTS ---
import heroBg from "../assests/Hero_Bg.svg";
import arrowIcon from "../assests/Go-In-Arrow.svg";
import YbgImage from "../assests/YPattern.svg"; 
import industryIcon from "../assests/Industry.svg";
import projectIcon from "../assests/Hands-On.svg";
import globalIcon from "../assests/Global-Tech.svg";
import mentorIcon from "../assests/Mentorship.svg";
import careerIcon from "../assests/Career.svg";
import arrowBgImage from "../assests/arrowBgImage.svg"

const Hero = () => {
    const router = useRouter();

    const tickerItems = [
        "Startup & Enterprise Skills",
        "Global Tech Teams",
        "Remote Tech Careers",
        "Software Engineering",
        "Product Design"
    ];

    const features = [
        { title: "Industry-relevant curriculum", icon: industryIcon },
        { title: "Hands-on, project-based learning", icon: projectIcon },
        { title: "Global tech standards, local understanding", icon: globalIcon },
        { title: "Mentorship from experienced professionals", icon: mentorIcon },
        { title: "Career-focused training", icon: careerIcon },
    ];

    return (
        <div>
            <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black">

                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg.src})` }}
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-[#0E0E0E]" />

                {/* HERO CONTENT */}
                <div className="relative z-10 w-full max-w-6xl px-6 text-center md:pt-52 pt-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[42px] leading-[1.1] md:text-[68px] lg:text-[62px] font-extrabold text-white tracking-tight"
                    >
                        Learn In-Demand <span className="relative inline-block">
                            Tech Skills.
                            <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[8px] md:h-[12px] bg-[#00E676] rounded-full blur-[2px]" />
                        </span>
                        <br />
                        <span className="mt-2 block">Launch a Global Career</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-5 text-[#FEFEFE] text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Tekrise Academy helps aspiring tech professionals gain job-ready skills through
                        hands-on learning, expert mentorship, and real-world projects.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <button
                            onClick={() => router.push("/apply")}
                            className="w-full sm:w-auto bg-[#00E676] hover:bg-[#00c864] text-[#0E0E0E] font-medium py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-[0_0_20px_rgba(0,230,118,0.2)] text-[16px]"
                        >
                            Get Started
                            <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <div className="relative w-7 h-7">
                                    <Image src={arrowIcon} alt="" fill className="object-contain" />
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => router.push("")}
                            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0E0E0E] font-medium text-[16px] py-4 px-12 rounded-full transition-all active:scale-95 shadow-lg"
                        >
                            View Courses
                        </button>
                    </motion.div>
                </div>

                {/* INFINITE TICKER BAR WITH FRAMER MOTION */}
                <div className="w-full bg-[#0E0E0E] border-t border-white/5 py-6 overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity
                        }}
                    >
                        {[...tickerItems, ...tickerItems].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 px-8 text-white font-bold text-sm md:text-[25px] tracking-wide">
                                <span className="text-[#00E676] text-3xl font-bold">✳</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* y tekrise Academy  */}

            <div className=''>
                <section className="relative w-full py-16 px-6 md:px-10 overflow-hidden flex items-center justify-center bg-white">

                    {/* BACKGROUND LAYER */}
                    <div
                        className="absolute inset-0 z-0 rounded-[40px] m-4 md:m-10 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${YbgImage.src})`,
                            backgroundBlendMode: 'overlay',
                            opacity: 0.02,
                        }}
                    />

                    {/* The Gradient Overlay requested */}
                    <div
                        className="absolute inset-0 z-0 rounded-[40px] m-4 md:m-10 pointer-events-none"
                        style={{ background: 'linear-gradient(90deg, rgba(170, 255, 169, 0.3) 0%, rgba(17, 255, 189, 0.3) 100%)' }}
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 max-w-5xl mx-auto w-full md:py-8 py-1 md:px-0 px-4 md:ml-10 ml-0">
                        <header className="mb-12">
                            <h2 className="text-[28px] md:text-[39px] font-bold text-[#0E0E0E] mb-2 tracking-tight">
                                Why Tekrise Academy
                            </h2>
                            <p className="text-[#0E0E0E] text-[16px] md:text-[20px] font-medium">
                                Built for Growth. Designed for Results.
                            </p>
                        </header>

                        {/* GRID SYSTEM */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-[#125245] flex items-center gap-4 md:px-9 px-3 py-3 rounded-full border border-white/5 shadow-xl hover:bg-[#073d35] transition-colors group"
                                >
                                    {/* Icon Container */}
                                    <div className="relative md:w-12 md:h-12 w-6 h-6 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={feature.icon}
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 invert opacity-80"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-[#FEFEFE] text-[16px] md:text-[16px] font-normal leading-snug">
                                        {feature.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute md:right-14 right-4 md:top-[72%] top-[80%] -translate-y-1/2 w-[179px] h-[208px]  select-none pointer-events-none z-0">
                        <Image
                            src={arrowBgImage} 
                            alt=""
                            fill
                            className="object-contain object-right"
                            priority={false}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;