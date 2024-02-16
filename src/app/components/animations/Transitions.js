'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion"

const PageTransition = () => {
  const [hideAnimation, setHideAnimation] = useState(false)
  // const name = ['Halo', 'Hai', 'Selamat Datang']

  return (
    <>
    {/* <motion.div className='fixed w-full h-[30vh] right-0 z-[70] left-0 -top-[50%] bg-dark'
    initial={{y:'0%', borderRadius:'0%' , height:'100%'}}
    animate={{y:'0%',borderRadius:'100%', height:'0%'}}
    exit={{y:['0%', '0%'], height:['0%', '100%']}}
    transition={{duration:0.8, ease:'easeInOut'}}
    onAnimationStart={() => setHideAnimation(false)}
    /> */}
    <motion.div className='fixed w-full h-[30vh] right-0 z-[70] left-0 -top-[50%] bg-dark'
    initial={{y:'0%', height:'100%'}}
    animate={{y:'0%', height:'0%'}}
    exit={{y:['0%', '0%'], height:['0%', '100%']}}
    transition={{duration:0.8, ease:'easeInOut'}}
    onAnimationStart={() => setHideAnimation(false)}
    />
    
    <motion.div className='fixed w-full h-[30vh] right-0 z-[60] left-0 -top-[50%] bg-light'
    initial={{y:'0%', height:'100%'}}
    animate={{y:'0%', height:'0%'}}
    exit={{y:['0%', '0%'], height:['0%', '100%']}}
    transition={{delay:0.2, duration:0.8, ease:'easeInOut'}}
    onAnimationComplete={() => setHideAnimation(true)}
    />
    
    <motion.div className='fixed w-screen h-full right-0 z-[70] left-0 -bottom-[50%] bg-dark'
    initial={{y:'0%', height:'100%'}}
    animate={{y:'0%', height:'0%'}}
    exit={{y:['0%', '0%'], height:['0%', '100%']}}
    transition={{duration:0.8, ease:'easeInOut'}}
    />
    
    <motion.div className='fixed w-screen h-full right-0 z-[60] left-0 -bottom-[50%] bg-light'
    initial={{y:'0%', height:'100%'}}
    animate={{y:'0%', height:'0%'}}
    exit={{y:['0%', '0%'], height:['0%', '100%']}}
    transition={{delay:0.2, duration:0.8, ease:'easeInOut'}}
    />
    
    <motion.div className={`${hideAnimation === true ? 'hidden' : 'fixed'} w-screen h-screen right-0 z-[50] backdrop-blur-lg`}
    initial={{opacity:0}}
    animate={{opacity:0}}
    exit={{opacity:[1]}}
    transition={{duration:0.5, ease:'easeOut'}}
    />
    
    <motion.div className={`${hideAnimation === true ? 'hidden' : 'fixed'} w-screen h-screen right-0 z-[50] backdrop-blur-lg`}
    initial={{opacity:1}}
    animate={{opacity:0}}
    exit={{opacity:[0, 0.2, 0.4, 1]}}
    transition={{delay:0.5, duration:0.5, ease:'easeIn'}}
    />
    </>
  )
}

export default PageTransition

export const PageTransitionHome = () => {
  return (
    <>
    <motion.div className='fixed w-full h-screen right-0 z-[70] top-0 left-0 bg-dark'
    initial={{height:'100%'}}
    animate={{height:'0%'}}
    transition={{duration:1, ease:'easeInOut'}}
    />
    {/* <motion.div className='fixed w-full h-screen right-0 z-[70] top-0 left-0 bg-dark'
    initial={{y:'120%', height:'300%'}}
    animate={{y:'-50%', height:'0%'}}
    transition={{duration:2, ease:'easeOut'}}
    /> */}
    </>
  )
}