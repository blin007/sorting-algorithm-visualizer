import React from 'react'
import './style/Home.css'
import './style/Loader.css'
import { motion } from 'framer-motion'
import sort_graphic from '../../assets/sort_graphic.png'
import sort_graphic2 from '../../assets/sort_graphic2.png'

const Home = ({ homeVariants }) => {
  return (
    <motion.div 
        className="home"
        variants={homeVariants}
        initial={homeVariants?.hidden}
        animate={homeVariants?.visible}
        exit={homeVariants?.exit}
    >
      <div className="home_container">
        <div className="row home_info">
          <h2>LOREM IPSUM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Consequat id porta nibh venenatis cras sed felis. Id nibh tortor id aliquet lectus proin nibh.
          </p>
          <div className="panel_instruction">
            <p>To try, click on one of the sorting algorithms and press play</p>
          </div>
        </div>
        <div className="row home_graphics">
          <div className="col panel">
            <div className="panel_graphic">
              <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="panel_graphic_info">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Consequat id porta nibh venenatis cras sed felis. Id nibh tortor id aliquet lectus proin nibh.
                </p>

              </div>
            </div>
          </div>
          <div className="col site_graphic" >
            {/* src\pages\Home\Home.js */}
            <img src={sort_graphic} alt="graphic1" />
            <img src={sort_graphic2} alt="graphic2" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home