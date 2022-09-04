import React, { useState, useEffect } from 'react'
import randomRange from '../utility/randomRange';

import HeaderSort from '../components/HeaderSort';
import Bars from '../components/Bars';

const Quick = ({ headerVariants }) => {
    const [bars, setBars] = useState([])
    const [barSize, setBarSize] = useState(100);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("");

    useEffect(() => {
        setSortingAlgorithm("quick");
        //eslint-disable-next-line
    }, [])

    //randomize bars each time size of arrays change
    useEffect(() => {
        setBars(Array.from({length: barSize}, () => randomRange(700)));
    }, [barSize])
    
    const play = () => {
        console.log("hello from parent")
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