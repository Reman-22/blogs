import React from 'react'
import Blogs from '../Components/Blogs/Blogs.jsx'
import Hero from '../Components/Hero/Hero.jsx'


const Home = () => {
  return (
    <div>
        <section>
    <Hero title="Stories and interviews" description="Subscribe to learn about new product features, the latest in technology, solutions, and updates." btn="Subscribe"/>
    <Blogs title="All Blog Posts"/>
    </section>
    </div>
  )
}

export default Home