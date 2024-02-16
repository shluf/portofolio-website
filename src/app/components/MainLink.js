'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { gridMenu, gridMenuContent } from "./animations/MenuAnimations";
import ToggleDarkLight from "./notnow/ToggleDarkLight";


const CustomLink = ({href, title, num, className="", onClick}) => {
    const router = usePathname()
    const [onHover, setOnHover] = useState(false)
    const [countHover, setCountHover] = useState(0)

    const toggleHoverEnter = () => {
        setOnHover(true)
        setCountHover(countHover+1)
        console.log(countHover)
    }

    const active = "w-full bottom-0 h-[1.5px]"
    const inactive = "w-0"

    return(
            <Link 
            href={href} 
            className="flex flex-col group justify-around hover:bg-light hover:text-dark sm:bg-dark sm:rounded-md h-full w-full"
            onClick={onClick}
            onMouseEnter={() => toggleHoverEnter()}
            onMouseLeave={() => setOnHover(false)}
            >
                {/* ${onHover === true || router === href ? "flex" : "hidden"}  */}
                <div className="sm:flex sm:flex-row justify-between items-start mb-10">
                    <p className={`mx-3 sm:flex sm:items-center hidden`}>
                        {/* &gt;&nbsp; */}
                    <motion.span 
                    variants={gridMenuContent} animate={onHover === true ? 'showLeft' : 'hideLeft'} transition='transition'
                    className={`mt-3 text-xs opacity-0`}
                    >
                        {router === href ? "You're here" : countHover > 10 ? "I Tired _-" : "View my" }
                    </motion.span>
                    </p>
                    <motion.p 
                    variants={gridMenuContent} animate={onHover === true ? 'showRight' : 'hideRight'} transition='transition'
                    className={`${router === href ? "bg-light text-dark" : "border-solid border-light"} rounded-b-xl p-4 mr-3 sm:flex sm:items-center hidden text-3xl`}
                    >
                        {num}
                    </motion.p>
                </div>
                <p className={`${className} group-hover:font-extrabold mb-4 relative text-center transition-all ease duration-300 ${router === href ? "font-medium" : "font-normal"}`}>
                    {title}
                    <span 
                    className={`
                    ${onHover === true ? "bg-dark" : "bg-light"} 
                    h-[2px] inline-block absolute right-0 rounded
                    group-hover:bottom-0 group-hover:w-full group-hover:h-[2px] transition-all ease duration-500
                    ${router === href ? active : inactive }
                    `}
                    >&nbsp;</span>
                </p>
                
            </Link>
      
    );
}

const MainLink = () => {
    const [menuCheck, setMenuCheck] = useState(false)
    const toggleClick = () => {
        menuCheck === false ? setMenuCheck(true) : setMenuCheck(false)
        setCountHover(0)
    }
    
    const buttonNav = "flex items-center justify-center hover:bg-light hover:text-dark hover:font-bold py-3 px-5 transition-all-ease duration-100" 

    return (
            <nav className="w-full sm:flex sm:flex-col sm:items-end sm:justify-end sm:bottom-[unset] sm:py-3 py-0 fixed bottom-0 z-[50]">
                <div onClick={() => menuCheck === false ? setMenuCheck(true) : setMenuCheck(false)} className={`${menuCheck ? 'fixed' : 'hidden' } left-0 top-0 h-screen w-screen bg-[#000000a9] -z-[20]`} />
                <div className="hidden sm:flex items-center rounded-xl sm:mx-5 text-dark ">
                    <motion.button 
                    whileHover={{x: -10}}
                    className={`${menuCheck ? 'text-light' : 'text-dark'} flex items-center justify-end py-1 px-5 rounded-l-xl group duration-50`}>
                        Let's Connect
                    <span className="group-hover:opacity-100 group-hover:ml-2 ml-0 opacity-0">&#62;</span>
                    </motion.button>
                <div className="hidden sm:flex items-center rounded-md  bg-dark text-light ">
                        <button 
                        className={`${buttonNav} rounded-l-md`}>Dark</button>
                        <button 
                        className={`${buttonNav} rounded-r-md overflow-hidden`} 
                        onClick={() => menuCheck === false ? setMenuCheck(true) : setMenuCheck(false)}>
                            {menuCheck === false ? 'Menu' : 'Close'}
                        </button>
                </div>
                </div>
                    <motion.div 
                    animate={menuCheck ? {height: 'auto'} : {height:0, transition:{delay:0.5}} }
                    className="sm:relative sm:overflow-hidden h-0">
                        <motion.div 
                        variants={gridMenu} 
                        animate={menuCheck === false ? 'hide' : 'show'} 
                        transition='transition'
                        className={`sm:bg-transparent bg-dark text-light sm:-z-[10] sm:grid sm:py-5 sm:mx-5 sm:place-items-center sm:gap-4 sm:grid-cols-2 grid-flow-row auto-rows-default sm:top-16 sm:right-0 flex flex-row`}
                        >
                            
                            <CustomLink 
                            href="/" 
                            title='Home' num='01'
                            className=" py-[2px] mx-5 group-hover:bottom-[2px]" 
                            onClick={toggleClick} />

                            <CustomLink 
                            href="/about" 
                            title='About' num='02' 
                            className=" py-[2px] mx-5 group-hover:bottom-[2px]" 
                            onClick={toggleClick} />
                        
                            <CustomLink 
                            href="/projects" 
                            title='Projects' num='03'
                            className=" py-[2px] mx-5 group-hover:bottom-[2px]" 
                            onClick={toggleClick} />
                            
                            <CustomLink 
                            href="/branch" 
                            title='Branch' num='04'
                            className=" py-[2px] mx-5 group-hover:bottom-[2px]" 
                            onClick={toggleClick} />
                            
                        </motion.div>
                    </motion.div>
            </nav>
    )

}


export default MainLink;
