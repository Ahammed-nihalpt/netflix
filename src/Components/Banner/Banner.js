import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_btns'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nemo vitae perferen.</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
