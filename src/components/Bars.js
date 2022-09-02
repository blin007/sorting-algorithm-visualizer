import React, { useState, useEffect } from 'react'
import randomRange from '../utility/randomRange';
import '../styles/Bars.css'

const Bars = ({ size, sortingAlgo }) => {
    const [bars, setBars] = useState([]);

    //randomize bars on initial load
    useEffect(() => {
        setBars(Array.from({length: size}, () => randomRange(700)))
        //eslint-disable-next-line
    }, [])

  return (
    <div className="bars">
        <div className="bars_container">
          {bars.map((item, i) => (
            <div className="bar" style={{ height: item }}></div>
          ))}
        </div>
    </div>
  )
}

export default Bars