import React, { useState, useEffect } from 'react'
import randomRange from '../../../utility/randomRange'
import "../../../styles/Bars.css"
import mSort from '../../../sorting/mergeSort';

const Bars = ({ size, sortingAlgo, setSortingInProgress, sortingInProgress }) => {
    const [bars, setBars] = useState([]);
    const [sortingComplete, setSortingComplete] = useState(false);

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: size}, () => randomRange(700)));
    }, [size])

    useEffect(() => {

    }, )

    const sort = () => {
        const visuals = mSort(bars)

        // console.log("bars after: ", visuals);

        // get the bars from the DOM
        const barsArr = document.getElementsByClassName("bar")
        console.log("bars: ", barsArr)
        let prevIndex1 = null;
        let prevIndex2 = null;

        //loop through the visualization array 
        visuals.forEach((item, i) => {
          const colorChange = i % 2 === 0 
          // For every first bar, change the color
          if (colorChange){
            //if there was no previous index for the visuals
            if (prevIndex1 === null || prevIndex2 === null){
              const [index1, index2] = item
              // console.log("i in colorchange:", i)
              // console.log("item: ", item);
              // console.log("index1: ", index1)
              // console.log("index2: ", index2)
              const barInit1 = barsArr[index1].style
              const barInit2 = barsArr[index2].style

              //change color to green for the bars that are being currently swapped in the merge sort
              setTimeout(() => {
                barInit1.backgroundColor = "#6eff7c"
                barInit2.backgroundColor = "#6eff7c"
              }, i * 15 )

              //save indices to change color to show swap
              prevIndex1 = index1;
              prevIndex2 = index2;
            }
            else {
              console.log("prevIndex1: ", prevIndex1);
              console.log("prevIndex2: ", prevIndex2)
              const prevInit1 = barsArr[prevIndex1].style
              const prevInit2 = barsArr[prevIndex2].style

              //revert colors back
              setTimeout(() => {
                prevInit1.backgroundColor = "#cf76cd"
                prevInit2.backgroundColor = "#cf76cd"
              }, i * 15 )  
              prevIndex1 = null;
              prevIndex2 = null;
            }

          }
          // For every other bar change the height to imitate swapping
          else {
            console.log("i not colorchange: ", i)
            const [index, height] = item
            const barI = barsArr[index].style
            setTimeout(() => {
              barI.height = `${height}px` 
            }, i * 15)

          }
        })
        setSortingComplete(true);       
    }

  return (
    <div className="bars">
        <button onClick={(e) => sort(e)}>Sort</button>
        <div className="bars_container">
          {bars.map((item, i) => (
            <div className="bar" key={i} style={{ 
              height: item, 
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