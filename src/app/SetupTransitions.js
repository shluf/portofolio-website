'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import PageTransition from './component/Transitions'

const SetupTransitions = ({children}) => {
    const router = usePathname()
    const [loading, setLoading] = useState(null)
    return (
        <AnimatePresence mode='wait'>
            <motion.div key={router}>
                <PageTransition />
                {children}
            </motion.div>
        </AnimatePresence>
)
}

export default SetupTransitions