"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          After graduating with a degree in Front-end Development, I joined Odlamer where I expanded my expertise across the full stack.
          Currently, I'm a Full-Stack Developer at Pango.ai, building enterprise e-commerce logistics solutions that process high-volume
          shipping data and transform operational challenges into revenue opportunities for online merchants. My favorite part of programming
          is the problem-solving aspect—I love architecting solutions that directly impact business outcomes. My core stack includes React, TypeScript,
          Next.js, React Native, Node.js, PHP Laravel, and MongoDB, with expertise in Apache Solr for search optimization and TanStack Query for state management.
          I'm passionate about learning cutting-edge technologies and currently exploring AI integrations and advanced data analytics. I am authorized to work in the
          US and actively seeking full-time software development opportunities where I can contribute to innovative products. When I'm not coding, I enjoy gaming, films,
          and learning about fashion and history—interests that often inspire creative approaches to user experience design.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">fashion and History.</span>
      </p>
    </motion.section>
  );
}
