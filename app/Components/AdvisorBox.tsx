"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- IMAGE IMPORTS ---
import arrowIcon from "../assests/Go-In-Arrow.svg";
import YbgImage from "../assests/YPattern.svg";
import arrowBgImage from "../assests/arrowBgImage.svg"

const AdvisorBox = () => {
    const router = useRouter()
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative md:w-[90%] w-[90%] mx-auto bg-[#052C26] rounded-4xl p-6 md:p-12 overflow-hidden text-center flex flex-col items-center justify-center"
            >
                {/* Background Wavy Pattern Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: `url(${YbgImage.src})` }}
                />

                <div className="relative z-10 md:max-w-3xl w-full">
                    <h2 className="text-[25px] md:text-[39px] font-bold text-white mb-4">
                        Not Sure Which Course Is Right for You?
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                        Get personalized guidance from experienced professionals who are ready to help you choose the right learning path and answer your tech-related questions.
                    </p>

                    <div className='flex justify-center'>
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-[#00E676] hover:bg-[#00c864] text-[#0E0E0E] font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95 group shadow-xl shadow-[#00E676]/10 cursor-pointer"
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
    )
}

export default AdvisorBox
