import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import centralFilm from "@/public/centralFilm.png";
import pokemon from "@/public/pokemon-API.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Odlamer",
    location: "Stockholm, Sweden",
    description:
      "I worked as a full-stack mobile app developer for 1 year, Tools and Technologies Used: React Native, Javascript ES6+, TypeScript, Redux, Firebase, Giphy API, Git, npm, Expo, React Navigation",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
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
    title: "Central-Film",
    description:
      "A Full-stack app, this project about films where I get all the films from TMBD API and I'll add my own rating and commenting system.",
    tags: ["React Native", "Expo", "GlueStack", "Node", "MongoDB", "redux", "Context-API"],
    imageUrl: centralFilm,
    link: "https://github.com/galeonn321/central-film",
  },
  {
    title: "Pokemon API",
    description:
      "Pokemon API is a React Native application I developed as part of a coding test. It leverages Expo, TypeScript, and the Pokemon API to create a digital encyclopedia of Pokemon creatures.",
    tags: ["React Native", "TypeScript", "Tailwind,","Pokemon-API"],
    imageUrl: pokemon,
    link: "https://github.com/galeonn321/pokemonAPI",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   link: "https://github.com/galeonn321/central-film",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React Native",
  "Next.js",
  "TypeScript",
  "React",
  "Expo",
  "Next.js",
  "Node.js",
  "Git",
  "GlueStack",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
] as const;
