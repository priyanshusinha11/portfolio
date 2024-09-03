"use client"
import { Box } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Box
        borderRadius="1rem"
        className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
        containerClassName="m-auto w-[750px] max-w-[90%] h-auto md:mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Get in touch with Me</h1>
        <div className="mt-10 text-lg">
          <ul>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <AiOutlineMail size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:priyanshusinha.2807@gmail.com"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  priyanshusinha.2807@gmail.com
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaTwitter size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Twitter:</span>{" "}
                <a
                  href="https://x.com/priyanshu11_"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @priyanshu11_
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaLinkedin size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/priyanshusina11/"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @priyanshusinha11
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <ImLocation size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Address:</span> Patia, Bhubaneswar, Odisha. Pin: 751024
              </div>
            </li>
          </ul>
        </div>
      </Box>
      <Spotlight/>
    </div>
  );
};

export default Contact;
