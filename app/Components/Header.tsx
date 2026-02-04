"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// --- IMAGE IMPORTS ---
import logoImg from "../assests/Tekrise-Logo.svg";
import arrowRightIcon from "../assests/Go-In-Arrow.svg";
import dropdownIcon from "../assests/dropdownIcon.svg";
import menuIcon from "../assests/Menu.svg";
import close from "../assests/Close.svg"

const Header = () => {
    const router = useRouter();
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false); // State for mobile dropdown

    const courses = [
        { name: "Frontend Development", path: "/courses/frontend" },
        { name: "Backend Development", path: "/courses/backend" },
        { name: "Fullstack Development", path: "/courses/fullstack" },
        { name: "UI/UX Design", path: "/courses/ui-ux" },
        { name: "Data Analysis", path: "/courses/data-analysis" }
    ];

    // Helper for mobile navigation
    const navigate = (path: string) => {
        router.push(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-6 left-0 w-full z-50 px-4 md:px-10">
            <nav className="w-[100%] mx-auto bg-[#0E0E0E] border border-white/10 rounded-full py-2 px-3 md:px-10 flex items-center justify-between shadow-2xl">
                <div className='flex justify-between items-center w-full'>
                    {/* Logo Container - Fixed size here */}
                    <div
                        onClick={() => router.push("/")}
                        className="cursor-pointer relative w-[122px] h-[27px]"
                    >
                        <Image
                            src={logoImg}
                            alt="te-rise"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-12 text-white font-normal text-[20px]">
                        <li onClick={() => router.push("/")} className="text-[#00E676] cursor-pointer hover:opacity-80 transition-all">
                            Home
                        </li>
                        <li onClick={() => router.push("/about")} className="hover:text-[#00E676] cursor-pointer transition-all">
                            About Us
                        </li>

                        <li
                            className="relative py-2 cursor-pointer group"
                            onMouseEnter={() => setIsCoursesOpen(true)}
                            onMouseLeave={() => setIsCoursesOpen(false)}
                        >
                            <div className="flex items-center gap-2 group-hover:text-[#00E676] transition-colors">
                                Courses
                                <div className={`relative w-5 h-5 transition-transform duration-300 ease-in-out ${isCoursesOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    <Image
                                        src={dropdownIcon}
                                        alt=""
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>

                            <div className={`absolute top-full left-0 mt-2 w-60 bg-[#141414] border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top ${isCoursesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                {courses.map((course) => (
                                    <div
                                        key={course.name}
                                        onClick={() => router.push(course.path)}
                                        className="block px-4 py-3 text-sm text-white/70 hover:text-[#00E676] hover:bg-white/5 rounded-xl transition-all"
                                    >
                                        {course.name}
                                    </div>
                                ))}
                            </div>
                        </li>

                        <li onClick={() => router.push("/contact")} className="hover:text-[#00E676] cursor-pointer transition-all">
                            Contact Us
                        </li>
                    </ul>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => router.push("/login")}
                            className="text-[#FEFEFE] text-[16px] font-medium border-[1px] cursor-pointer border-[#01E888] px-16 py-2.5 rounded-full hover:bg-[#00E676]/10 transition-all font-medium"
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => router.push("/apply")}
                            className="bg-[#01E888] text-[#0E0E0E] text-[16px] px-6 py-2.5 rounded-full font-bold flex items-center gap-3 hover:bg-[#00c864] transition-all group cursor-pointer"
                        >
                            Apply Now
                            <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <div className="relative w-6 h-6">
                                    <Image src={arrowRightIcon} alt="" fill className="object-contain" />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden relative" onClick={() => setIsMobileMenuOpen(true)}>
                        <Image src={menuIcon} alt="Menu" className="" />
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div className={`fixed inset-0 bg-[#0E0E0E] z-[100] transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full py-7 px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div className="relative w-28 h-8">
                            <Image src={logoImg} alt="logo" fill className="object-contain" />
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="">
                            <div className="relative w-7 h-7">
                                <Image src={close} alt="Close" fill className="object-contain" />
                            </div>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-8 text-xl text-white font-medium">
                        <div onClick={() => navigate("/")} className="cursor-pointer">Home</div>
                        <div onClick={() => navigate("/about")} className="cursor-pointer">About Us</div>

                        {/* Mobile Courses Dropdown */}
                        <div className="flex flex-col gap-4">
                            <div
                                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                                className="flex items-center justify-between text-[#00E676] cursor-pointer"
                            >
                                Courses
                                <div className={`relative w-4 h-4 transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`}>
                                    <Image src={dropdownIcon} alt="" fill className="object-contain brightness-0 invert" />
                                </div>
                            </div>

                            <div className={`flex flex-col gap-4 pl-4 border-l border-white/10 ml-1 overflow-hidden transition-all duration-300 ${isMobileCoursesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {courses.map(course => (
                                    <div key={course.name} onClick={() => navigate(course.path)} className="text-white/60 text-lg">
                                        {course.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div onClick={() => navigate("/contact")} className="cursor-pointer">Contact Us</div>
                    </nav>

                    <div className="mt-auto flex flex-col gap-4">
                        <button onClick={() => navigate("/apply")} className="bg-[#00E676] text-black w-full py-4 rounded-full font-bold flex items-center justify-center gap-3">
                            Apply Now
                            <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
                                <div className="relative w-7 h-7">
                                    <Image src={arrowRightIcon} alt="" fill className="object-contain" />
                                </div>
                            </div>
                        </button>
                        <button onClick={() => navigate("/login")} className="border border-[#00E676] text-white w-full py-4 rounded-full font-bold text-center">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;