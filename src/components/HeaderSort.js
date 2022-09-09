import React, { useState } from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdNavigateBefore, MdRefresh } from "react-icons/md";

const HeaderSort = ({ headerVariants, setBarSize, setSpeed, sortingAlgo, play }) => {
    const [disable, setDisable] = useState(false);

    const handleInputBarSize = (e) => {
        setBarSize(Number(e.target.value))
    }

    const handleInputSpeed = (e) => {
        setSpeed(Number(e.target.value))
    }

    const handleReload = (e) => {
        e.preventDefault();
        window.location.reload();
        setDisable(false);
    }

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
                <motion.div 
                    className="header_nav_back"
                    whileHover={headerVariants.hover}
                    whileTap={headerVariants.tap}
                >
                    <MdNavigateBefore />
                </motion.div>
            </Link>
            <div className="sort_title">
                <h2>{sortingAlgo.toUpperCase()} SORT</h2>
            </div>
            {disable && (
                <motion.div 
                    className="sort_reload"
                    whileHover={headerVariants.hover}
                    whileTap={headerVariants.tap}
                    onClick={handleReload}
                >
                    Refresh <MdRefresh style={{marginLeft: "5px"}}/>
                </motion.div>
            )}

            <div className="header_sort_nav">
                <label htmlFor="speed" className="speed_label">Speed: </label>
                <input 
                    id="speed"
                    className="slider"
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    onInput={e => handleInputSpeed(e)}
                    disabled = {disable ? true : false}
                />
                <label htmlFor="number">Number of Bars: </label>
                <input 
                    id="number"
                    className="slider"
                    type="range"
                    min="25"
                    max="200"
                    step="25"
                    onInput={e => handleInputBarSize(e)}
                    disabled = {disable ? true : false}
                />
                <div 
                    className="sort_option"
                    onClick={play}
                >
                    <motion.button 
                        className="sort_button"
                        variants={headerVariants}
                        whileHover={headerVariants.hover}
                        whileTap={headerVariants.tap}
                        style={{
                            pointerEvents: disable ? "none" : "auto", 
                            color: disable ? "gray" : "white",
                        }}
                        onClick={() => setDisable(true)}
                    >
                        Play
                    </motion.button>
                </div>
            </div>
        </motion.div>



    </>
  )
}

export default HeaderSort