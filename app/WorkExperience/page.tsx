import React from 'react';
import { FaGear } from "react-icons/fa6";
import Link from 'next/link'
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineStock } from "react-icons/ai";

export default function WorkExperience() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-screen px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
            {/* Background blur effects */}
            <div className="absolute pointer-events-none -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 transition duration-1000"></div>
            <div className="z-10 flex flex-col  gap-5 justify-center w-full">
                {[
                    { icon: <FaGear className="text-xl text-white" />, text: "SWE", dest: "swe" },
                    { icon: <FcBusinessman className="text-xl text-white" />, text: "Business Development", dest: "bizdev" },
                    { icon: <AiOutlineStock className="text-xl text-white" />, text: "Business Analysis", dest: "ba-da" },
                ].map((nav, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 transition-colors duration-300 w-full "
                    >
                        {nav.icon}
                        <Link href={`WorkExperience/${nav.dest}`} className='w-full font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            {nav.text}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
