import React from 'react'
import './style/Home.css'
import { motion } from 'framer-motion'

const Home = ({ homeVariants }) => {
  return (
    <motion.div 
        className="home"
        variants={homeVariants}
        initial={homeVariants.hidden}
        animate={homeVariants.visible}
        exit={homeVariants.exit}
    >

        <h2>WELCOME</h2>
    </motion.div>
  )
}

export default Home