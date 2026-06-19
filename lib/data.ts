import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import {
  prosjekt2,
  prosjekt3,
  prosjekt4,
  toppturkartet,
} from "@/public/index";

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
    title: "Bachelor Thesis – Industry Collaboration",
    location: "NTNU Trondheim",
    description:
      "Bachelor thesis on vulnerability and risk assessment in the marine aquaculture industry, conducted in collaboration with industry consultants (Bouvet).",
    icon: React.createElement(LuGraduationCap),
    date: "2025 – 2026",
  },
  {
    title: "BSc Digital Infrastructure & Cybersecurity",
    location: "NTNU Trondheim",
    description:
      "Focus on digital infrastructure, cloud platforms, networking, and cybersecurity, with an emphasis on practical and industry-relevant skills. Exchange semester in South Korea.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – Present",
  },
  {
    title: "Tour Manager / Stage Manager",
    location: "The Entertainment Company AS",
    description:
      "Planned and coordinated touring operations for a commercial performing artist, including logistics, scheduling, on-site coordination, and financial settlements.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 – 2022",
  },
  {
    title: "Production & Project Coordination",
    location: "NRK (National Television)",
    description:
      "Worked across multiple productions with responsibilities in coordination, planning, stakeholder communication, and editorial support.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 – 2021",
  },
  {
    title: "Bachelor in Project Management",
    location: "Westerdals Oslo ACT",
    description:
      "Studied project leadership, coordination, and collaboration in creative and professional settings.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 – 2019",
  },
  {
    title: "One-year Programme in Economics & Management",
    location: "OsloMet",
    description:
      "Introductory studies in economics, management, organization, and decision-making.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 – 2016",
  },
  {
    title: "Military Service",
    location: "Norwegian Armed Forces",
    description:
      "Completed mandatory military service with responsibility and structured team-based work.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 – 2014",
  },
] as const;

export const projectsData = [
  {
    title: "Toppturkartet",
    description:
      "An interactive map that finds and ranks the best mountain hikes in Norway by a single ToppturScore, so you don't have to spend hours researching them. Full-stack, with a spatial backend and a real open-data pipeline.",
    tags: ["Next.js", "TypeScript", "PostGIS", "MapLibre", "Full-Stack"],
    imageUrl: toppturkartet,
    href: "https://toppturkartet.vercel.app",
    links: [],
  },
  {
    title: "Elden Ring Wiki",
    description:
      "A full-stack web application developed as a group project and graded A, which I deployed on a self-managed VPS using nginx, MySQL, and a Node.js backend.",
    tags: ["Full-Stack", "React", "Node.js", "MySQL", "nginx", "Linux"],
    imageUrl: prosjekt2,
    href: "https://eldenringwikidemo.eu",
    links: [],
  },

  {
    title: "Security Risk Analysis (NTNU)",
    description:
      "Academic security risk analysis from the NTNU course Risk Management. Based on a fictional case and graded A.",
    tags: ["Risk Management", "Infosec", "ISO 27001", "ISMS"],
    imageUrl: prosjekt3,
    href: "https://raw.githubusercontent.com/torabir/academic-security-case-studies/main/Risikoanalyse%20helsesektor%20fiktiv%20case%20utdrag.pdf",
    links: [],
  },
  {
    title: "NRK TV-aksjonen",
    description:
      "Held the main responsibility for the fundraising auction at NRK TV-aksjonen in 2020 and 2021, including planning, stakeholder communication and digital campaign coordination.",
    tags: [
      "NRK",
      "Fundraising",
      "Coordination",
      "Stakeholders",
      "Digital campaign",
    ],
    imageUrl: prosjekt4,
    href: "https://www.nrk.no/tvaksjonen/tv-aksjonens-auksjon_-se-hva-du-kan-by-pa-1.15693567",
    links: [],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AI tools",

  "Linux / Bash",
  "Operating Systems (C)",
  "Docker",
  "Microsoft Azure",
  "OpenStack",
  "Infrastructure as Code (Terraform)",
  "Virtualization",

  "SQL (MySQL)",
  "REST APIs",
  "Firebase",

  "Risk Analysis",
  "Threat Modeling",
  "Vulnerability Assessment",
  "Security Controls",
  "Active Directory",

  "Networking Fundamentals",
  "Wireshark",
  "Cisco Packet Tracer",

  "Software Development (Agile/Scrum)",
  "Slack",
  "Microsoft Teams + 365",
  "Google Workspace",
] as const;
