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
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <TypewriterEffectSmooth
                    className="text-base sm:text-2xl md:text-3xl lg:text-5xl"
                    words={words}
                />
                <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
                    Designing sleek, scalable code and zapping bugs in rapid mode
                </p>
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-4 mt-8">
                    <button
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        onClick={() => router.push("/experience")}
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-base font-medium text-white backdrop-blur-3xl">
                            Experience
                        </span>
                    </button>
                    <button
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        onClick={() => router.push("/projects")}
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-base font-medium text-white backdrop-blur-3xl">
                            Projects
                        </span>
                    </button>
                </div>
            </motion.h1>
        </LampContainer>
    );
};

export default Hero;