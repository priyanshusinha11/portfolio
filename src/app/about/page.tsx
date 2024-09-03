import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
  const ACHIEVEMENTS = [
    "CodeChef: Contests: Three - star rated with a global rank in the top 100 and ranked 1st in university under id: sinha11",
    "LeetCode Rankings:Knight badge holder with a 2050 + rating, placing in the top 1 % globally; achieved a top 84 global rank in a contest under id: kisuke11",
    "Codeforces: Specialist with consistent performance in competitive programming contests under id: kisuke11",
    "Won Hacktober-Fest 2023",
    "A CISCO certified network associate"
  ];

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Priyanshu Sinha from India. I have doing
            my graduation from KIIT Bhubaneswar.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%]">
          <AboutAvatarSVG className="w-[100%]" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;
