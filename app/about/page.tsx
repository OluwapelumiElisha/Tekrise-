import React from 'react';
import Image from 'next/image';

// --- IMAGES ---
import bgImage from "../assests/Background.png";
import Header from '../Components/Header';
import aboutArrow from "../assests/aboutArrow.svg"
import mission from "../assests/Mission.svg"
import bgArrow from "../assests/OurCoursesArrow.svg"
import vission from "../assests/Vission.svg"

import valueImage from '../assests/ValuePicture.svg';
import excellenceImg from '../assests/Excellence.svg';
import accessibilityImg from '../assests/Accessibility.svg';
import growthImg from '../assests/Growth.svg';
import communityImg from '../assests/Community.svg';
import YbgImage from "../assests/YPattern.svg";
import AdvisorBox from '../Components/AdvisorBox';
import Footer from '../Components/Footer';



const AboutPage = () => {

    const valuesData = [
        {
            title: "Excellence",
            description: "We teach what the industry demands.",
            image: excellenceImg,
        },
        {
            title: "Accessibility",
            description: "Learning should be inclusive.",
            image: accessibilityImg,
        },
        {
            title: "Growth",
            description: "Continuous learning and improvement.",
            image: growthImg,
        },
        {
            title: "Community",
            description: "Collaboration over competition.",
            image: communityImg,
        },
    ];

    return (
        <div className="w-full">
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
                            About Us
                            {/* The Green Underline/Brush Stroke */}
                            <span className="absolute -bottom-1 left-0 w-full h-[8px] md:h-[12px] bg-[#00E676] rounded-full blur-[2px]" />
                        </span>{' '}
                        at Tekrise Academy
                    </h1>
                    <p className="text-[#FEFEFE] text-[16px] md:text-[18px] font-normal max-w-2xl mx-auto md:pt-3 pt-2">
                        Building practical tech skills that prepare learners for real-world careers.
                    </p>
                </div>
            </section>


            {/* ========================================= SECTION 2: WHO WE ARE ========================================= */}
            <section className="bg-white w-full py-16 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-10">

                        {/* Left Content */}
                        <div className="flex-1 space-y-0 text-left">
                            <h2 className="text-[31px] md:text-[70px] font-bold text-[#0E0E0E]">
                                Who We Are
                            </h2>
                            <p className="text-[#0E0E0E] leading-relaxed text-[14px] md:text-[20px]">
                                Tekrise Academy is a tech training institute committed to raising the next generation of African tech professionals. We focus on practical tech education that prepares students for real jobs.
                            </p>
                        </div>

                        {/* Right Image Composition */}
                        <div className="flex-1 relative w-full flex justify-center md:justify-end">
                            {/* The Green Background Strip */}
                            <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#01E888] z-0" />

                            {/* The Main Image (Black Square with Arrow) */}
                            <div className="relative z-10">
                                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-black rounded-[6rem] flex items-center justify-center shadow-2xl lg:mr-48 md:mr-16 sm:mr-0 mr-0">

                                    <div className="relative w-28 h-28 md:w-48 md:h-48">
                                        <Image
                                            src={aboutArrow}
                                            alt="Arrow"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ========================================= SECTION 3: MISSION & VISION ========================================= */}
            <section className="relative bg-[#0F0F0F] py-16 md:py-14 px-4 overflow-hidden">

                <Image
                    src={bgArrow}
                    alt=''
                    className='absolute bottom-0 left-0'
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className='w-[95%] mx-auto'>
                        <h2 className="text-[31px] md:text-[39px] font-bold text-[#FEFEFE] mb-10 md:mb-10">
                            Mission & Vision
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                            {/* Card 1: Our Mission */}
                            <div className="bg-white rounded-3xl p-8 md:p-6 flex flex-col items-start gap-10 hover:shadow-lg transition-shadow duration-300">
                                <div className="relative w-12 h-12 rounded-full bg-[#00E676] flex items-center justify-center shrink-0">
                                    <Image
                                        src={mission}
                                        alt="Mission"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0E0E0E] mb-3">Our Mission</h3>
                                    <p className="text-[#404040] text-[16px] font-normal leading-relaxed">
                                        To empower individuals with job-ready tech skills that open doors to global opportunities.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Our Vision */}
                            <div className="bg-white rounded-3xl p-8 md:p-6 flex flex-col items-start gap-10 hover:shadow-lg transition-shadow duration-300">
                                <div className="relative w-12 h-12 rounded-full bg-[#00E676] flex items-center justify-center shrink-0">
                                    <Image
                                        src={vission}
                                        alt="Vission"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {"To become Africa's leading tech academy for practical, innovation, and impactful tech education."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full bg-white font-sans overflow-hidden">

                {/* ======================= VALUES CONTENT SECTION ======================= */}
                <div className="w-full mx-auto pt-16 pb-20 lg:py-24">

                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E0E0E] mb-12 lg:mb-20">
                        Our Values
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                        <div className="w-full lg:w-1/2 relative order-last lg:order-first flex justify-center lg:justify-start">
                            <div
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-44 h-[80%] rounded-r-lg z-0"
                                style={{
                                    backgroundImage: `url(${bgImage.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />

                            {/* Main Image Wrapper */}
                            <div className="relative z-10 w-full w-[500px] h-[350px] md:h-[500px] md:ml-36 ml-12 md:mr-0 mr-6 rounded-4xl overflow-hidden shadow-xl">
                                <Image
                                    src={valueImage}
                                    alt="Students working together"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 order-first lg:order-last">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10">
                                {valuesData.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">

                                        {/* Image Circle */}
                                        <div className="w-14 h-14 rounded-full bg-[#00E676] flex items-center justify-center mb-4 shadow-sm relative">
                                            <div className="relative w-7 h-7">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <h3 className="md:text-[31px] text-[20px] font-bold text-[#0E0E0E] mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="md:text-[16px] text-[14px] text-[#404040] max-w-[180px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* =======================
          BOTTOM BANNER SECTION
      ======================= */}
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
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-[#0E0E0E] md:text-[39px] text-[31px] font-bold text-[#0E0E0E] mb-2">
                            Why Tekrise Academy?
                        </h3>
                        <p className="text-[#0E0E0E] text-[16px] md:text-[20px] max-w-md mx-auto">
                            {"We don't just teach tech—we build confidence, competence, and careers."}
                        </p>
                    </div>
                </div>

            </section>
            <div className='bg-white md:pt-32 pt-20 md:pb-32 pb-20'>
                <AdvisorBox />
            </div>
            {/* ======================== FOOTER ====================== */}
            <Footer />
        </div>
    );
};

export default AboutPage;