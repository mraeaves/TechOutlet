import React from 'react'
import './footer.css'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p className='left'>2019 TechOutlet</p>
        <p className='right'><i class="fa fa-envelope-o mail-red" aria-hidden="true"></i>contact-us@techoutlet.co.uk</p>
    </div>
  )
}

export default Footer