'use client'
import React, { useEffect, useState } from 'react'
import { useScroll, useTransform, motion, easeOut, easeInOut } from "framer-motion";
import { Circle, Plus, PlusFilled, Right, Shluff } from "./assets/SpanElements";
import ScrollDeltaIndicator from './util/HomeIndicator';

const HomeTitle = ({onTrue={}}) => { // buat agar onTrue dapat dieksekusi di component ini
  // const { scrollY } = useScroll();
  // const fixedScrollPoint = 1000;
  // const translateY = useTransform(scrollY, [0, fixedScrollPoint], [0, fixedScrollPoint]);

  const [scrollDelta, setScrollDelta] = useState(0);
  let decayTimer;

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const isScrollingWithinComponent = event.target.closest('.passive');

      if (isScrollingWithinComponent) {
        clearTimeout(decayTimer);

        let delta = 0;

        if (event.deltaY !== undefined) {
          delta = event.deltaY;
        } else if (event.key === 'ArrowDown') {
          delta = 100;
          console.log('down');
        } else if (event.key === 'ArrowUp') {
          console.log('up');
          delta = -100;
        }

        setScrollDelta((prevDelta) => Math.max(prevDelta + delta, 0));

        // Reset decayTimer every time scrolling occurs
        decayScroll();
      }
    };

    const decayScroll = () => {
      const decayDuration = 2000; // Adjust the decay duration in milliseconds
      const decayInterval = 50; // Adjust the decay interval in milliseconds
      const steps = Math.ceil(decayDuration / decayInterval);
      const decayStep = scrollDelta / steps;

      let step = 0;

      decayTimer = setInterval(() => {
        if (scrollDelta > 0 && step < steps) {
          setScrollDelta((prevDelta) => Math.max(prevDelta - decayStep, 0));
          step += 1;
        } else {
          clearInterval(decayTimer);
        }
      }, decayInterval);
    };

    const handleKeyDown = (event) => {
      handleScroll(event);
    };

    document.body.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      document.body.removeEventListener('wheel', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(decayTimer);
    };
  }, [scrollDelta]);

    const setTrue = () =>{
        console.log(scrollDelta)
        if (scrollDelta > 2000 ) {
          onTrue();
        }
    }
    
  return (
    <motion.section 
    // whileHover={{skew:1.2}} 
    onWheel={() => setTrue()} 
    // style={{translateY}} 
    // exit={{ opacity: 0 }} 
    // transition={{ease: easeInOut}} 
    className={`bg-dark passive flex h-screen p-4 sm:p-24 items-center justify-center`}>
        <Circle scrollDelta={scrollDelta} />
        <Shluff scrollDelta={scrollDelta} />
        <ScrollDeltaIndicator scrollDelta={scrollDelta} />
        <div className='fixed'>
        <PlusFilled className="fixed scale-50 left-[50%+12px] top-[60%-12px]"/>
        <Plus className='scale-50' />
        <div style={{scale:0.5}} className='fixed w-10 h-auto left-0 -top-[50%]'>
        {/* <Right /> */}
        </div>
        </div>
      </motion.section>
  )
}

export default HomeTitle