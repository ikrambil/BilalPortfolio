"use client";

import React, {useRef, useEffect} from "react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Hello, I'm Bilal Ikram! I recently graduated from the University of Toronto with a Bachelor's degree in Computer Engineering and a minor in Artificial Intelligence. I've always enjoyed coding and love taking on new challenges while exploring new technologies. My favorite part of programming is the problem-solving aspect. There's nothing quite like the satisfaction of figuring out the solution to a problem after countless hours of throwing around print statements, and scouring Stack Overflow forums.\n When not developing, I also enjoy spending time distracting myself by playing video games, binging anime or watching F1. ";

export default function About() {
  const { ref } = useSectionInView("About");
  
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top bottom`,
            end: `center center`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p className="font-2xl m-0 mr-[1.5vw] sm:mr-[0.5vw]" key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span className="opacity-0" key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <motion.section
      ref={ref}
      className="mt-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="about"
    >
      <div ref={container} className="mb-3 text-2xl flex flex-wrap justify-center">
        <div ref={body} className="mb-3 text-2xl flex flex-wrap justify-center">
        {splitWords(phrase)}
        </div>
      </div>
    </motion.section>
  );
}