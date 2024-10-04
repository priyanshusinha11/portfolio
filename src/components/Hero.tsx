"use client";

import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
    const words = [
        { text: "Hi,", className: "text-white" },
        { text: "I", className: "text-white" },
        { text: "am", className: "text-white" },
        { text: "Priyanshu", className: "text-white" },
        { text: "Sinha,", className: "text-white" },
        { text: "a", className: "text-white" },
        { text: "Software", className: "text-blue-500 dark:text-blue-500" },
        { text: "Engineer.", className: "text-blue-500 dark:text-blue-500" },
    ];

    const router = useRouter();

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="w-full max-w-4xl mx-auto text-center"
                >
                    <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text">
                        <TypewriterEffectSmooth
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-transparent"
                            words={words}
                        />
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white">
                            Designing sleek, scalable code and zapping bugs in rapid mode
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                            <button
                                className="w-full sm:w-auto relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                onClick={() => router.push("/experience")}
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 sm:px-10 py-4 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
                                    Experience
                                </span>
                            </button>
                            <button
                                className="w-full sm:w-auto relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                                onClick={() => router.push("/projects")}
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 sm:px-10 py-4 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
                                    Projects
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </LampContainer>
        </div>
    );
};

export default Hero;