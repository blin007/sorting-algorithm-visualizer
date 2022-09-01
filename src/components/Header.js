import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
        <Link to="/" className="header_link">
            <span className="header_title">
                Sorting Algorithm Visualizer
            </span>
        </Link>

        <div className="header_nav">
            <Link to="/insertion" className="header_link">
                <div className="sort_option">
                    <span className="sort_name">Insertion Sort</span>
                </div>
            </Link>
            <Link to="/merge" className="header_link">
                <div className="sort_option">
                    <span className="sort_name">Merge Sort</span>
                </div>
            </Link>
            <Link to="/quick" className="header_link">
                <div className="sort_option">
                    <span className="sort_name">Quick Sort</span>
                </div>
            </Link>
            <Link to="/bubble" className="header_link">
                <div className="sort_option">
                    <span className="sort_name">Bubble Sort</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header