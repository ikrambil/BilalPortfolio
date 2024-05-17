"use client"
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import BackgroundAnimation from '@/components/background-animation';
import Footer from '@/components/footer'
import ProgressBar from '@/components/progress-bar'
import Preloader from '@/components/preloader'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 3000)
          })()},[])

  return (
    <main className='flex flex-col items-center px-4'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> 
      <ProgressBar/>
      <BackgroundAnimation/>
      <Intro/>
      <About/>
      <SectionDivider />
      <Projects/>
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
