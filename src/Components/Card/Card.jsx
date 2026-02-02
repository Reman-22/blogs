import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import './Card.css'
const Card = ( {img1 , auth, title, Supporting }) => {
  return (
    <div className='Card'>
        <img src={img1} alt='img blog ' />
        <p className='auth'>{auth}</p>
        <div className='heading'> 
        <h3>{ title}</h3>
        <FiArrowUpRight className='icon'/>
        </div>
        <p className='Supporting'>{Supporting}</p>
    </div>
  )
}

export default Card