import React from 'react'

import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <div className="main-home-div">
        <div className="hero-image-div">
          <img className="hero-image" src="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Home image" />
          <p className="text-over-hero-img">
            <Link to='/board'>Discover Coffee</Link></p>
        </div>
        <div className="three-article-column">
          <div className="article-column">
            <Link to="/history"><h1 className="text-over-column-image">History</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1530313292289-fa316f332666?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            </Link>
          </div>
          <div className="article-column">
            <Link to="/extractions"><h1 className="text-over-column-image">Extractions</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1551108880-d5ad0d32d39a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
            </Link>
          </div>
          <div className="article-column">
            <Link to='/board'> <h1 className="text-over-column-image">Coffee Boards</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
