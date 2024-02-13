'use client'
import React, { useState } from 'react'
import PageTransition, { PageTransitionHome } from '../component/Transitions'

const Projects = () => {
  const [test, setTest] = useState(false)
  return (
    <main className="box-border flex min-h-screen flex-col">
      <section className="h-screen p-24 flex items-center justify-center">
        <div>
          Page
          <button onClick={() => {test ? setTest(false) : setTest(true)}}>Test</button>
          {test? <PageTransitionHome /> : null}
        </div>
      </section>
    </main>
  )
}

export default Projects