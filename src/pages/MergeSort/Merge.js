import React, { useState }  from 'react'
import './style/Merge.css'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

import Bars from '../../components/Bars'

const Merge = ({ headerVariants }) => {
    let params = useParams();
    const [barSize, setBarSize] = useState(100);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("");
    const [sortingComplete, setSortingComplete] = useState(false);
    const [sortingInProgress, setSortingInProgress] = useState(false);

    const handleInput = (e) => {
        console.log('e: ', e);
        setBarSize(Number(e.target.value))
        // console.log("sorting algorithm from path param: ", params.sortingAlgorithm)
    }

  return (
    <>
        <div className="header">
            <Link to="/" className="header_link">
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
            </Link>

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
                        Play
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
                        Stop
                    </motion.span>
                </div>
                <input 
                    className="slider"
                    type="range"
                    min="25"
                    max="200"
                    step="25"
                    onInput={e => handleInput(e)}
                />
            </div>
        </div>

        <Bars 
            size={barSize} 
            sortingAlgo={sortingAlgorithm} 
            setSortingComplete={setSortingComplete} 
            setSortingInProgress={setSortingInProgress}
        />
        
    </>
  )
}

export default Merge