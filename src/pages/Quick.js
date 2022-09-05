import React, { useState, useEffect } from 'react'
import randomRange from '../utility/randomRange';

import HeaderSort from '../components/HeaderSort';
import Bars from '../components/Bars';
import qSort from '../sorting/quickSort';


const Quick = ({ headerVariants }) => {
    const [bars, setBars] = useState([])
    const [barSize, setBarSize] = useState(50);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("")

    useEffect(() => {
        setSortingAlgorithm("quick");
        //eslint-disable-next-line
    }, [])

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: barSize}, () => randomRange(700)));
    }, [barSize])
    
    const play = () => {
        console.log("bars from before: ", bars)
        const barsArr = document.getElementsByClassName("bar")
        const visuals = qSort(bars, barSize)
        console.log("bars after: ", bars)
        console.log("visuals: ", visuals)
        // let pivotIndex = null;
        visuals.forEach((item, i) => {
            // if (item.pivot){
            //     pivotIndex = item.pivot
            //     const pivotStyle = barsArr[pivotIndex].style
            //     setTimeout(() => {
            //         pivotStyle.backgroundColor = "#0a0a0a"
            //     }, i * 100 )
            // }
            // else {
                if(!item.colorBack && !item.colorDone){
                    const lIndex = item.l;
                    const lHeight = item.heightL;
                    const rIndex = item.r;
                    const rHeight = item.heightR;
                    const lStyle = barsArr[lIndex].style
                    const rStyle = barsArr[rIndex].style

                    setTimeout(() => {
                        lStyle.backgroundColor = "#6eff7c"
                        rStyle.backgroundColor = "#6eff7c"

                    }, i * 100 )
                
                    setTimeout(() => {
                        lStyle.height = `${lHeight}px` 
                        rStyle.height = `${rHeight}px`
                    }, i * 100)
                } 
                else if (item.colorDone) {
                    const lIndex = item.l;
                    // const lHeight = item.heightL;
                    const rIndex = item.r;
                    // const rHeight = item.heightR;
                    const lStyle = barsArr[lIndex].style
                    const rStyle = barsArr[rIndex].style

                    setTimeout(() => {
                        lStyle.backgroundColor = "#6eff7c"
                        rStyle.backgroundColor = "#6eff7c"
                        // setTimeout(() => {
                        //     lStyle.height = `${lHeight}px` 
                        //     rStyle.height = `${rHeight}px`
                        // }, i * 100)
                    }, i * 100 )
                }
                else {
                    const lIndex = item.l;
                    // const lHeight = item.heightL;
                    const rIndex = item.r;
                    // const rHeight = item.heightR;
                    const lStyle = barsArr[lIndex].style
                    const rStyle = barsArr[rIndex].style

                    setTimeout(() => {
                        lStyle.backgroundColor = "#cf76cd"
                        rStyle.backgroundColor = "#cf76cd"
                        // setTimeout(() => {
                        //     lStyle.height = `${lHeight}px` 
                        //     rStyle.height = `${rHeight}px`
                        // }, i * 100)
                    }, i * 100 )
                }

            }

        // }
        )
        console.log("barsArr: ", barsArr)
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

export default Quick