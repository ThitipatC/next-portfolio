"use client"
import React, { useState } from 'react';
import { IoIosBasketball } from "react-icons/io";
import { AiOutlineTrophy, AiOutlineCompass } from "react-icons/ai";
import { GiPublicSpeaker } from "react-icons/gi";
import { MdGroups, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import CCACard, { CCACardProps } from "../CCACard";

type Activities = {
  [category: string]: CCACardProps[];
};

const activities: Activities = {
  Competition: [
    {
      title: 'Listed Top 50 Team AI Global Ecommerce Challenge (GEC) by Alibaba',
      organization: 'Alibaba',
      role: 'Leader',
      dates: 'August 2024',
      description: 'Pitched a 60 second long product pitch, Analyze company financial statement, Conduct user research, Wrote the Marketing Strategy Proposal',
      Icon: <AiOutlineTrophy className="text-orange-500 text-4xl" />,
    },
    {
      title: 'Shopee Design Contest Participant',
      organization: 'Shopee',
      role: "Leader",
      dates: 'Sep 2022',
      description: `Conducted user behavior research from online articles and journals, Designed a survey to elicit feedback on current interface`,
      Icon: <MdDesignServices className="text-orange-500 text-4xl" />,
    },
  ],
  "Self Development/Connection Event": [
    {
      title: 'Halogen x LinkedIn Mentorship Program',
      organization: 'Halogen and LinkedIn',
      role: 'Mentee',
      dates: 'March 2024 - Present',
      description: 'Monthly meetup with the mentor to better navigate through the transition of university and work life',
      Icon: <AiOutlineCompass className="text-blue-500 text-4xl" />,
    },
    {
      title: 'Bank of America Banking 3-day Connection Event',
      organization: 'Bank of America',
      role: 'Participant',
      dates: 'April 2024',
      description: 'Performed a bond pitch along with other members focusing on the market outlook of our interested company',
      Icon: <FaHandshake className="text-red-500 text-4xl" />,
    },
  ],
  Leadership: [
    {
      title: 'Helix House First Basketball Interest Group',
      organization: 'NUS Helix House Residence',
      role: "Co-founder",
      dates: 'May 2023 - May 2024',
      description: 'Led a group of 20 active users, organized weekly basketball meetup sessions, Hosted interest group open house to answer inquiries about the group with 50 visits',
      Icon: <IoIosBasketball className="text-orange-500 text-4xl" />,
    },
    {
      title: 'Light House First Interblock Game Basketball Committee',
      organization: 'NUS Light House Residence',
      role: "Member",
      dates: 'Feb 2023',
      description: 'Brainstormed with other members to draft the rules for the interblock basketball consisting of 5 blocks',
      Icon: <MdGroups className="text-red-500 text-4xl" />,
    },
    {
      title: 'Video Podcast with the Thai Embassy in Singapore',
      organization: 'Thai Embassy',
      role: "Guest Speaker",
      dates: 'November 2022',
      description: 'Participated as a guest speaker in a 30-minute podcast-style video session describing study life in Singapore',
      Icon: <GiPublicSpeaker className="text-green-500 text-4xl" />,
    },
  ]
};

export default function ExtracurricularActivities() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleSelect = (category: string) => {
    const newSet = new Set(selected);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setSelected(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
          Extracurricular Activities
        </h2>

        <div className="space-y-8">
          {Object.keys(activities).map(category => (
            <div key={category} className="space-y-4">
              {/* Category button with gradient border */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
                <button
                  onClick={() => handleSelect(category)}
                  className={`relative w-full p-3 rounded-lg font-medium transition-all duration-300 ${
                    selected.has(category)
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-900 text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              </div>

              {/* Activities grid with fade-in animation */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
                selected.has(category) ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                {activities[category].map((activity, index) => (
                  <div
                    key={index}
                    className="relative group transition-all duration-300 hover:transform hover:scale-102"
                  >
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
                    
                    {/* Card content */}
                    <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-64">
                      <div className="flex items-center gap-4 mb-4">
                        {activity.Icon}
                        <div>
                          <h3 className="font-semibold text-white">{activity.role}</h3>
                          <p className="text-sm text-gray-400">{activity.organization}</p>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-200 mb-2">{activity.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{activity.dates}</p>
                      <p className="text-sm text-gray-300">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}