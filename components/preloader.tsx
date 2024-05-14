'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const words = ["00", "08", "17", "24", "31", "39", "45", "58", "67", "71", "84", "99", "100"]

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.3}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3}
    }
}

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.4}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className='introduction three-d'>
            {dimension.width > 0 && 
            <>
                <motion.div className="countdown" variants={opacity} initial="initial" animate="enter" exit={{opacity:0, y:100}}>{words[index]}</motion.div>
                <motion.div className='!font-[Borel] font-5xl countdown' initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 3}}><p className='font-[Borel]'>hello world</p></motion.div>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}