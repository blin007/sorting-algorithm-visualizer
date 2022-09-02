import React, { useState, useEffect } from 'react'
import randomRange from '../utility/randomRange';
import "../../../styles/Bars.css"

const Bars = ({ size, sortingAlgo, setSortingComplete, setSortingInProgress }) => {
    const [bars, setBars] = useState([]);
    // const [sortingComplete, setSortingComplete] = useState(false);

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: size}, () => {
          return {
            height: randomRange(700),
            sorted: false,
          }
        }))
        //eslint-disable-next-line
    }, [size])

    //render for sorting algo
    useEffect(() => {
      setSortingComplete(false)
      setSortingInProgress(true)

      //run sorting algo

      setSortingComplete(true);
      setSortingInProgress(false);
      //eslint-disable-next-line
    }, [sortingAlgo])

    //render each time the bars change due to sorting
    useEffect(() => {

    }, [bars])

  return (
    <div className="bars">
        <div className="bars_container">
          {bars.map((item, i) => (
            <div className="bar" style={{ 
              height: item.height, 
              backgroundColor: item.sorted ? "green" : "red",
              // width: Math.floor(size* 0.15)
            }} />
          ))}
        </div>
    </div>
  )
}

export default Bars