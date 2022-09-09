import React from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = ({ headerVariants }) => {

  return (
    <>
        <motion.div 
            className="header" id="header"
            variants={headerVariants}
            initial={headerVariants?.hidden}
            animate={headerVariants?.visible}
            exit={headerVariants?.exit}
        >
            <Link to="/sorting-algorithm-visualizer" className="header_link">
                <div className="header_title">
                    <motion.span 
                        className="header_titleName"
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                    >
                        Sorting Algorithm Visualizer
                    </motion.span>
                </div>
            </Link>

            <div className="header_nav">
                <Link to="/sorting-algorithm-visualizer/insertion" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Insertion Sort
                        </motion.span>
                    </div>
                </Link>
                <Link to="/sorting-algorithm-visualizer/heap" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Heap Sort
                        </motion.span>
                    </div>
                </Link>
                <Link to="/sorting-algorithm-visualizer/merge" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Merge Sort
                        </motion.span>
                    </div>
                </Link>
                <Link to="/sorting-algorithm-visualizer/quick" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Quick Sort
                        </motion.span>
                    </div>
                </Link>
                <Link to="/sorting-algorithm-visualizer/bubble" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Bubble Sort
                        </motion.span>
                    </div>
                </Link>
                <Link to="/sorting-algorithm-visualizer/selection" className="header_link">
                    <div className="sort_option">
                        <motion.span 
                            className="sort_name"
                            whileHover={headerVariants.hover}
                            whileTap={headerVariants.tap}
                        >
                            Selection Sort
                        </motion.span>
                    </div>
                </Link>
            </div>
        </motion.div>
    </>

  )
}

export default Header