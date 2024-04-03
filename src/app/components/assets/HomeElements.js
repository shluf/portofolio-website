import React from "react";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";

export {
  Circle,
  Line,
  PlusFilled,
  Plus,
  Right,
  Left,
  Barcode,
  TripleTriangle,
  Shluff,
};

const Circle = ({ scrollDelta }) => {
  // console.log(scrollDelta)

  let scrollY = scrollDelta;
  let scrollOuter = -45 + scrollY * 0.05;
  let scrollMid = 45 - scrollY * 0.05;
  let scrollInner = 45 + scrollY * 0.1;

  const springConfig = {
    damping: 100,
    stiffness: 100,
  };

  return (
    <motion.span
      initial={{ rotate: "-30deg", scale: 0.8, opacity: 0 }}
      whileInView={{
        rotate: "0deg",
        scale: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      }}
      className="absolute flex items-center justify-center"
    >
      <motion.span
        style={{ transform: `rotate(${scrollOuter}deg)` }}
        transition={{ type: "spring", ...springConfig }}
        className="absolute opacity-45 sm:h-[28rem] sm:w-[28rem] h-[9rem] w-[9rem] border-solid border-8 border-x-transparent border-y-light rounded-full"
      />

      <motion.span
        style={{ transform: `rotate(${scrollMid}deg)` }}
        transition={{ type: "spring", ...springConfig }}
        className="absolute opacity-45 sm:h-[25rem] sm:w-[25rem] md:h-[24rem] md:w-[24rem] h-[12rem] w-[12rem] border-dotted border-8 border-x-transparent border-y-light rounded-full"
      />

      <motion.span
        style={{ transform: `rotate(${scrollInner}deg)` }}
        transition={{ type: "spring", ...springConfig }}
        className="absolute opacity-45 sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] h-[14rem] w-[14rem] border-dashed border-[30px] border-light rounded-full"
      />

      {/* <motion.span 
    className="absolute opacity-45 sm:h-[10rem] sm:w-[10rem] md:h-[10rem] md:w-[12rem] h-[14rem] w-[14rem] border-dashed animate-spinSlow border-[4px] border-light rounded-full" /> */}
    </motion.span>
  );
};

