import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            April 2024 - Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Xcelore - (April 2024 - Present)"
            result="Noida, India"
            des="Developed end-to-end scalable full-stack web applications using Next.js, React.js, TypeScript and Node.js, improving load time by 35% and enhancing user engagement through responsive, high-performance interfaces. Integrated RESTful APIs and WebSocket-based real-time features, enabling seamless data synchronization and interactive dashboards using Highcharts — contributing to a 30% increase in platform responsiveness. Streamlined CI/CD workflows by managing GitLab repositories, optimizing Jira workflows, and leveraging AWS logs for proactive monitoring — reducing deployment issues by 40% and accelerating release cycles. Collaborated directly with clients to gather requirements, deliver technical consultation, and iterate rapidly — driving 95% on-time feature delivery and ensuring high client satisfaction."
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Experience;
