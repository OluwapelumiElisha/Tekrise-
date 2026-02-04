import React from 'react';
import Link from 'next/link';

// If you want to use the import variable in the style tag:
import bgImage from "@/app/assests/Background.png";
import Image from 'next/image';
import robotIcon from "@/app/assests/mage_robot-wink.svg"
import homeIcon from "@/app/assests/Frame 1116606838.svg"

const NotFound = () => {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 overflow-hidden">

            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url(${bgImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
                {/* 404 Visual Section */}
                <div className="flex items-center justify-center gap-4 mb-10 scale-90 md:scale-110">
                    {/* Left "4" */}
                    <span className="text-7xl md:text-9xl font-bold text-[#00E676] select-none">4</span>

                    {/* Robot Head Container */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                        {/* The Image */}
                        <div className="relative w-full h-full z-10">
                            <Image
                                src={robotIcon}
                                alt="Robot Head"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-2 w-[110%] h-1.5 bg-[#00E676] rounded-full blur-[2px] opacity-80 shadow-[0_0_15px_#00E676]"></div>
                    </div>

                    {/* Right "4" */}
                    <span className="text-7xl md:text-9xl font-bold text-[#00E676] select-none">4</span>
                </div>

                {/* Text and Buttons follow... */}
            </div>

            {/* Text Content */}
            <h2 className="text-xl md:text-[39px] font-bold mb-4 tracking-tight text-[#FEFEFE]">
                Ooops!............Page Not Found
            </h2>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-12 max-w-xl mx-auto text-center text-[#FEFEFE]">
                Looks like this page is missing... kind of like a missing semicolon in your code.
                Don't worry, your learning journey is still on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 md:w-full w-[80%] mx-auto sm:w-auto justify-center">
                <Link
                    href="/"
                    className="bg-[#00E676] hover:bg-[#00c864] text-[#0E0E0E] font-medium py-4 px-10 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#00E676]/20 text-[16px]"
                >
                    Go Back Home
                    <div className="relative w-7 h-7">
                        <Image
                            src={homeIcon}
                            alt="Home"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                <Link
                    href="/courses"
                    className="bg-white hover:bg-gray-100 text-[#0E0E0E] text-[16px] font-medium py-4 px-10 rounded-full transition-all active:scale-95 text-center shadow-lg"
                >
                    Explore Courses
                </Link>
            </div>
        </main>
    );
};

export default NotFound;