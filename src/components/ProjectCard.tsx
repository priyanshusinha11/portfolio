"use client";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface IProjectCard {
    title: string;
    description: string;
    thumbnail: string | StaticImageData;
    githubLink: string;
    demoLink?: string;
}

export default function ProjectCard({
    title,
    description,
    thumbnail,
    githubLink,
    demoLink,
}: IProjectCard) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-900 bg-opacity-80 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[26rem] h-[30rem] rounded-xl p-6 border flex flex-col">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm max-w-sm mt-2 flex-grow"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 flex-shrink-0">
                    <div className="relative w-full h-48">
                        <Image
                            src={thumbnail}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </div>
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                    {demoLink ? (
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 cursor-pointer"
                        >
                            Try now →
                        </CardItem>
                    ) : (
                        <div className="px-4 py-2 rounded-xl text-xs font-normal text-gray-500 cursor-not-allowed">
                            Demo unavailable
                        </div>
                    )}
                    <CardItem
                        translateZ={20}
                        as="button"
                        onClick={() => {
                            window.open(githubLink, "_blank", "noopener,noreferrer");
                        }}
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-opacity-90 transition-colors duration-200"
                    >
                        GitHub
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}