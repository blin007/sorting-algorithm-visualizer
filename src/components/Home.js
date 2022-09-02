import React, { useState } from 'react'
import '../styles/Home.css'
import { motion } from 'framer-motion'
import Bars from './Bars'

const Home = ({ headerVariants }) => {
    const [barSize, setBarSize] = useState(100);

    const handleInput = (e) => {
        console.log('e: ', e);
        setBarSize(Number(e.target.value))
    }
  return (
    <>
        <div className="header">
            <div className="header_title">
                <motion.span 
                    className="header_titleName"
                    variants={headerVariants}
                    whileHover={headerVariants.hover}
                    whileTap={headerVariants.tap}
                >
                    Sorting Algorithm Visualizer
                </motion.span>
            </div>

            <div className="slider_size">
                <input 
                    className="slider"
                    type="range"
                    min="25"
                    max="200"
                    step="25"
                    onInput={e => handleInput(e)}
                />
            </div>

            <div className="header_nav">
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Insertion Sort
                    </motion.span>
                </div>
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Merge Sort
                    </motion.span>
                </div>
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Quick Sort
                    </motion.span>
                </div>
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Bubble Sort
                    </motion.span>
                </div>
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Selection Sort
                    </motion.span>
                </div>
            </div>
        </div>


        <div className="home">
            <Bars size={barSize}/>
        </div>
    </>

  )
}

export default Home