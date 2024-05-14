"use client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsArrowDown} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import FloatingArrow from './floating-arrow';
import { ANIMATION_DELAY } from '@/lib/utils';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section ref={ref} id="home" className='flex flex-col justify-center items-center text-center mb-28 max-w-[65rem] m:text-left sm:mb-0 scroll-mt-[100rem] h-[100vh] absolute gap-12'>
        <div className='flex items-center justify-center'>
            <div className='relative'>

            </div>
        </div>
        <motion.h1
            className="three-d mt-4 px-4 font-light !leading-[1.5] text-xl sm:text-4xl flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ANIMATION_DELAY }}
        >
            <span className="font-normal text-5xl sm:text-7xl"><span className='font-semi font-[Borel] italic'>bilal ikram</span></span>
            <span><span className="font-normal">I&apos;m a{" "} software developer</span> with{" "}
            <span className="font-normal">1.5 years</span> of industry experience based in Toronto, Canada.
            </span>
      </motion.h1>

      <motion.div className='three-d flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg sm:text-xl font-medium w-full'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: ANIMATION_DELAY + 0.2}}>
        <Link 
        href="#contact"
        className=' group font-medium mx-3 my-3 flex flex-row items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition underline-hover-effect'> <BsArrowRight/> Contact me </Link>
        <motion.a
          className="three-d group font-medium flex items-center mx-3 my-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer underline-hover-effect"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </motion.a>
        <a
          className="three-d group font-medium flex items-center mx-3 my-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer underline-hover-effect"
          href="https://www.linkedin.com/in/bilal-ikram/"
          target="_blank"
        >
          Linkedln
        </a>
        <a
          className="group font-medium flex items-center mx-3 my-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer underline-hover-effect"
          href="https://github.com/ikrambil"
          target="_blank"
        >
          Github
        </a>

      </motion.div>
      <motion.div 
      className=' three-d flex flex-col items-center justify-center'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: ANIMATION_DELAY + 0.2}}>
        <div className='pb-2'> Scroll to discover </div> 
        <FloatingArrow /> 
      </motion.div>

    </section>
  )
}
