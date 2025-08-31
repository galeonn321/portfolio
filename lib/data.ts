import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import centralFilm from "@/public/centralFilm.png";
import pokemon from "@/public/pokemon-API.png";
import blogPost from "@/public/blog-post-app.png";
import atecfet from "@/public/atecfet-project.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
    {
        title: "Pango - Full Stack Developer",
        location: "Stockholm, Sweden",
        description: ` Full-Stack Developer at Pango.ai building e-commerce logistics solutions that transform
         shipping and returns into profit opportunities. I develop analytics dashboards and carrier API integrations
          using React, PHP Laravel, and Apache Solr to process high-volume logistics data, creating unified tracking
           systems and responsive interfaces with Shopify Polaris that help merchants scale operations through data-driven automation.`,
        icon: React.createElement(CgWorkAlt),
        date: "May 2025 - Present",
    },
	{
		title: "JLCoders - Front-End Developer",
		location: "Stockholm, Sweden",
		description: ` - Initiated and developed a new web product using React.js, Typescript, Next.js.
        - Developed a frontend efficient custom implementation of backend data handling with modification, search, and pagination.
        - Optimized website performance by refining older code.
        - reducing unnecessary data requests and enhancing maintainability. 
        - Supported our native (mobile) apps with React Native.js with Android Studio, and Xcode.
        - Played a crucial role in the release process for Google Play and the Apple App Store.`,
		icon: React.createElement(CgWorkAlt),
		date: "Oct 2023 - Jun 2024",
	},
	{
		title: "Odlamer - React Native",
		location: "Stockholm, Sweden",
		description:
			"I worked as a full-stack mobile app developer for 1 year, Tools and Technologies Used: React Native, Javascript ES6+, TypeScript, Redux, Firebase, Giphy API, Git, npm, Expo, React Navigation",
		icon: React.createElement(CgWorkAlt),
		date: "Sep 2022 - Sep 2023",
	},
	{
		title: "Front-end Developer",
		location: "Hyper-Island, Stockholm",
		description:
			"I graduated after 2 years of studying. I immediately found a job as a mobile app developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2021-2023",
	},
	{
		title: "IT support Specialist",
		location: "Scania, Stockholm",
		description:
			"Hardware responsible, troubleshooting and Citrix, Active directory, windows 10, O365, IOS.Active Directory, Office, windows server 2012/2016, Citrix,Powershell, Teamviewer. ",
		icon: React.createElement(CgWorkAlt),
		date: "2018 - 2021",
	},
] as const;

export const projectsData = [
	{
		title: "Atecfet Projects",
		description:
			"Portfolio showcasing innovative projects developed with cutting-edge technologies, highlighting my ability to create impactful and efficient solutions.",
		tags: ["Next.js", "Tailwind", "Vercel", "Context-API", "Framer-motion"],
		imageUrl: atecfet,
		link: "https://atecfet.com",
	},
	{
		title: "Central-Film",
		description:
			"A Full-stack app, this project about films where I get all the films from TMBD API and I'll add my own rating and commenting system.",
		tags: [
			"React Native",
			"Expo",
			"GlueStack",
			"Node",
			"MongoDB",
			"redux",
			"Context-API",
		],
		imageUrl: centralFilm,
		link: "https://github.com/galeonn321/cf-react-native",
	},
	{
		title: "Pokemon API",
		description:
			"Pokemon API is a React Native application I developed as part of a coding test. It leverages Expo, TypeScript, and the Pokemon API to create a digital encyclopedia of Pokemon creatures.",
		tags: ["React Native", "TypeScript", "Tailwind,", "Pokemon-API"],
		imageUrl: pokemon,
		link: "https://github.com/galeonn321/pokemonAPI",
	},
	{
		title: "Blog post App",
		description:
			"Developed a blog post reading app using React Native, integrating the JSONPlaceholder API. The app allows users to browse posts, view individual posts with comments, and filter posts by user. Focused on clean, functional code and intuitive design",
		tags: [
			"React Native",
			"Expo",
			"TypeScript",
			"React Navigation",
			"Tanstack Query",
			"Axios",
			"FlashList",
			"date-fns",
		],
		imageUrl: blogPost,
		link: "https://github.com/galeonn321/ravenpack_blog_post_app",
	},
] as const;

export const skillsData = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Next.js",
    "HTML5",
    "CSS3",
    "React Native",
    "Expo",
    "React Navigation",
    "Expo Router",
    "Redux",
    "TanStack Query",
    "Axios",
    "Tailwind CSS",
    "Shopify Polaris",
    "GlueStack UI",
    "Responsive Design",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "RESTful APIs",
    "MongoDB",
    "Apache Solr",
    "Git",
    "GitHub",
    "npm/yarn",
] as const;
