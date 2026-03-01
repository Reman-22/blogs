import { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'

const Form = ({inputs , submit}) => {
        const navigate =useNavigate()
    const [data,setData]=useState({})
    const dataHundle =(event)=>{
        event.preventDefault()
    }
    const LogIn=()=>{
      navigate("/")
    }
  return (
    <form onSubmit={dataHundle} className='inputs'>
        {inputs.map((input ,index) =>{
            return(
                <input key={index} type={input.type} placeholder={input.placeholder}  onChange={(event)=>{setData({...data,[input.name ] :event.target.defaultValue})}}/>
            )
        })}
        <input type='submit' value={submit} onClick={LogIn} className='btn'/>
    </form>
  )
}

export default Form