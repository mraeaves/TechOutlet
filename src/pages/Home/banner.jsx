import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='homeBanner'>
        <div className='homeBannerCenter'>
            <div className='bannerContent'>
                <p><span className='limitedTitle'>Limited Deals</span></p>
                <h3>Samsung Note 9 from £719. Apple iPad Pro 2019 from £999</h3>
                <h5>Trade in your old device for a new one</h5>
                <a href='/' className='bannerButton'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Banner