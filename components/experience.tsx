"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView, useIsSmallScreen } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  date: string;
  icon: React.ReactElement;
  company: string;
  title: string;
  location: string;
  description: string[];
}

interface TimelineItemProps {
  item: (typeof experiencesData)[number];
  isSmallScreen: boolean;
}

function TimelineItem({ item, isSmallScreen }: TimelineItemProps) {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });
  const [hasBeenInView, setHasBeenInView] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);

  return (
    <VerticalTimelineElement
      visible={isSmallScreen ? true : hasBeenInView}
      contentStyle={{
        background: "#292929",
        boxShadow: "none",
        border: "none",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #292929"
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        boxShadow: "none",
        background: "#f6f2e5",
        fontSize: "1.5rem",
        border: "0.25rem solid #292929",
        padding: "0",
        color: "#292929"
      }}
    >
      <h3 className="font-semibold uppercase underline underline-offset-4 text-[#f6f2e5]">
        {item.company}
      </h3>
      <h3 className="font-semibold capitalize text-[#f6f2e5]">
        {item.title}
      </h3>
      <p className="font-normal !mt-0 text-[#f6f2e5]">
        {item.location}
      </p>
      <ul className="!mt-1 !font-normal text-[#f6f2e5] list-disc pl-4">
        {item.description.map((desc, descIndex) => (
          <li key={descIndex} ref={descIndex === 0 ? inViewRef : undefined}>
            {desc}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const container = useRef(null);
  const isSmallScreen = useIsSmallScreen();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end 25%"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [75, 0]);

  return (
    <>
      <section id="experience" ref={ref} className="scroll-mt-28 text-[#bb843d]">
        <SectionHeading>experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <TimelineItem key={index} item={item} isSmallScreen={isSmallScreen} />
          ))}
        </VerticalTimeline>
      </section>
      <motion.div className="relative mt-16 z-[50] -mb-4 three-d" style={{ height }}>
        <div
          className="absolute top-0 h-[1000%] sm:h-[1550%] w-[100vw] rounded-b-half bg-[#f6f2e5] z-[50] shadow-custom -translate-x-[50%]"
          style={{ boxShadow: "0px 60px 50px rgba(0, 0, 0, 0.748)" }}
        ></div>
      </motion.div>
    </>
  );
}
