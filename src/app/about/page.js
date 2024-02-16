'use client'
import React, { useState } from 'react'
import HomeTitleNew from '../components/HomeTitle'

const About = () => {

  const [homeContentHidden, setHomeContentHidden] = useState(true)
  const [pageTransitionComplete, setPageTransitionComplete] = useState(false);

  const toggleTransition = () => {
    setHomeContentHidden(false)
    setTimeout(() => {
      setPageTransitionComplete(true);
    }, 500)
  }

  return (
    <main className="box-border flex min-h-screen flex-col">
        
      <section className="h-screen p-24 flex items-center justify-center">
        <div>
          About
        </div>
      </section>
    </main>
  )
}

export default About