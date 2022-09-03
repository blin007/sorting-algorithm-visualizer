import React, { useState } from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { MdNavigateBefore } from "react-icons/md";

const HeaderSort = ({ headerVariants, setBarSize, sortingInProgress, setSortingInProgress, play }) => {
    const params = useParams();

    const stop = () => {
        setSortingInProgress(false);
    }

    const handleInput = (e) => {
        // console.log('e: ', e);
        setBarSize(Number(e.target.value))
        console.log("sorting algorithm from path param: ", params.sortingAlgorithm)
    }

  return (
    <>
        <div className="header">
            <Link to="/" className="header_link">
                <motion.div 
                    className="header_nav_back"
                    variants={headerVariants}
                    whileHover={headerVariants.hover}
                    whileTap={headerVariants.tap}
                >
                    <MdNavigateBefore />
                </motion.div>
            </Link>
            <div className="sort_title">
                <h2>{params.sortingAlgorithm.toUpperCase()} SORT</h2>
            </div>

            <div className="header_sort_nav">
                <input 
                    className="slider"
                    type="range"
                    min="25"
                    max="200"
                    step="25"
                    onInput={e => handleInput(e)}
                    disabled = {sortingInProgress ? true : false}
                />
                <div className="sort_option">
                    <motion.span 
                        className="sort_name"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto", 
                            color: sortingInProgress ? "gray" : "white",
                        }}
                        onClick={play}
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
                        style={{
                            pointerEvents: sortingInProgress ? "none" : "auto",
                            color: sortingInProgress ? "gray" : "white",
                        }}
                        onClick = {() => stop()}
                    >
                        Stop
                    </motion.span>
                </div>
            </div>
        </div>



    </>
  )
}

export default HeaderSort