import React, { useState, useEffect }  from 'react'
// import { useParams } from 'react-router-dom'

import randomRange from '../utility/randomRange'
import mSort from '../sorting/mergeSort'
import Bars from '../components/Bars'
import HeaderSort from '../components/HeaderSort'

const Merge = ({ headerVariants }) => {
    // let params = useParams();
    const [bars, setBars] = useState([])
    const [barSize, setBarSize] = useState(100);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("");

    useEffect(() => {
        setSortingAlgorithm("merge");
        //eslint-disable-next-line
    }, [])

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: barSize}, () => randomRange(700)));
    }, [barSize])

    const play = () => {
      // run merge sort
      const visuals = mSort(bars)

      // get the bars from the DOM
      const barsArr = document.getElementsByClassName("bar")

      //init prevIndex1 and prevIndex2 to null
      //  prevIndex1 and prevIndex2 represent the indices of previously iterated bars in order for color to be changed
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

            //save indices to change color to show completion
            prevIndex1 = index1;
            prevIndex2 = index2;
          }
          else {
          //   console.log("prevIndex1: ", prevIndex1);
          //   console.log("prevIndex2: ", prevIndex2)
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
          // console.log("i not colorchange: ", i)
          const [index, height] = item
          const barI = barsArr[index].style
          setTimeout(() => {
            barI.height = `${height}px` 
          }, i * 15)

        }
      })
    }

  return (
    <>
        <HeaderSort 
            headerVariants={headerVariants} 
            setBarSize={setBarSize} 
            sortingAlgo = {sortingAlgorithm}
            play = {play}
        />

        <Bars 
            bars={bars}
            sortingAlgo={sortingAlgorithm} 
        />
        
    </>
  )
}

export default Merge