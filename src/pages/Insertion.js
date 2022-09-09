import React, { useState, useEffect } from 'react'

import iSort from '../algorithms/insertionSort'
import randomRange from '../utility/randomRange'
import HeaderSort from '../components/HeaderSort'
import Bars from '../components/Bars'

const Insertion = ({ headerVariants }) => {
    const [bars, setBars] = useState([])
    const [barSize, setBarSize] = useState(50);
    const [speed, setSpeed] = useState(50);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("")

    useEffect(() => {
        setSortingAlgorithm("insertion");
        //eslint-disable-next-line
    }, [])

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: barSize}, () => randomRange(700)));
    }, [barSize])

    const play = () => {
        // console.log("bars from before: ", bars)
        const barsArr = document.getElementsByClassName("bar")
        const visuals = iSort(bars, barSize)
        // console.log("bars after: ", bars)
        // console.log("visuals: ", visuals)

        visuals.forEach((item, i) => {
            if(!item.colorBack){
                const lIndex = item.l;
                const lHeight = item.heightL;
                const rIndex = item.r;
                const rHeight = item.heightR;
                const lStyle = barsArr[lIndex].style
                const rStyle = barsArr[rIndex].style

                setTimeout(() => {
                    lStyle.background = "linear-gradient(#b44efc, #9808ff)"
                    rStyle.background = "linear-gradient(#b44efc, #9808ff)"
                }, i * speed )
            
                setTimeout(() => {
                    lStyle.height = `${lHeight}px` 
                    rStyle.height = `${rHeight}px`
                }, i * speed)
            } 
            else {
                const lIndex = item.l;
                const rIndex = item.r;
                const lStyle = barsArr[lIndex].style
                const rStyle = barsArr[rIndex].style

                setTimeout(() => {
                    lStyle.background = "linear-gradient(#5cfacb, #02f5ac)"
                    rStyle.background = "linear-gradient(#5cfacb, #02f5ac)"
                }, i * speed )
            }
        })
    }

  return (
    <>
        <HeaderSort 
            headerVariants={headerVariants} 
            setBarSize={setBarSize} 
            setSpeed={setSpeed}
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

export default Insertion