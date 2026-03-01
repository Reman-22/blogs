import Form from '../Form/Form'
import './Hero.css'
const Hero = ( {title , description ,btn}) => {
  return (
    <div className='hero'>
        <h1>{title}</h1>
        <p>{description} </p>
    <div className='form'>
        <input className='form1' placeholder='Enter your Email'  />
        <button className='btn'>{btn}</button>
    </div>
    </div>
  )
}

export default Hero