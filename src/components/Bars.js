import React from 'react'
import "../styles/Bars.css"
import { motion } from 'framer-motion'

const barVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut'
    }
  },
}

const Bars = ({ bars }) => {

  return (
    <div className="bars">
        <div className="bars_container">
          {bars.map((item, i) => (
            <motion.div 
              className="bar" 
              key={i} 
              variants={barVariants}
              initial={barVariants?.hidden}
              animate={barVariants?.visible}
               exit={barVariants?.exit}
              style={{ 
              height: item,
              background: "linear-gradient(#ff4f90, #fa005c)",
            }} />
          ))}
        </div>
    </div>
  )
}



export default Bars