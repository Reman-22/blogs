import React from 'react'
import Sign from '../Components/Sign/Sign'
const SignIn = () => {
  const inputs=[
    {
      type:"text",
      placeholder:"Enter your username",
      name:"username"
    },
    {
      type:"password",
      placeholder:"Enter your password",
      name:"password"
    }
  ]
  return (
    <div>
        <Sign title="Sign In" subtitle="Enter your email password to sign in!" inputs={inputs} submit="Sign In" pg=" Don't have an account? " btn1="Sign up"/> 
    </div>
  )
}

export default SignIn