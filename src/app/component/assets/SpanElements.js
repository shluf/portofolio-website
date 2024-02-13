import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

export const Circle = ({scrollDelta}) => {
  
    console.log(scrollDelta)
  
  let scrollY = scrollDelta
  let scrollOuter = -45 + scrollY * 0.05
  let scrollMid = 45 - scrollY * 0.05
  let scrollInner = 45 + scrollY * 0.1
  // console.log(scrollDelta)

  const springConfig = {
    damping: 100,
    stiffness: 100,
  };

  return (
    <>
    <motion.span 
    style={{transform: `rotate(${scrollOuter}deg)`}} 
    transition={{ type: 'spring', ...springConfig }}
    className="absolute sm:h-[28rem] sm:w-[28rem] h-[9rem] w-[9rem] border-solid border-8 border-x-transparent border-y-light rounded-full" />
    
    <motion.span
    style={{transform: `rotate(${scrollMid}deg)`}} 
    transition={{ type: 'spring', ...springConfig }}
    className="absolute sm:h-[25rem] sm:w-[25rem] h-[12rem] w-[12rem] border-dotted border-8 border-x-transparent border-y-light rounded-full" />
    
    <motion.span 
    style={{transform: `rotate(${scrollInner}deg)`}} 
    transition={{ type: 'spring', ...springConfig }}
    className="absolute sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] h-[14rem] w-[14rem] border-dashed border-[30px] border-light rounded-full" />
    </>
  )
}

export const PlusFilled = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={348}
    height={349}
    fill="none"
    {...props}
  >
    <g fill="#fff" opacity={0.83}>
      <path d="m144.689.884-64.626 24.6 123.003 323.131 64.626-24.601L144.689.884Z" />
      <path d="m347.766 145.6-24.601-64.626L.035 203.978l24.6 64.626L347.767 145.6Z" />
    </g>
  </svg>
  )

export const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={243}
    height={243}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M98.59 97.47 100.9 4.3l46.51 1.09-2.31 93.17 93.02 2.171-1.15 46.58-93.02-2.17-2.31 93.16-46.51-1.09 2.31-93.16-93.03-2.18 1.16-46.58 93.02 2.18Z"
      opacity={0.61}
    />
  </svg>
  )

export const Right = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1147}
    height={1178}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      d="m387.111 377.611-23.09-19.76 415.68-356.37h94.481v261.14l-195.25 159.91 4.199 172.49-102.869 83.26v80.25l293.92 244.369v174.29h-440.88l-228.83-199.45v-44.919l-113.37-93.43v-250.06l39.889-32.04h50.38l205.74-179.68Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      d="M874.179 280.591v147.33l-176.351 149.14v-148.24l176.351-148.23ZM.82 812.44l398.89 350.37H282.141L.821 914.85V812.44ZM697.828 819.62l176.351 150.93V941.8L714.628 812.43s-16.8-8.98-16.8 7.19Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinejoin="round"
      d="m1114.74 306.391 30.82 25.589-14.56 11.95c-6.93-6.05-45.74-37.539-45.74-37.539s38.81-31.49 45.74-37.54l14.56 11.95-30.82 25.59Z"
    />
    <path stroke="#fff" strokeMiterlimit={10} d="M779.699 1.48v333.361" />
    <path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      d="M485.789 1103.51c12.752 0 23.09-8.85 23.09-19.76 0-10.91-10.338-19.76-23.09-19.76s-23.09 8.85-23.09 19.76c0 10.91 10.338 19.76 23.09 19.76Z"
    />
  </svg>
)

export const CircleMid = () => {
  // let { scrollY } = useScroll()
  //let rotate = useTransform(scrollY, [0,1200], ["90deg", "-60deg"])
  //let scale = useTransform(scrollY, [400,800], [1, 0.5])
  return (
    <motion.span style={{scale}} className="absolute sm:h-[25rem] sm:w-[25rem] h-[12rem] w-[12rem] border-dotted border-8 border-x-transparent border-y-light rounded-full" />
  )
}
export const CircleInner = ({scrollDelta}) => {
  //let { scrollY } = useScroll()
  //let rotate = useTransform(scrollY, [0,1200], ["45deg", "195deg"])
  //let scale = useTransform(scrollY, [400,800], [1, 0.5])
  let scroll = 45 - scrollDelta * 0.1
  return (
    <motion.span style={{transform: `rotate(${scroll}deg)`}} className="absolute sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] h-[14rem] w-[14rem] border-dashed border-[30px] border-light rounded-full" />
  )
}
export const Shluff = () => {
  let { scrollY } = useScroll()
  let scale = useTransform(scrollY, [400,800], [1, 0.5])
  return (
    <motion.h1 style={{}} className="sm:text-[8rem] md:text-[12rem] text-[6rem] font-black text-center text-light">SHLUF</motion.h1>
  )
}

