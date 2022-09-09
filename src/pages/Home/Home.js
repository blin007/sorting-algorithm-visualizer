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
          <h2>Sorting Algorithm Visualizer</h2>
          <p>Built using ReactJS </p>
          <p>and</p>
          <p>Framer Motion</p>
          {/* <div className="panel_instruction">
          
          </div> */}
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
                <h2>WELCOME</h2>
                <p>Click on one of the </p>
                <p>Sorting Algorithms</p>
                <p>above to try now</p>
              </div>
            </div>
          </div>
          <div className="col site_graphic" >
            <img src={sort_graphic} alt="graphic1" />
            <img src={sort_graphic2} alt="graphic2" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home