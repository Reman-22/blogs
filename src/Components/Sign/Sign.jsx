import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sign.css'
import Form from '../Form/Form'
const Sgin = ({title, subtitle, inputs, submit, pg, btn1}) => {
    const navigate =useNavigate()
    const ChangeSign=()=>{
        if(btn1 ==="Sign up"){
        navigate("/SignUp")}
        else if(btn1==="Sign in"){
            navigate("/SignIn")
        }
    }
    
  return (
    <div className='Sign'>
        <h1>{title}</h1>
        <p className='subtitle'>{subtitle}</p>
        <div className='inputs'>
        <Form inputs={inputs} submit={submit}/>
        </div>
        <div className='account'>
        <p>{pg}</p>
        <button onClick={ChangeSign}>{btn1}</button>
        </div>
    </div> 
  )
}

export default Sgin