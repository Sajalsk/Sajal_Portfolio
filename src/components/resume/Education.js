import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// renamed the component to Education
// This component displays education and job experience in two sections: Education Quality and Job Experience.
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="KIET Group Of Institutions, Ghaziabad (2020 - 2024)"
            result="7.8/10"
            des="Completed a comprehensive Computer Science and Engineering program with focus on software development, 
            data structures, algorithms, and database management systems. Developed strong technical foundation in 
            programming languages, web technologies, and software engineering principles while working on various 
            practical projects to apply theoretical knowledge."
          />
          <ResumeCard
            title="Certifications"
            subTitle="Various Platforms (2021)"
            result="Completed"
            des="• CPA: Programming Essentials in C++ — Cisco Academy (Jan 2021)
            • Certified 5* in Problem Solving — HackerRank (June 2021)
            • Fundamentals of GIT — Progate (December 2021)
            • Solved more than 600+ problems across competitive programming platforms"
          />
          <ResumeCard
            title="Coursework"
            subTitle="Key Academic Subjects"
            result="Completed"
            des="• Data Structure Analysis and Design of Algorithms
            • Object Oriented Programming
            • Database Management System
            • Web Development Technologies
            • Software Engineering Principles
            • Computer Networks and Systems"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            April 2024 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Job Experience & Projects
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Xcelore - (April 2024 - Present)"
            result="Noida, India"
            des="• Developed end-to-end scalable full-stack web applications using Next.js, React.js, TypeScript and Node.js
            • Improved load time by 35% and enhanced user engagement through responsive, high-performance interfaces
            • Integrated RESTful APIs and WebSocket-based real-time features with Highcharts dashboards
            • Streamlined CI/CD workflows using GitLab, Jira, and AWS logs — reducing deployment issues by 40%
            • Collaborated directly with clients to deliver technical consultation and iterate rapidly"
          />
          <ResumeCard
            title="Petwell - Pet Wellness Automation Platform"
            subTitle="Project (October 2024 - Present)"
            result="Backend Development"
            des="• Developed Node.js backend service to process CSV files via SFTP into automated PDF health reports
            • Implemented server-side PDF generation using PDFKit with SendGrid email integration
            • Designed and deployed cron jobs to automate end-to-end workflow from file ingestion to email dispatch
            • Collaborated with DevOps teams using AWS Secrets Manager and monitored via CloudWatch"
          />
          <ResumeCard
            title="Pythag - Cell Monitor SaaS Platform"
            subTitle="Project (Dec 2024 - September 2025)"
            result="Full-Stack Development"
            des="• Designed and developed a robust SaaS platform using Next.js and TypeScript with 99.9% uptime
            • Engineered real-time monitoring dashboards with Highcharts, WebSockets and REST APIs
            • Enabled live data visualization with sub-100ms latency, improving engagement by 25%
            • Led agile sprints with cross-functional teams using Atlassian Jira
            • Enhanced frontend responsiveness by 40% and decreased API failure rates by 60%"
          />
          <ResumeCard
            title="Xcelight - AI-Powered Video Analytics Platform"
            subTitle="Project (June 2024 - Dec 2024)"
            result="Full-Stack Development"
            des="• Engineered AI-powered video analytics platform transforming CCTV footage into business insights
            • Used advanced vision algorithms and emotion detection for real-time behavioral analytics
            • Developed responsive dashboards using Next.js, Chart.js, and WebSocket.io with 50% latency reduction
            • Integrated with enterprise APIs, reducing manual intervention by 60%
            • Deployed cloud-native microservices for thousands of concurrent surveillance feeds"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
