import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner_container' style={{ 
        backgroundImage: `url("https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Fbakery.jpg&w=1920&q=75")` 
      }}>

        <div className='banner_textbox'>
            <h1>Get Your Bakery Items Delivered</h1>
            <p>Get your favorite bakery items baked and delivered to your doorsteps at any time</p>
            <input placeholder='search your product from here' className='impbox'/>
            <button className='search_btn'>Search</button>
        </div>
      
    </div>
  )
}

export default Banner
