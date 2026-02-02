import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
const Sgin = ({title, subtitle,btn, pg, btn1}) => {
    const navigate =useNavigate()
    const ChangeSign=()=>{
        if(btn1 ==="Sign up"){
        navigate("/SignUp")}
        else if(btn1==="Sign in"){
            navigate("/SignIn")
        }
    }
    const LogIn=()=>{
      navigate("/")
    }
  return (
    <div className='Sign'>
        <h1>{title}</h1>
        <p className='subtitle'>{subtitle}</p>
        <div className='inputs'>
        <input placeholder="Enter your username"/>
        <input placeholder="Enter your email"/>
        <input placeholder="Enter your password"/>
        <button className='btn' onClick={LogIn}>{btn}</button>
        </div>
        <div className='account'>
        <p>{pg}</p>
        <button onClick={ChangeSign}>{btn1}</button>
        </div>
    </div>
  )
}

export default Sgin