const Line = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={3}
    height={592}
    fill="none"
    initial={{ opacity: 1 }}
    whileInView={{ opacity: 1, transition: { duration: 1 } }}
    {...props}
  >
    <motion.path
      fill="#fff"
      initial={{ y: -591 }}
      whileInView={{
        y: 592,
        transition: {
          delay: 0.5,
          duration: 5,
          ease: "linear",
          repeatType: "loop",
          repeat: Infinity,
        },
      }}
      d="M3 16.724c0 1.37-.672 2.482-1.5 2.482S0 18.095 0 16.724c0-1.37.672-2.482 1.5-2.482S3 15.353 3 16.724ZM3 54.119c0 1.37-.672 2.482-1.5 2.482S0 55.489 0 54.119c0-1.371.672-2.482 1.5-2.482S3 52.747 3 54.119ZM3 2.482c0 1.37-.672 2.482-1.5 2.482S0 3.853 0 2.482C0 1.112.672 0 1.5 0S3 1.111 3 2.482ZM3 282.616c0 1.371-.672 2.482-1.5 2.482S0 283.987 0 282.616c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 269.835c0 1.371-.672 2.482-1.5 2.482S0 271.206 0 269.835c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 308.76c0 1.371-.672 2.482-1.5 2.482S0 310.131 0 308.76c0-1.37.672-2.482 1.5-2.482S3 307.39 3 308.76ZM3 295.979c0 1.371-.672 2.482-1.5 2.482S0 297.35 0 295.979c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 471.097c0 1.371-.672 2.482-1.5 2.482S0 472.468 0 471.097c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 507.31c0 1.371-.672 2.482-1.5 2.482S0 508.681 0 507.31c0-1.371.672-2.482 1.5-2.482S3 505.939 3 507.31ZM3 458.315c0 1.371-.672 2.482-1.5 2.482S0 459.686 0 458.315c0-1.37.672-2.482 1.5-2.482s1.5 1.112 1.5 2.482ZM3 256.891c0 1.371-.672 2.482-1.5 2.482S0 258.262 0 256.891c0-1.371.672-2.482 1.5-2.482S3 255.52 3 256.891ZM0 136.779v-16.504c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.504c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 243.987v-16.503c0-.58.284-1.049.634-1.049h1.732c.35 0 .634.469.634 1.049v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049ZM0 338.078v-16.503c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 365.359v-16.504c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.504c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 109.764V93.261c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 82.752V66.249c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.05ZM0 590.012v-16.503c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.503c0 .58-.284 1.05-.634 1.05H.634c-.35 0-.634-.47-.634-1.05ZM0 563v-16.503c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049V563c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049ZM0 535.988v-16.503c0-.58.284-1.049.634-1.049h1.732c.35 0 .634.469.634 1.049v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049Z"
    />
    <motion.path
      fill="#fff"
      initial={{ y: -591 }}
      whileInView={{
        y: 592,
        transition: {
          delay: 3,
          duration: 5,
          ease: "linear",
          repeatType: "loop",
          repeat: Infinity,
        },
      }}
      d="M3 16.724c0 1.37-.672 2.482-1.5 2.482S0 18.095 0 16.724c0-1.37.672-2.482 1.5-2.482S3 15.353 3 16.724ZM3 54.119c0 1.37-.672 2.482-1.5 2.482S0 55.489 0 54.119c0-1.371.672-2.482 1.5-2.482S3 52.747 3 54.119ZM3 2.482c0 1.37-.672 2.482-1.5 2.482S0 3.853 0 2.482C0 1.112.672 0 1.5 0S3 1.111 3 2.482ZM3 282.616c0 1.371-.672 2.482-1.5 2.482S0 283.987 0 282.616c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 269.835c0 1.371-.672 2.482-1.5 2.482S0 271.206 0 269.835c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 308.76c0 1.371-.672 2.482-1.5 2.482S0 310.131 0 308.76c0-1.37.672-2.482 1.5-2.482S3 307.39 3 308.76ZM3 295.979c0 1.371-.672 2.482-1.5 2.482S0 297.35 0 295.979c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 471.097c0 1.371-.672 2.482-1.5 2.482S0 472.468 0 471.097c0-1.371.672-2.482 1.5-2.482s1.5 1.111 1.5 2.482ZM3 507.31c0 1.371-.672 2.482-1.5 2.482S0 508.681 0 507.31c0-1.371.672-2.482 1.5-2.482S3 505.939 3 507.31ZM3 458.315c0 1.371-.672 2.482-1.5 2.482S0 459.686 0 458.315c0-1.37.672-2.482 1.5-2.482s1.5 1.112 1.5 2.482ZM3 256.891c0 1.371-.672 2.482-1.5 2.482S0 258.262 0 256.891c0-1.371.672-2.482 1.5-2.482S3 255.52 3 256.891ZM0 136.779v-16.504c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.504c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 243.987v-16.503c0-.58.284-1.049.634-1.049h1.732c.35 0 .634.469.634 1.049v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049ZM0 338.078v-16.503c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 365.359v-16.504c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.504c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 109.764V93.261c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .579-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.049ZM0 82.752V66.249c0-.58.284-1.05.634-1.05h1.732c.35 0 .634.47.634 1.05v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.47-.634-1.05ZM0 590.012v-16.503c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049v16.503c0 .58-.284 1.05-.634 1.05H.634c-.35 0-.634-.47-.634-1.05ZM0 563v-16.503c0-.579.284-1.049.634-1.049h1.732c.35 0 .634.47.634 1.049V563c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049ZM0 535.988v-16.503c0-.58.284-1.049.634-1.049h1.732c.35 0 .634.469.634 1.049v16.503c0 .58-.284 1.049-.634 1.049H.634c-.35 0-.634-.469-.634-1.049Z"
    />
  </motion.svg>
);

const PlusFilled = (props) => (
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
);

const Plus = (props) => (
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
);

const Right = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={221}
    height={296}
    fill="none"
    initial={{ y: 20, x: 150, rotate: "20deg" }}
    whileInView={{
      y: 0,
      x: 0,
      rotate: "0deg",
      transition: { delay: 0.5, ease: "easeOut", duration: 1 },
    }}
    {...props}
  >
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      // initial={{y:20, x:150, rotate: '20deg'}}
      // whileInView={{y:0, x:0, rotate: '0deg' ,transition: {delay:0.5, ease: 'easeOut', duration:1}}}
      d="m98.09 95.056-5.78-4.941L196.352 1H220v65.301l-48.87 39.987 1.051 43.134-25.747 20.82v20.067L220 251.417V295H109.651l-57.275-49.875v-11.233L24 210.529v-62.53l9.984-8.012h12.61l51.495-44.931Z"
    />
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      // initial={{y:20, x:150, rotate: '20deg'}}
      // whileInView={{y:0, x:0, rotate: '0deg' ,transition: {delay:0.5, ease: 'easeOut', duration:1}}}
      d="M220 71v36.774L176 145v-37.001L220 71ZM1 204l100 87H71.526L1 229.429V204ZM176 205.41 220 243v-7.16l-39.808-32.221S176 201.383 176 205.41Z"
    />
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeLinejoin="round"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{
        opacity: 1,
        x: -10,
        transition: {
          delay: 1,
          ease: "easeOut",
          duration: 1,
          repeatType: "reverse",
          repeat: Infinity,
        },
      }}
      d="M51.333 80.5 59 86.976 55.378 90C53.654 88.469 44 80.5 44 80.5s9.654-7.969 11.378-9.5L59 74.024 51.333 80.5Z"
    />
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      initial={{ y: -40, x: 40 }}
      whileInView={{
        y: 0,
        x: 0,
        transition: { delay: 0, ease: "easeOut", duration: 1 },
      }}
      d="M111 54.91 175.29 1H186l-69.504 59L111 54.91Z"
    />
  </motion.svg>
);

