import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { RiBasketballLine } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Link from 'next/link'
import { RiNextjsFill } from "react-icons/ri";

export default function Introduction() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative group">
        {/* Background blur effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        {/* Main content container */}
        <div className="flex flex-col items-start p-8 border border-gray-800 rounded-lg bg-black/50 backdrop-blur-xl w-full max-w-2xl text-white hover:border-gray-700 transition-all duration-300">
          {/* Header section */}
          <div className="w-full flex flex-col md:flex md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl animate-pulse  font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Thitipat Chaiyakul
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg text-gray-300">
                  NUS Computer Science '26
                </h2>
              </div>
            </div>
            
 
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            Passionate Thai undergraduate student studying in Singapore with a keen interest in the intersection of business and technology. My hobbies and other interests include entrepreneurship and sports!
          </p>

          {/* Interests section */}
          <div className="mt-6 w-full">
            <h3 className="text-sm uppercase text-gray-500 tracking-wider mb-3">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <RiBasketballLine className="w-4 h-4" />, text: "Sport and Fitness" },
                { icon: <Briefcase className="w-4 h-4" />, text: "Business" },
                { icon: <GraduationCap className="w-4 h-4" />, text: "Technology" }
              ].map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 transition-colors duration-300"
                >
                  {interest.icon}
                  <span className="text-sm text-gray-300">{interest.text}</span>
                </div>
              ))}
            </div>
            <h3 className="mt-5 text-sm uppercase text-gray-500 tracking-wider mb-3">
              NAVIGATE TO
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <MdExplore className="w-4 h-4" />, text: "CCA", dest:"CCA" },
                { icon: <HiOutlineOfficeBuilding className="w-4 h-4" />, text: "Work Experience", dest:"WorkExperience" },
              ].map((nav, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 transition-colors duration-300"
                >
                  {nav.icon}
                  <Link href={`/${nav.dest}`}>{nav.text}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
  );
};

