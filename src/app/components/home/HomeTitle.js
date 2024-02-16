'use client'
import React, { useEffect, useState } from 'react'
import { useScroll, useTransform, motion, easeOut, easeInOut } from "framer-motion";
import { Barcode, Circle, Left, Line, Plus, PlusFilled, Right, Shluff, TripleTriangle } from "../assets/HomeElements";
import ScrollIndicator from './HomeIndicator';

const HomeTitle = ({onTrue={}}) => {
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
    <>
      <motion.section 
      // whileHover={{skew:1.2}} 
      onWheel={() => setTrue()} 
      className={`bg-dark passive flex h-screen w-screen p-4 sm:p-24 items-center justify-center overflow-hidden`}>
        <Circle scrollDelta={scrollDelta} />
        <Shluff scrollDelta={scrollDelta} />

          {/* <PlusFilled className="absolute scale-50 top-0 right-0"/>
          <Plus className='absolute scale-[0.4] top-0 right-0' />
          <Plus className='absolute scale-50 top-[50%] left-0' /> */}
        <ScrollIndicator scrollDelta={scrollDelta} />
        <Right className='fixed right-0 bottom-0' />
        <Left className='fixed left-0 top-0' />
        {/* <Barcode className='fixed left-5 bottom-5' /> */}
        {/* <Line className='fixed right-10 top-5 scale-75' /> */}
        <TripleTriangle className='fixed left-[50%-51/2] top-5 z-[55]' onClick={() => onTrue()} />
      </motion.section>
    </>
  )
}

export default HomeTitle