import React, { useState, useEffect } from 'react'
import randomRange from '../../../utility/randomRange'
import "../../../styles/Bars.css"
import mergeSort from '../../../sorting/mergeSort';

const Bars = ({ size, sortingAlgo, setSortingInProgress, sortingInProgress }) => {
    const [bars, setBars] = useState([]);
    const [sortingComplete, setSortingComplete] = useState(false);

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: size}, () => randomRange(700)));
        // {
        //   return {
        //     height: randomRange(700),
        //     sorted: false,
        //   }
        // }))
        //eslint-disable-next-line
    }, [size])

    //render for sorting algo
    // useEffect(() => {
    //   if (!sortingComplete) {

    //     // setBars(bars => mergeSort(bars));
    //     console.log('bars before: ', bars);

    //     mergeSort(0, bars.length, bars, bars.slice())

    //     console.log("bars after: ", bars);

    //     setSortingComplete(true);
    //   }

    //   //eslint-disable-next-line
    // }, [bars, sortingInProgress])

    const sort = () => {
         console.log('bars before: ', bars);

        mergeSort(0, bars.length, bars, bars.slice())

        console.log("bars after: ", bars);

        setSortingComplete(true);       
    }

  return (
    <div className="bars">
        <button onClick={() => sort()}>Sort</button>
        <div className="bars_container">
          {bars.map((item, i) => (
            <div className="bar" key={i} style={{ 
              height: `${item}px`, 
              //item.height, 
              backgroundColor: "red",
              //item.sorted ? "green" : "red",
            }} />
          ))}
        </div>
    </div>
  )
}

export default Bars