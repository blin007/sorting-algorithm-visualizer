import React, { useState } from 'react'
import '../styles/Home.css'
import { motion } from 'framer-motion'
import Bars from './Bars'

const Home = ({ headerVariants }) => {
    const [barSize, setBarSize] = useState(100);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("");
    const [sortingComplete, setSortingComplete] = useState(false);
    const [sortingInProgress, setSortingInProgress] = useState(false);

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
                        onClick={() => setSortingAlgorithm("insertion")}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto", 
                            color: sortingInProgress ? "gray" : "white",
                        }}
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
                        onClick={() => setSortingAlgorithm("merge")}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto",
                            color: sortingInProgress ? "gray" : "white",
                        }}
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
                        onClick={() => setSortingAlgorithm("quick")}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto",
                            color: sortingInProgress ? "gray" : "white",
                        }}
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
                        onClick={() => setSortingAlgorithm("bubble")}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto",
                            color: sortingInProgress ? "gray" : "white",
                        }}
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
                        onClick={() => setSortingAlgorithm("selection")}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto",
                            color: sortingInProgress ? "gray" : "white",
                        }}
                    >
                        Selection Sort
                    </motion.span>
                </div>
            </div>
        </div>


        <div className="home">
            <Bars 
                size={barSize} 
                sortingAlgo={sortingAlgorithm} 
                setSortingComplete={setSortingComplete} 
                setSortingInProgress={setSortingInProgress}
            />
        </div>
    </>

  )
}

export default Home