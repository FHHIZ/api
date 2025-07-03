import React from 'react'
import { Button2 } from './ui/Button'
import { useNavigate } from 'react-router-dom'
import { listed } from '../constant/listed';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(listed.login);
  }

  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/2398356/pexels-photo-2398356.jpeg')] h-[95vh]">
      <div className="hero absolute inset-0 bg-gradient-to-r from-red-950/90 via-orange-800/90 to-yellow-500/90 text-white p-6 h-[100vh]">
        <div className="hero-content text-center w-[60vw]">
            <div className="w-[60vw]">
            <h1 className="text-7xl font-mono font-extrabold text-center w-[60vw] text-white py-24">Stream your favorite movies anytime, anywhere.</h1>
            <Button2 className="btn btn-primary" onClick={handleClick} label1={'Get Started'}></Button2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
