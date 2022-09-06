import React, { useState, useEffect } from 'react'

import HeaderSort from '../components/HeaderSort';
import Bars from '../components/Bars';
import randomRange from '../utility/randomRange';


const Heap = ({ headerVariants }) => {
    const [bars, setBars] = useState([])
    const [barSize, setBarSize] = useState(50);
    const [speed, setSpeed] = useState(50);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("")

    useEffect(() => {
        setSortingAlgorithm("heap");
        //eslint-disable-next-line
    }, [])

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: barSize}, () => randomRange(700)));
    }, [barSize])

    //TODO
    const play = () => {
        
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

export default Heap