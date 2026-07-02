"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView, useIsMobile } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const isMobile = useIsMobile();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={isMobile ? false : { opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am <span className="font-medium">Tor Arne Birkeland</span>, a recent
        graduate with a bachelor’s degree in{" "}
        <span className="font-medium">
          Digital Infrastructure and Cybersecurity
        </span>{" "}
        from NTNU Trondheim.
      </p>

      <p className="mb-3">
        Before I started studying at NTNU, I worked on large-scale (and small)
        productions and live projects within{" "}
        <span className="font-medium">NRK (national television)</span>, where I
        was involved in coordination, planning, stakeholder communication, and
        editorial support. I also hold a{" "}
        <span className="font-medium">
          bachelor’s degree in Project Management
        </span>
        , which has shaped how I approach structure, collaboration, and
        delivery.
      </p>

      <p className="mb-3">
        My interest in technology has always been there, but became professional
        when I started building websites in my spare time — first for myself,
        and later for others. This gradually led me from web development into{" "}
        <span className="font-medium">
          infrastructure, cloud platforms, and cybersecurity
        </span>
        .
      </p>

      <p className="mb-3">
        I currently focus on{" "}
        <span className="font-medium">web development</span>, while building on
        my background in cloud infrastructure, cybersecurity, and risk analysis.
        I recently completed my bachelor thesis on vulnerability and risk
        assessment in the marine aquaculture industry, in collaboration with{" "}
        <span className="font-medium">Bouvet</span>.
      </p>

      <p>
        <span className="italic">Outside of tech</span>, I enjoy music
        production, working out, hiking, gaming, film, books and podcasts — I
        usually have some project on the go, whether it compiles or not.
      </p>
    </motion.section>
  );
}
