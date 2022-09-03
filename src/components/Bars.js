import React from 'react'
import "../styles/Bars.css"

const Bars = ({ bars, sortingAlgo }) => {

  return (
    <div className="bars">
        <div className="bars_container">
          {bars.map((item, i) => (
            <div className="bar" key={i} style={{ 
              height: item,
              backgroundColor: "red",
            }} />
          ))}
        </div>
    </div>
  )
}



export default Bars