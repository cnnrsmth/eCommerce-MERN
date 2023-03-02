
import React from 'react'
import headervid from '../photos/headervid.mp4'

function Header() {
  return (
    <div>
        <video src={headervid} autoPlay loop muted />
    </div>
  )
}

export default Header


