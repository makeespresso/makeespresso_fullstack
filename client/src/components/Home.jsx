import React from 'react'

import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <div className="main-home-div">
        <div className="hero-image-div">
          <img className="hero-image" src="https://images.unsplash.com/photo-1457414104202-9d4b4908f285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80" alt="Home image" />
          <p className="text-over-hero-img">
            Discover Coffee</p>
        </div>
        <div className="three-article-column">
          <div className="article-column">
            <Link to="/history"><h1>History</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1530313292289-fa316f332666?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            </Link>
          </div>
          <div className="article-column">
            <Link to="/extractions"><h1>Extractions</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1558996338-294a904a1815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            </Link>
          </div>
          <div className="article-column">
            <Link to='/board'> <h1>Coffee Boards</h1>
              <img className="article-column-image" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
