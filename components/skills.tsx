"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import {motion} from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {
    const { ref } = useSectionInView("Skills");
  return (
    <section ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 -z-10' id="skills">
    <SectionHeading>skills</SectionHeading>
    <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill,index) => (
            <motion.li 
            key={index}
            variants={fadeInAnimationVariants} 
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            custom={index}
            className='text-[#f6f2e5] bg-[#292929] border border-black/[0.1] rounded-xl px-5 py-3 focus:scale-110 hover:scale-110'>
            {skill}
            </motion.li>
        ))}
    </ul>
    </section>
  )
}
