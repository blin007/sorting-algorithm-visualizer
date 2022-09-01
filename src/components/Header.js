import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import { motion } from 'framer-motion'

const Header = ({ linkVariants }) => {
  return (
    <div className="header">
        <Link to="/" className="header_link">
            <div className="header_title">
                <motion.span 
                    className="header_titleName"
                    variants={linkVariants}
                    whileHover={linkVariants.hover}
                    whileTap={linkVariants.tap}
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
                        variants={linkVariants}
                        whileHover={linkVariants.hover}
                        whileTap={linkVariants.tap}
                    >
                        Insertion Sort
                    </motion.span>
                </div>
            </Link>
            <Link to="/merge" className="header_link">
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={linkVariants}
                        whileHover={linkVariants.hover}
                        whileTap={linkVariants.tap}
                    >
                        Merge Sort
                    </motion.span>
                </div>
            </Link>
            <Link to="/quick" className="header_link">
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={linkVariants}
                        whileHover={linkVariants.hover}
                        whileTap={linkVariants.tap}
                    >
                        Quick Sort
                    </motion.span>
                </div>
            </Link>
            <Link to="/bubble" className="header_link">
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={linkVariants}
                        whileHover={linkVariants.hover}
                        whileTap={linkVariants.tap}
                    >
                        Bubble Sort
                    </motion.span>
                </div>
            </Link>
            <Link to="/selection" className="header_link">
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={linkVariants}
                        whileHover={linkVariants.hover}
                        whileTap={linkVariants.tap}
                    >
                        Selection Sort
                    </motion.span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header