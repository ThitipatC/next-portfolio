import React from 'react';
import WorkExpBox from '@/app/WorkExpBox';
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaGithub, FaAws, FaDocker, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDatabricks,SiBitbucket, SiJira, SiClickup } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function SWE() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Title */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Software Engineering Experience
        </h1>
       
        <div className="space-y-6">
        <WorkExpBox companyInfo = "Potico, Thailand" title="Business Development and Operation Intern" duration='Nov 2024 - Present' contributions={
             [
                "Reformulate and Automate process of calculating of operating expense saving more than 3 hours",
                "Use python to streamline COGS bookkeeping on google sheet saving more than 30 minutes of brute force needed with the conventional way" 
            ]
                }/>
          <WorkExpBox companyInfo = "UniBridge, Thailand" title="Cofounder and Software Engineer" duration='June 2024 - Present' contributions={
             [
              "Create company website using ReactJS",
              "Design more than 100 test cases for frontend testing using vitest and react-testing-library and jest for backend",
              "Develop part of the backend logic using Expressjs",
              "Create intra-organizational applications that used for operation using MongoDB and Retool",
              "Acted as a project manager and scrum leader to provision the current progress of the set milestone"
            ]
                }/>

          {/* J&J Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Johnson & Johnson, Singapore</h2>
                  <h3 className="text-lg font-medium text-purple-400 mb-1">Software Engineer Intern</h3>
                  <p className="text-gray-400">May 2024 - Oct 2024</p>
                </div>
              </div>

              {/* Databricks Project */}
              <div className="mb-6">
                <div className='flex gap-2'>
                <h3 className="text-lg font-medium text-white mb-3 mr-5">Framework and Library for Databricks Migration</h3>
                 <SiDatabricks className="text-2xl text-red-400" />
                  <FaPython className="text-2xl text-yellow-400" />
                  <SiBitbucket className="text-2xl text-blue-500"/>
                  <SiJira className="text-2xl text-purple-500"/>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Designed Python libraries for migrating the 80 million worth commercial analytics engine into Databricks improving developer experience",
                    "Conduct research on current AWS cloud architectures to map the old components to the available tools on Databricks",
                    "Gather requirement through discussing with internal and external stakeholders",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* UAT Project */}
              <div className="mb-6">
                <div className='flex gap-2'>
                <h3 className="text-lg font-medium text-white mb-3 mr-5">JIRA UAT Help Kit</h3>
                  <FaAws className="text-2xl text-orange-400" />
                  <FaDocker className="text-2xl text-blue-800"/>
                  <SiBitbucket className="text-2xl text-blue-500"/>
                  <SiJira className="text-2xl text-purple-500"/>
                  <FaReact key="react" className="text-2xl text-blue-400" />
                  <SiExpress key="react" className="text-2xl text-green-400" />

                  </div>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "Created a web application using Expressjs, Reactjs that improves UX with UAT Testing on Jira",
                    "Saved on average 7 clicks per test steps",
                    "Developed on AWS EC2 and Docker"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Cards */}
            {[
              {
                title: "GEN-AI Enabled News Scraping and Summarization",
                description: "An application to compile and summarize finance news from various sources",
                icons: [<FaReact key="react" className="text-blue-400" />, <SiDjango key="django" className="text-green-400" />, <BiLogoPostgresql key="psql" className="text-blue-400" />]
              },
              {
                title: "Routine Task to-do list with timer",
                description: "An application that keeps track of daily routine tasks and how much time have you spent on it",
                icons: [<FaReact key="react" className="text-blue-400" />]
              }
            ].map((project, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-48">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-3 text-2xl">
                    {project.icons}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}