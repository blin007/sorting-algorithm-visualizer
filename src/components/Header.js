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
            <Link to="/" className="header_link">
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
                <Link to="/insertion" className="header_link">
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
                <Link to="/heap" className="header_link">
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
                <Link to="/merge" className="header_link">
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
                <Link to="/quick" className="header_link">
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
                <Link to="/bubble" className="header_link">
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
                <Link to="/selection" className="header_link">
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