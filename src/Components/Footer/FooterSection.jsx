import React from 'react'
import './FooterSection.css'
const FooterSection = ({description})=> {
  return (
    <div className='footerSection'>
        <p>{description}</p>
    </div>
  )
}

export default FooterSection