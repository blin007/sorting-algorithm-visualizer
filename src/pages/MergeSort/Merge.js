import React, { useState, useEffect }  from 'react'
import './style/Merge.css'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import Bars from './components/Bars'
import HeaderSort from '../../components/HeaderSort'

const Merge = ({ headerVariants }) => {
    let params = useParams();
    const [barSize, setBarSize] = useState(100);
    const [sortingAlgorithm, setSortingAlgorithm] = useState("");

    const [sortingInProgress, setSortingInProgress] = useState(false);

    useEffect(() => {
        setSortingAlgorithm(params.sortingAlgorithm);
        //eslint-disable-next-line
    }, [])

    useEffect(() => {

    }, [sortingInProgress])

  return (
    <>
        <HeaderSort 
            headerVariants={headerVariants} 
            setBarSize={setBarSize} 
            sortingInProgress={sortingInProgress}
            setSortingInProgress={setSortingInProgress}
        />

        <Bars 
            size={barSize} 
            sortingAlgo={sortingAlgorithm} 
            setSortingInProgress={setSortingInProgress}
            sortingInProgress = {sortingInProgress}
        />
        
    </>
  )
}

export default Merge