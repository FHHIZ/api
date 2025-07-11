import Discover from "../components/Discover"
import Navbar from "../components/Navbar"
import Trending from "../components/Trending"


const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
          <div className='block'>
            <Discover />
            <Trending />
          </div>
        </div>        
    </div>
  )
}

export default Home
