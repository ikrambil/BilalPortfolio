import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import poppinImg from '@/public/poppin.png'
import ezmapsImg from '@/public/ezmaps.png'
import oneononeIMG from '@/public/OneOnOne.png'

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
] as const;

export type SectionName = (typeof links)[number]["name"];

export const experiencesData = [
  {
    company: "University of Toronto",
    title: "Bachelors in Computer Engineering",
    location: "Toronto, ON",
    description:
      ["Minor in Artificial Intelligence","GPA: 3.83/4.00", "Deans list every semester"], 
    icon: React.createElement(LuGraduationCap),
    date: "2019-2024",
  },
  {
    company: "PlayStation",
    title: "Software Developer Intern",
    location: "Waterloo, ON",
    description:
      ["Worked on the front-end for the Library App on the PlayStation 5 Console team","Developed robust APIs using Python to collect and analyze coverage statistics, significantly enhancing the efficiency and reliability of the automation framework, resulting in a 25% increase in test coverage accuracy"],
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Poppin",
    description:
      "An interactive event hosting application tailored for University of Toronto students, enabling them to discover and advertise campus events",
    tags: ["Tailwind CSS", "JavaScript" ,"Flask", "PostgreSQL", "AWS", "Docker"],
    imageUrl: poppinImg,
    githubUrl: "https://github.com/ikrambil/Poppin"
  },
  {
    title: "EZMaps",
    description:
      "An advanced Map Application designed to offer seamless navigation and location-based services, compatible with over 20 major cities globally.",
    tags: ["C/C++", "GTK", "OpenStreetMap Database API"],
    imageUrl: ezmapsImg,
    githubUrl: "https://github.com/ikrambil/EZMaps"
  },
  {
    title: "OneOnOne",
    description:
      "A Calendly clone created to streamline the scheduling of multiple meetings simultaneously, enhancing efficiency and coordination.",
    tags: ["React", "Django", "SQLite", "Tailwind CSS"],
    imageUrl: oneononeIMG,
    githubUrl: "https://github.com/ikrambil/OneOnOne"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C/C++",
  "Django",
  "Flask",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Framer Motion",
  "Docker",
  "Selenium",
  "Jenkins",
  "Git"
] as const;
