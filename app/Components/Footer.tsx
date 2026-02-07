import React from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle 
} from 'lucide-react';

import Logo from "../assests/Tekrise-Logo.svg"
import FootLogo from "../assests/FooterIMage.svg"

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-16 pb-8 overflow-hidden font-sans">
      
      {/* --- Background Watermark Image --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full flex justify-center overflow-hidden">
        {/* Adjust opacity here (opacity-5 = 0.05) to blend it like the text was */}
        <Image
          src={FootLogo}
          alt="Tekrise Watermark" 
          className="w-[90%] md:w-[50%] max-w-none object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* --- Main Logo Image --- */}
            <div className="flex items-center">
              <Image 
                src={Logo}
                alt="Tekrise Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            
            <p className="text-[#FEFEFE] font-normal text-[16px] leading-relaxed max-w-lg">
              Tekrise Academy - Empowering learners with job-ready tech skills worldwide.
            </p>

            <p className="text-[#FEFEFE] text-[16px]">
             © {new Date().getFullYear()} Tekrise. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, MessageCircle, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="bg-[#00E676] hover:bg-[#00c864] text-black p-2 rounded-full transition-colors duration-200"
                >
                  <Icon size={16} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-4 text-[16px] text-[#FEFEFE]">
              <li><a href="/courses/frontend" className="hover:text-[#00E676] transition-colors">Frontend Development</a></li>
              <li><a href="/courses/backend" className="hover:text-[#00E676] transition-colors">Backend Development</a></li>
              <li><a href="/courses/ui-ux" className="hover:text-[#00E676] transition-colors">UI/UX Design</a></li>
              <li><a href="/courses/data-analysis" className="hover:text-[#00E676] transition-colors">Data Analysis</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="mt-1 bg-[#00E676] rounded-full p-1.5 shrink-0">
                  <MapPin size={14} className="text-black" />
                </div>
                <p className="text-[16px] text-[#FEFEFE] font-normal leading-relaxed">
                  2nd Floor, Remilekun House, Adamasingba, 72 Adekunle Fajuyi Rd, Dugbe, Ibadan 200281, Oyo
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <div className="mt-1 bg-[#00E676] rounded-full p-1.5 shrink-0">
                  <Phone size={14} className="text-black" />
                </div>
                <div className="text-sm text-[#FEFEFE]">
                  <p className="mb-0.5">Call/Whatsapp:</p>
                  <p className="text-white">(+234) 08088208102</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                 <div className="mt-1 bg-[#00E676] rounded-full p-1.5 shrink-0">
                  <Mail size={14} className="text-black" />
                </div>
                <div className="text-sm text-[#FEFEFE]">
                  <p className="mb-0.5">Email Address:</p>
                  <a href="mailto:hello@tekriseacademy.com" className="text-white hover:text-[#00E676]">hello@tekriseacademy.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: About */}
          <div className="space-y-6 pl-0 md:pl-12 ">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="space-y-4 text-sm text-[#FEFEFE] text-[16px]">
              <li><a href="/about" className="hover:text-[#00E676] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00E676] transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#00E676] transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-[#00E676] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 5: Legal / Policy */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Legal / Policy</h3>
            <ul className="space-y-4 text-sm text-[#FEFEFE] text-[16px]">
              <li><a href="#" className="hover:text-[#00E676] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00E676] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00E676] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;