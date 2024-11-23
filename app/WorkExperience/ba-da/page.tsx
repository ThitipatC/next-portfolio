import React from 'react';
import WorkExpBox from '@/app/WorkExpBox';

export default function DA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Title */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Business Analysis Experience
        </h1>

        {/* Professional Experience Section */}
        <div className="space-y-6">
          <WorkExpBox companyInfo = "Potico, Thailand" title="Business Development and Operation Inern" duration='Nov 2024 - Present' contributions={[
                  "Reformulate and Automate process of calculating of operation expense saving more than 3 hours by analysing the pattern of the timesheet report using google sheet and pands",
                  "Use python to streamline COGS bookkeeping on google sheet saving more than 30 minutes of brute force needed with the conventional way"
                ]}/>
          <WorkExpBox companyInfo = "UniBridge" title="Cofounder" duration='June 2024 - Present' contributions={
              [
                "Ideate revenue model and pricing strategy",
                "Conduct market research and competitor analysis to better understand possible customer pain point and our value proposition",
                "Acted as a project manager and scrum leader to provision the current progress of the set milestone"
              ]
                }/>
          <WorkExpBox companyInfo = "Johnson & Johnson, Singapore" title="Machine Learning Intern" duration='May - Oct 2024' contributions={[
                  "Model the connectedness of KPIs in supply chain using Regression on pandas with scikit learn",
                ]}/>
          <WorkExpBox companyInfo = "Touch Technologies, Thailand" title="Market Research Intern" duration='May - July 2023' contributions={
             [
              "Developed dashboard using looker studio, excel and SQL to visualize monthly KPIs and insights",
              "Developed an interactive data app using Retool JavaScript, and MongoDB to visualize teleconsultation appointment details for Business Administration colleagues",
            ]
                }/>
        </div>
      </div>
    </div>
  );
}