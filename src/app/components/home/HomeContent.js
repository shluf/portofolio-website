import React from 'react'
import { TracingBeam } from '../TracingBeam'
import { DataContents } from './content'

import Image from "next/image";
import { twMerge } from "tailwind-merge";

const HomeContent = () => {
  return (
    <>
    <TracingBeam className="sm:p-24 px-4 py-14">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {DataContents.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="flex flex-row items-center">
            <h2 className="text-[3rem] font-black px-4 mr-4 bg-dark text-light rounded-xl">
              {item.badge}
            </h2>
 
            <p className={"text-3xl font-bold"}>
              {item.title}
            </p>
            </div>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    
    <section className="h-screen p-4 sm:p-24">
    <div className="flex flex-row items-center">
      <h1 className="text-[3rem] font-black px-4 mx-4 bg-dark text-light rounded-xl">S</h1>
      <span className="text-[2rem] font-bold">S</span>
      <span className="text-[2rem] font-bold">a</span>
      <span className="text-[2rem] font-bold">l</span>
      <span className="text-[2rem] font-bold">i</span>
      <span className="text-[2rem] font-bold">s</span>
    </div>
    <h2 className="m-4">
      Hello My Name is Salis Haidar Luthfi. I am undergraduated student from Software Engineering Technology at Gadjah Mada University.
    </h2>
  </section>
  <section className="h-screen p-4 sm:p-24" id="page2">
    <div className="flex flex-row items-center">
      <h1 className="text-[3rem] font-black px-4 mx-4 bg-dark text-light rounded-xl">H</h1>
      <span className="text-[2rem] font-bold">H</span>
      <span className="text-[2rem] font-bold">a</span>
      <span className="text-[2rem] font-bold">i</span>
      <span className="text-[2rem] font-bold">d</span>
      <span className="text-[2rem] font-bold">a</span>
      <span className="text-[2rem] font-bold">r</span>
    </div>
    <h2 className="m-4">
      I have explored various projects that suit my passion. you can see it here
    </h2>
  </section>
  <section className="h-screen p-4 sm:p-24">
    <div className="flex flex-row items-center">
      <h1 className="text-[3rem] font-black px-4 mx-4 bg-dark text-light rounded-xl">L</h1>
      <span className="text-[2rem] font-bold">L</span>
      <span className="text-[2rem] font-bold">u</span>
      <span className="text-[2rem] font-bold">t</span>
      <span className="text-[2rem] font-bold">h</span>
      <span className="text-[2rem] font-bold">f</span>
      <span className="text-[2rem] font-bold">i</span>
    </div>
  </section>
  <section className="h-screen p-4 sm:p-24">
    <div className="flex flex-row items-center">
      <h1 className="text-[3rem] font-black px-4 mx-4 bg-dark text-light rounded-xl">UF</h1>
      <span className="text-[2rem] font-bold">U&nbsp;</span>
      <span className="text-[2rem] font-bold"></span>
      <span className="text-[2rem] font-bold">c</span>
      <span className="text-[2rem] font-bold">a</span>
      <span className="text-[2rem] font-bold">n&nbsp;</span>
      <span className="text-[2rem] font-bold">F</span>
      <span className="text-[2rem] font-bold">i</span>
      <span className="text-[2rem] font-bold">n</span>
      <span className="text-[2rem] font-bold">d</span>
    </div>
  </section>
  </TracingBeam>
  </>
  )
}

export default HomeContent