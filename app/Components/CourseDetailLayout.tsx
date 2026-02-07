"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import YbgImage from "../assests/YPattern.svg";


// --- SHADCN IMPORTS ---
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "./Header";
import AdvisorBox from "./AdvisorBox";
import Footer from "./Footer";

// --- INTERFACES ---

interface LearningPoint {
    icon: StaticImageData;
    title: string;
    description: string;
}

interface TargetAudiencePoint {
    id: string;
    text: string;
}

interface CourseLogistics {
    duration: string;
    fee: string;
    mode: string;
    durationIcon: StaticImageData;
    feeIcon: StaticImageData;
    modeIcon: StaticImageData;
}

interface FaqItem {
    question: string;
    answer: string;
}

interface CourseDetailLayoutProps {
    title: string;
    highlightWord: string;
    description: string;
    heroBgPattern?: StaticImageData;
    learningPoints: LearningPoint[];
    whoIsForImage: StaticImageData;
    targetAudience: TargetAudiencePoint[];
    logistics: CourseLogistics;
    faqItems: FaqItem[];
    conclusionTitle: string;
}

const CourseDetailLayout: React.FC<CourseDetailLayoutProps> = ({
    title,
    highlightWord,
    description,
    heroBgPattern,
    learningPoints,
    whoIsForImage,
    targetAudience,
    logistics,
    faqItems,
    conclusionTitle,
}) => {
    const router = useRouter();

    const renderTitle = () => {
        if (!title.includes(highlightWord)) return title;

        const parts = title.split(highlightWord);
        return (
            <>
                {parts[0]}
                <span className="relative inline-block mx-2 z-10">
                    {highlightWord}
                    <span className="absolute -bottom-1 left-0 w-full h-[8px] md:h-[12px] bg-[#00E676] rounded-full blur-[2px]" />
                </span>
                {parts[1]}
            </>
        );
    };

    return (
        <div className="w-full">
            <Header />
            {/* =========================================  HERO SECTION ========================================= */}
            <section className="relative bg-[#050505] text-white md:pt-40 pt-32 pb-24 px-4 text-center overflow-hidden">
                {/* Background Pattern */}
                {heroBgPattern && (
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `url(${heroBgPattern.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                )}

                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    {/* Title with Green Underline */}
                    <h1 className="text-[31px] md:text-[62px] lg:text-6xl font-extrabold tracking-tight">
                        {renderTitle()}
                    </h1>

                    {/* Description */}
                    <p className="text-[#FEFEFE] text-[16px] md:text-[18px] w-full mx-auto font-normal leading-7 px-0 text-center">
                        {description}
                    </p>

                    {/* Enroll Button */}
                    <div className="pt-8">
                        <button
                            onClick={() => router.push("")}
                            className="inline-flex items-center gap-3 bg-[#01E888] hover:bg-[#00c864] text-[#0E0E0E] font-medium text-[16px] py-3.5 px-8 rounded-full transition-all duration-300 group cursor-pointer"
                        >
                            Enroll Now
                            <div className="bg-black text-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* ========================================= CURRICULUM / LEARNING SECTION ========================================= */}
            <section className="bg-white w-full py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                        <h2 className="text-[28px] md:text-[39px] font-bold text-[#1F1F1F] max-w-xl leading-tight md:text-left text-center">
                            What You Will Learn During <br className="hidden md:block" />
                            {title} Training
                        </h2>

                        <button className="md:flex hidden items-center gap-3 border border-gray-300 rounded-full px-6 py-2.5 hover:border-[#00E676] transition-colors group cursor-pointer">
                            <span className="text-[16px] font-medium text-[#0E0E0E]">View Curriculum</span>
                            <div className="w-6 h-6 rounded-full bg-[#00E676] flex items-center justify-center group-hover:bg-[#00c864]">
                                <ArrowRight size={12} className="text-black" />
                            </div>
                        </button>
                    </div>

                    {/* Grid of Learning Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {learningPoints.map((point, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center md:items-start gap-5 group text-center md:text-left"
                            >

                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-full bg-[#01E888] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 mb-4">
                                    <div className="relative w-9 h-9">
                                        <Image
                                            src={point.icon}
                                            alt={point.title}
                                            fill
                                            className="object-contain brightness-0 invert-0" // Adjusts icon color if needed (assumes black icon)
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="md:text-[30px] text-[19px] font-bold text-[#0E0E0E] mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-[16px] font-normal text-[#404040] leading-relaxed pr-4">
                                        {point.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="flex md:hidden items-center gap-3 border border-gray-300 rounded-full px-6 py-2.5 hover:border-[#00E676] transition-colors group cursor-pointer">
                            <span className="text-[16px] font-medium text-[#0E0E0E]">View Curriculum</span>
                            <div className="w-6 h-6 rounded-full bg-[#00E676] flex items-center justify-center group-hover:bg-[#00c864]">
                                <ArrowRight size={12} className="text-black" />
                            </div>
                        </button>
                    </div>

                </div>
            </section>

            {/* ========================================= 3. "WHO THIS COURSE IS FOR" SECTION ========================================= */}
            <section className="relative bg-[#0E0E0E] w-full py-16 overflow-hidden">
                <div className="absolute md:-top-20 md:right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 0 L80 50 L40 100 L20 100 L60 50 L20 0 Z" fill="white" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                    <h2 className="text-[27px] md:text-[39px] font-bold text-white md:text-center text-start mb-12">
                        Who This Course Is For
                    </h2>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px]">
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20 lg:-left-32 w-24 md:w-40 h-[60%] bg-[#00E676] z-10" />
                            <div className="absolute top-0 right-0 md:right-auto md:left-10 lg:left-0 w-[85%] md:w-[90%] h-full z-20 rounded-[2.5rem] overflow-hidden border-4 border-transparent">
                                <Image
                                    src={whoIsForImage}
                                    alt="Who this course is for"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Right: List Items */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            {targetAudience.map((item, index) => (
                                <div key={index} className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#00E676] flex items-center justify-center text-black font-bold text-lg shrink-0">
                                        {item.id}
                                    </div>
                                    {/* Text */}
                                    <p className="text-[#FEFEFE] text-[16px] md:text-[25px] font-normal  leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================  4. "COURSE DETAILS" SECTION  ========================================= */}
            <section className="bg-white w-full py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-[31px] md:text-[39px] font-bold text-[#0E0E0E] mb-12">
                        Course Details
                    </h2>
                    <div className="bg-[#0E0E0E] rounded-3xl p-4 md:p-3 shadow-2xl">
                        <div className="bg-white rounded-2xl border-[5px] border-[#01E888] overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* 1. Duration */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col items-center justify-center gap-2 border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#00E676]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 relative bg-[#01E888] rounded-full flex items-center justify-center">
                                            <Image src={logistics.durationIcon} alt="" className="" />
                                        </div>
                                        <span className="text-[#404040] text-[20px] font-bold">Duration</span>
                                    </div>
                                    <h3 className="text-[31px] md:text-[34px] font-black text-[#0E0E0E]">
                                        {logistics.duration}
                                    </h3>
                                </div>

                                {/* 2. Fee */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col items-center justify-center gap-2 border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#00E676]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 relative bg-[#01E888] rounded-full flex items-center justify-center">
                                            <Image src={logistics.durationIcon} alt="" className="" />
                                        </div>
                                        <span className="text-[#404040] text-[20px] font-bold">Fee</span>
                                    </div>
                                    <h3 className="text-[31px] md:text-[34px] font-black text-[#0E0E0E]">
                                        {logistics.fee}
                                    </h3>
                                </div>

                                {/* 3. Class Mode */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col items-center justify-center gap-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 relative bg-[#01E888] rounded-full flex items-center justify-center">
                                            <Image src={logistics.durationIcon} alt="" className="" />
                                        </div>
                                        <span className="text-[#404040] text-[20px] font-bold">Class</span>
                                    </div>
                                    <h3 className="text-[31px] md:text-[34px] font-black text-[#0E0E0E]">
                                        {logistics.mode}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= 5. GRADUATION BANNER ========================================= */}
            <div className="relative w-full py-12 px-4 text-center">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center w-full"
                    style={{
                        backgroundImage: `url(${YbgImage.src})`,
                        backgroundBlendMode: 'overlay',
                        opacity: 0.02,
                    }}
                />
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, rgba(170, 255, 169, 0.3) 0%, rgba(17, 255, 189, 0.3) 100%)' }}
                />
                <div className="relative z-10 max-w-5xl mx-auto">
                    <h3 className="text-[#0E0E0E] md:text-[39px] text-[31px] font-bold text-[#0E0E0E] mb-2 leading-10">
                        {conclusionTitle}
                    </h3>
                    <button 
              onClick={() => router.push("")}
              className="cursor-pointer inline-flex items-center gap-3 bg-[#00E676] hover:bg-[#00c864] text-black font-bold py-3 px-3 rounded-full transition-all duration-300 group shadow-lg mt-7"
            >
              Enroll in {title}
              <div className="bg-black text-white text-[16px] rounded-full p-1.5 w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={12} />
              </div>
            </button>
                </div>
            </div>

            {/* ========================================= 6. FAQ SECTION (Using Shadcn Accordion) ========================================= */}
            <section className="bg-white w-full py-28 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[31px] md:text-[39px] font-bold text-[#1F1F1F] text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-gray-200"
                            >
                                <AccordionTrigger
                                    className="text-[16px] md:text-[20px] font-medium text-[#1F1F1F] hover:text-[#00E676] hover:no-underline text-left py-6"
                                >
                                    Q: {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[13px] text-[#404040] md:text-[16px] font-medium leading-relaxed pb-6">
                                    A: {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </section>

            {/* ========================================= 7. AdvisorBox  ========================================= */}
            <AdvisorBox />

            
            {/* ========================================= 9. AdvisorBox  ========================================= */}
            <div className="pt-32">
            <Footer />
            </div>
            
        </div>
    );
};

export default CourseDetailLayout;