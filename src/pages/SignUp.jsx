import React from 'react'
import Sign from '../Components/Sign/Sign.jsx'

const SignUp = () => {
  const inputs=[
    {
      type:"text",
      placeholder:"Enter your username",
      name:"username"
    },
    {
      type:"email",
      placeholder:"Enter your email",
      name:"email"
    },
    {
      type:"password",
      placeholder:"Enter your password",
      name:"password"
    },
    {
      type:"password",
      placeholder:"Enter your password",
      name:"password_confirmation"
    }
  ]
  return (
    <div>

        <Sign title="Sign Up" subtitle="Enter your email and username , password to sign up!" inputs={inputs} submit="Sign Up" pg="Have an account? " btn1="Sign in"/> 

    </div>
  )
}

export default SignUp