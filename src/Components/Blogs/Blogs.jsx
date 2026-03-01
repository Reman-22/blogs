import React from 'react'
import './Blogs.css'
import Card from '../Card/Card'
const Blogs = ({title}) => {
  return (
    <div className='blg'>
        <h2>{title}</h2>
        <div className='blogs'>
        <Card img1='/blogs/images/Image (1).png'  auth="Alec Whitten • 1 Jan 2023" title="Bill Walsh leadership lessons" Supporting="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"/>
        <Card img1='/blogs/images/Image (2).png' auth="Demi WIlkinson • 1 Jan 2023" title="PM mental models" Supporting="Mental models are simple expressions of complex processes or relationships."/>
        <Card img1='/blogs/images/Image (3).png' auth="Candice Wu • 1 Jan 2023" title="What is Wireframing?" Supporting="Introduction to Wireframing and its Principles. Learn from the best in the industry."/>
        <Card img1='/blogs/images/Image (4).png' auth="Natali Craig • 1 Jan 2023" title="How collaboration makes us better designers" Supporting="Collaboration can make our teams stronger, and our individual designs better."/>
        <Card img1='/blogs/images/Image (5).png' auth="Drew Cano • 1 Jan 2023" title="Our top 10 Javascript frameworks to use" Supporting="JavaScript frameworks make development easy with extensive features and functionalities."/>
        <Card img1='/blogs/images/Image (6).png' auth="Orlando Diggs • 1 Jan 2023" title="Podcast: Creating a better CX Community" Supporting="Starting a community doesn’t need to be complicated, but how do you get started?"/>
</div>
    </div>
  )
}

export default Blogs