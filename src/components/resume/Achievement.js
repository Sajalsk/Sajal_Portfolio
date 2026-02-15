import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// This component displays achievements in two sections: Company Experience and Job Experience.
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* Company Experience Section */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Coding Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Each ResumeCard represents a specific achievement or project. */}
          <ResumeCard
            title="Newton January Coding Challenge 2022"
            subTitle="Global Competitive Programming Contest"
            result="Rank 449"
            des="Secured Global Rank of 449 in the Newton January Coding Challenge 2022.
            Solved complex algorithmic problems involving data structures, dynamic programming,
            and graph algorithms within strict time constraints."
          />
          <ResumeCard
            title="Newton Grand Coding Contest 2021"
            subTitle="Global Competitive Programming Contest"
            result="Rank 2080"
            des="Achieved Global Rank of 2080 in the Newton Grand Coding Contest 2021.
            Demonstrated strong problem-solving skills and algorithmic thinking by solving
            multiple challenging problems in a competitive environment."
          />
          <ResumeCard
            title="Code Senso Challenge 2021"
            subTitle="Monthly Competitive Programming Contest"
            result="Rank 24"
            des="Secured Global Rank of 24 in Code Senso challenge in November 2021 among 5.2k+ participants.
            Demonstrated exceptional problem-solving abilities and algorithmic optimization techniques
            to achieve a top position in this highly competitive coding challenge."
          />
          <ResumeCard
            title="Atcoder Contest"
            subTitle="International Algorithmic Competition"
            result="Rank 1296"
            des="Secured Global Rank of 1296 in Atcoder Contest among 7k+ participants.
            Solved challenging problems in areas such as dynamic programming, graph theory,
            and computational geometry, demonstrating strong algorithmic knowledge and coding skills."
          />
        </div>
      </div>

      {/* Job Experience Section */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Development"
            subTitle="Modern Web Technologies"
            result="Expert"
            des="Proficient in Next.js, React.js, and TypeScript for building scalable web applications.
            Experience with responsive design, state management, and component-based architecture.
            Skilled in implementing real-time features using WebSockets and RESTful API integration."
          />
          <ResumeCard
            title="Backend Development"
            subTitle="Server-side Technologies"
            result="Advanced"
            des="Experience with Node.js and Express.js for building robust backend services.
            Skilled in database design and implementation using MongoDB and SQL.
            Knowledge of API development, authentication systems, and server-side optimization techniques."
          />
          <ResumeCard
            title="DevOps & Tools"
            subTitle="Development Operations"
            result="Proficient"
            des="Experience with CI/CD workflows using GitLab and version control systems.
            Knowledge of AWS services for monitoring and deployment.
            Proficient in using development tools like Postman, Git, and Jira for project management
            and collaborative development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
