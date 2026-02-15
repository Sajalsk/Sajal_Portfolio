import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Petwell - Pet Wellness Automation Platform"
          des="Developed a Node.js backend service to process CSV files uploaded via SFTP, transforming structured data into automated, user-specific PDF health reports. Implemented server-side PDF generation using PDFKit and integrated SendGrid for reliable email delivery. Designed and deployed cron jobs to continuously monitor the SFTP server, fully automating the end-to-end workflow. Collaborated with backend and DevOps teams to securely fetch credentials using AWS Secrets Manager and monitored services via CloudWatch."
          src={projectOne}
          githubLink="#"
          liveLink="#"
        />
        <ProjectsCard
          title="Pythag - Cell Monitor SaaS Platform"
          des="Designed and developed a robust SaaS platform using Next.js and TypeScript, delivering seamless UI/UX while maintaining 99.9% uptime. Engineered real-time monitoring dashboards with Highcharts, integrated using WebSockets and REST APIs, enabling live data visualization with sub-100ms latency and improving user session engagement by over 25%. Led agile sprints with cross-functional teams using Atlassian Jira. Conducted performance tuning that enhanced frontend responsiveness by 40% and decreased API failure rates by 60%."
          src={projectTwo}
          githubLink="#"
          liveLink="#"
        />
        <ProjectsCard
          title="Xcelight - Real-Time AI-Powered Video Analytics Platform"
          des="Engineered an AI-powered video analytics platform that transformed raw CCTV footage into business insights using advanced vision algorithms and emotion detection, enabling real-time behavioral analytics for retail and corporate. Developed highly responsive, real-time dashboards using Next.js, Chart.js, and WebSocket.io, resulting in a 50% reduction in latency. Integrated the platform with enterprise APIs, reducing manual intervention by 60%. Collaborated with cross-functional teams to deploy cloud-native microservices for scalable video data processing."
          src={projectThree}
          githubLink="#"
          liveLink="#"
        />
      </div>
    </section>
  );
};

export default Projects;
