import React from 'react'

const RandomizedBars = ({ size, sortingAlgo }) => {
    const [bars, setBars] = useState(Array.apply(null, Array(size)));

    //randomize bars on initial load
    useEffect(() => {

    }, [])

  return (
    <div className="bars">

    </div>
  )
}

export default RandomizedBars