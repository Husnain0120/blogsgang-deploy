import React, { useEffect } from 'react'
import Layout from '../../Components/layout/Layout'
import HeroSection from '../../Components/heroSection/HeroSection'
import BlogPostCard from '../../Components/blogPostCard/BlogPostCard'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
   <Layout>
    <HeroSection/>
    <BlogPostCard/>
  
   </Layout>
  )
}

export default Home
