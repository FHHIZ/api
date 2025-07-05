import React from 'react'
import Navbar from '../components/Navbar'
import Trend from '../components/Trending'
import Card from '../components/Card'
import Discover from '../components/Discover'
import TopRating from '../components/TopRate'
// import TopRating from '../components/TopRate'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
          <div className='block'>
            <Discover />
            {/* <TopRating /> */}
            <Trend />
            {/* <Card /> */}
          </div>
        </div>        
    </div>
  )
}

export default Home
