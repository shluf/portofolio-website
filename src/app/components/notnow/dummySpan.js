import { motion } from "framer-motion";

export const CircleMid = () => {
  // let { scrollY } = useScroll()
  //let rotate = useTransform(scrollY, [0,1200], ["90deg", "-60deg"])
  //let scale = useTransform(scrollY, [400,800], [1, 0.5])
  return (
    <motion.span
      style={{ scale }}
      className="absolute sm:h-[25rem] sm:w-[25rem] h-[12rem] w-[12rem] border-dotted border-8 border-x-transparent border-y-light rounded-full"
    />
  );
};
export const CircleInner = ({ scrollDelta }) => {
  //let { scrollY } = useScroll()
  //let rotate = useTransform(scrollY, [0,1200], ["45deg", "195deg"])
  //let scale = useTransform(scrollY, [400,800], [1, 0.5])
  let scroll = 45 - scrollDelta * 0.1;
  return (
    <motion.span
      style={{ transform: `rotate(${scroll}deg)` }}
      className="absolute sm:h-[16rem] sm:w-[16rem] md:h-[20rem] md:w-[20rem] h-[14rem] w-[14rem] border-dashed border-[30px] border-light rounded-full"
    />
  );
};
