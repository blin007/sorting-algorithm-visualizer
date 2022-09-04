import React, { useState } from 'react'
import '../styles/Header.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdNavigateBefore, MdRefresh } from "react-icons/md";

const HeaderSort = ({ headerVariants, setBarSize, sortingAlgo, play }) => {
    const [disable, setDisable] = useState(false);

    const handleInput = (e) => {
        setBarSize(Number(e.target.value))
    }

    const handleReload = (e) => {
        e.preventDefault();
        window.location.reload();
        setDisable(false);
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
                <h2>{sortingAlgo.toUpperCase()} SORT</h2>
            </div>
            {disable && (
                <motion.div 
                    className="sort_reload"
                    variants={headerVariants}
                    whileHover={headerVariants.hover}
                    whileTap={headerVariants.tap}
                    onClick={handleReload}
                >
                    Refresh <MdRefresh style={{marginLeft: "5px"}}/>
                </motion.div>
            )}

            <div className="header_sort_nav">
                <input 
                    className="slider"
                    type="range"
                    min="25"
                    max="200"
                    step="25"
                    onInput={e => handleInput(e)}
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
        </div>



    </>
  )
}

export default HeaderSort