"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const SkillSection = () => {
  const SKILLS = [
    {
      category: "Programming Language",
      value: "C, C++, Java, JavaScript, TypeScript, Python",
    },
    {
      category: "Frameworks/ Libraries",
      value:
        "React.js, Next.js, Node.js, Express.js, , Tailwind CSS",
    },
    {
      category: "Database",
      value: "MySQL, MongoDB, Redis, PostgresSQL",
    },
    {
      category: "Tool-Kits",
      value: "Git and GitHub, Linux, MongoDB, MySQL, Firebase, Appwrite, Supabase, AWS, Bash, Nginx, Prisma",
    },
    {
      category: "Academics",
      value: "Data Structures and Algorithms, Computer Networks, Operating Systems, Database Management Systems, Object Oriented Programming, Automata and Compiler Design, Computer Architecture"
    }
  ];
  return (
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-white/[0.2] shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold text-center text-white mb-6">My Technical Skills</h1>
          <div className="mx-auto">
              {SKILLS.map((skill, key) => (
                  <div key={key} className="flex gap-1 md:gap-3 mt-5 text-sm md:text-base">
                      <div className="text-blue-400">{skill.category}:</div>
                      <div className="text-gray-300">{skill.value}</div>
                  </div>
              ))}
          </div>
      </BackgroundGradient>
  );
};

export default SkillSection;
