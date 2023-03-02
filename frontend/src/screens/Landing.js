import React from 'react'
import bckvid from '../photos/bckvid.mp4'
import './Landing.css'

function Landing() {
  return (
    <>
      <div className="main__vid">
        <video src={bckvid} autoPlay loop muted />
        <div className="content">
          <h1>Friend or Foe</h1>
          <p>Live Longer, whilst Living Better: Healthspan Extension for a Happier Life</p>
          <a href='/shop'>Shop</a>
        </div>
      </div>
    </>

  )
}


export default Landing