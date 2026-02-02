import React from 'react'
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = ( { title , items , btn}) => {
    const navigate =useNavigate()
    const ChangeUrl=()=>{
        navigate("/SignIn")
    }
  return (
    <div className='NavBar'>
    <div className='nav'>
    <h3> {title}</h3>
    <ul> {items?.map ((item , index ) =>{
        return(
            <li key={index}> <NavLink to={item?.Url} className={({isActive})=> isActive?'active':''}> {item.content} </NavLink> </li>
        )
    } )}</ul>
    </div>
    <button className='btn' onClick={ChangeUrl}>{btn}</button>
    </div>
  )
}

export default NavBar