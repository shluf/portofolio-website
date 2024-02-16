import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightBar = () => {
    return (
        <aside className="flex flex-col h-[90%] fixed top-[5%] right-2 backdrop-blur
            border-solid border-[1px] border-stone-500 rounded-[30px]">
            <header className="flex-row px-[35px] py-[28px] border-b border-solid border-stone-500 ">
                <ul className="flex flex-center items-center justify-between">
                    <li>
                        <a href="https://s.id/1g3ab/" target="_blank">
                            <Image
                            src={'/icon-twitter.svg'} 
                            width={20} 
                            height={20} 
                            className={''} 
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/salishaidar_/" target="_blank">
                            <Image
                            src={'/icon-instagram.svg'} 
                            width={20} 
                            height={20} 
                            className={''} 
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <Image
                            src={'/icon-youtube.svg'} 
                            width={20} 
                            height={20} 
                            className={''} 
                            />
                        </a>
                    </li>
                </ul>
            </header>
            <div className="flex flex-shrink flex-grow basis-auto flex-col justify-between pt-[70px] pb-10 w-[200px]">
                <nav className="block">
                    <ul>
                    <li>
                        <a
                        href="#slide-1"
                        className="relative flex flex-col px-[35px] py-[28px]"
                        >
                        <span className="">Zero</span>
                        <span className="font-semibold">Home</span>
                        </a>
                    </li>
                    <li>
                        
                        <Link
                        href="#slide-2" 
                        className="relative flex flex-col px-[35px] py-[28px]" 
                        id="target2">
                        <span>One</span>
                        <span className="font-semibold">About Me</span>
                        </Link>
                    </li>
                    <li>
                        <a 
                        href="#slide-3" 
                        className="relative flex flex-col px-[35px] py-[28px]" 
                        id="target3">
                        <span>Two</span>
                        <span className="font-semibold">Overview</span>
                        </a>
                    </li>
                    <li>
                        <a href="#slide-4" 
                        className="relative flex flex-col px-[35px] py-[28px]" 
                        id="target4">
                        <span>Three</span>
                        <span className="font-semibold">Leaflet</span>
                        </a>
                    </li>
                    </ul>
                </nav>
                <section className="flex items-center justify-center h-[200px] bg-dark bg-opacity-30">
                    <audio id="audio" preload="none">
                        <source src="poc-theme.mp3" type="audio/mpeg" />
                    </audio>
                    <button className="relative inline-flex flex-row items-center"  onclick="audioFunction();">
                        <Image
                            src={'/icon-play-button.svg'} 
                            width={20} 
                            height={20}
                            className={'mr-2'} 
                            />
                        <span className="" id="side-bar-video-button-text">PLAY MUSIC</span>
                    </button>
                </section>
            </div>
            </aside>
    )
}

export default RightBar