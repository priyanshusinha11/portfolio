"use client";

import { Box } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import experiences from "@/db/experiences";
import { TbPointFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <div className="min-h-screen w-full py-8 sm:py-12">
      <div className="relative">
        <Spotlight />
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, key_exp) => (
            <Box
              key={`exp_${key_exp}`}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.5rem"
              className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-4 sm:p-6 md:p-10 flex flex-col"
              containerClassName="mx-auto w-[95%] sm:w-[85%] md:w-[900px] max-w-[90%] h-auto"
            >
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {experience.company}
                  </h2>
                  <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                    {experience.joining_date} - {experience.ending_date}
                  </div>
                </div>

                {experience?.role && (
                  <h5 className="mt-2 sm:mt-3 italic text-sm sm:text-base">
                    {experience.role}
                  </h5>
                )}

                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {experience.work.map((work_point, key_work) => (
                    <li
                      key={`work_${key_work}`}
                      className="flex items-start sm:items-center gap-2 sm:gap-3"
                    >
                      <TbPointFilled
                        className="mt-1 sm:mt-0 flex-shrink-0"
                        size="1.2rem"
                      />
                      <div className="text-sm sm:text-base leading-relaxed">
                        {work_point}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;