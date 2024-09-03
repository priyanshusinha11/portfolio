import blog from "@/assests/project-thumbnails/blog.png";
import cloudify from "@/assests/project-thumbnails/cloudify.png";
import meme from "@/assests/project-thumbnails/meme.png";
import music from "@/assests/project-thumbnails/music.png";
import price from "@/assests/project-thumbnails/price.png";
import urltrimmer from "@/assests/project-thumbnails/urltrimmer.png";
import whisperly from "@/assests/project-thumbnails/whisperly.png";
import yt from "@/assests/project-thumbnails/yt.png";

const projects = [
    {
        title: "Whisperly",
        description:
            "Anonymous messaging app allowing users to receive messages anonymously via unique links. Features include email verification and AI-generated message suggestions. Full-stack - Next.js, Tailwind CSS with ShadCN UI, Database - Mongoose, AI - Gemini AI.",
        thumbnail: whisperly,
        githubLink: "https://github.com/priyanshusinha11/ama-app",
    },
    {
        title: "Cloudify",
        description:
            "SaaS application for video compression and AI-powered image cropping. Full-stack - Next.js, File Handling - Cloudinary, Database - Prisma with Neon DB, UI - Daisy UI with Tailwind CSS.",
        thumbnail: cloudify,
        githubLink: "https://github.com/priyanshusinha11/cloud-saas",
    },
    {
        title: "YouTube-like App Backend",
        description:
            "Backend for a video streaming platform with user management, video uploads, and subscription features. Security - bcrypt, JWT; Database - Mongoose with aggregate-paginate.",
        thumbnail: yt,
        githubLink: "https://github.com/priyanshusinha11/youtube-backend",
    },
    {
        title: "BlogIt",
        description:
            "Dynamic blogging platform with real-time article editing and efficient state management. Frontend - React, State Management - Redux, Backend-as-a-Service - Appwrite, Deployed on Vercel.",
        thumbnail: blog,
        githubLink: "https://github.com/priyanshusinha11/blog-app",
    },
    {
        title: "URL Trimmer",
        description:
            "URL shortener app with custom URL generation, QR code creation, and usage analytics. Frontend - React, Styling - Tailwind CSS, Navigation - React Router DOM.",
        thumbnail: urltrimmer,
        githubLink: "https://github.com/priyanshusinha11/url-trimmer",
    },
    {
        title: "Music Academy",
        description:
            "Landing page for a music academy with animations and transitions. Frontend - Next.js, Animations - Framer Motion, UI - Responsive design with Tailwind CSS.",
        thumbnail: music,
        githubLink: "https://github.com/priyanshusinha11/music-academy/tree/main",
    },
    {
        title: "Price Wise",
        description:
            "Real-time price monitoring platform with dynamic price tracking and email alerts. Backend - Node.js, Cron Jobs, Email - Nodemailer, Database - MongoDB.",
        thumbnail: price,
        githubLink: "https://github.com/priyanshusinha11/pricewise11",
    },
    {
        title: "Meme Generator",
        description:
            "Meme Generator app allowing users to overlay custom text on random meme images. Frontend - React, API Integration, State Management - React Hooks.",
        thumbnail: meme,
        githubLink: "https://github.com/priyanshusinha11/meme-generator",
    },
];

export default projects;