const Left = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={253}
    height={381}
    fill="none"
    initial={{ y: -20, x: -150, rotate: "30deg" }}
    whileInView={{
      y: 0,
      x: 0,
      rotate: "0deg",
      transition: { delay: 0.5, ease: "easeOut", duration: 1 },
    }}
    {...props}
  >
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      initial={{ y: 50, x: -50 }}
      whileInView={{
        y: 0,
        x: 0,
        transition: { ease: "easeOut", duration: 0.6 },
      }}
      d="M57 197 1 244.97V291l56-47v-47Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      d="m62.625 192.046 34.427-29.506v-26.404L1 56.142V1h141.359l73.398 63.684v13.982L252 108.954v83.877L34.527 380H1v-81.157l62.978-54.945-1.353-51.852Z"
    />
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      initial={{ y: -50, x: -50 }}
      whileInView={{ y: 0, x: 0, transition: { ease: "easeOut", duration: 1 } }}
      d="M1 66v9.713L53.346 120H64L1 66Z"
    />
    <motion.path
      fill="#fff"
      stroke="#fff"
      strokeLinejoin="round"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{
        opacity: 1,
        x: 10,
        transition: {
          delay: 1,
          ease: "easeOut",
          duration: 1,
          repeatType: "reverse",
          repeat: Infinity,
        },
      }}
      d="M157.711 342.5 148 333.979l4.588-3.979c2.183 2.015 14.412 12.5 14.412 12.5s-12.229 10.485-14.412 12.5L148 351.021l9.711-8.521Z"
    />
  </motion.svg>
);

const Barcode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={239}
    height={46}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M5 0H0v46h5V0ZM43 0H31v46h12V0ZM82 0H69v46h13V0ZM96 0H86v46h10V0ZM129 0h-11v46h11V0ZM12 0H9v46h3V0ZM27 0h-4v46h4V0ZM57 0h-3v46h3V0ZM66 0h-4v46h4V0ZM113 0h-5v46h5V0ZM144 0h-5v46h5V0ZM153 0h-4v46h4V0ZM161 0h-5v26h5V0ZM199 0h-3v26h3V0ZM239 0h-4v26h4V0ZM208 0h-4v26h4V0ZM225 0h-12v26h12V0ZM176 0h-11v26h11V0ZM191 0h-10v26h10V0Z"
    />
  </svg>
);

const TripleTriangle = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={111}
    fill="none"
    {...props}
  >
    <motion.path
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          ease: "easeOut",
          duration: 1,
          repeatDelay: 1,
          repeatType: "mirror",
          repeat: Infinity,
        },
      }}
      d="M0.712921 1.08722H50.0461V12.6034L25.3795 30.9531L0.712921 10.6807V1.08722Z"
      fill="white"
      stroke="white"
      stroke-miterlimit="10"
    />
    <motion.path
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.5,
          ease: "easeOut",
          duration: 1,
          repeatDelay: 1,
          repeatType: "mirror",
          repeat: Infinity,
        },
      }}
      d="M0.712921 40.6066H50.0461V52.1228L25.3795 70.4764L0.712921 50.2041V40.6066Z"
      fill="white"
      stroke="white"
      stroke-miterlimit="10"
    />
    <motion.path
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.5,
          ease: "easeOut",
          duration: 1,
          repeatDelay: 1,
          repeatType: "mirror",
          repeat: Infinity,
        },
      }}
      d="M0.712921 80.13H50.0461V91.6461L25.3795 110L0.712921 89.7274V80.13Z"
      fill="white"
      stroke="white"
      stroke-miterlimit="10"
    />
  </motion.svg>
);

const Shluff = () => {
  let { scrollY } = useScroll();
  let scale = useTransform(scrollY, [400, 800], [1, 0.5]);
  return (
    <motion.h1
      style={{}}
      className="sm:text-[8rem] md:text-[12rem] text-[6rem] font-black text-center text-light"
    >
      SHLUF
    </motion.h1>
  );
};
