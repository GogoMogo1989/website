import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import videoBackground from '../assets/background.mp4';

const Home = () => {

  useEffect(() => {
    gsap.from('.text-slide', {
      y: -50,
      opacity: 0,
      duration: 3,
      ease: 'power2.out',
      stagger: 1, 
    });
  }, []);

  return (
    <div name="home" className="w-full h-screen relative z-10">

      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="text-gray-100 text-slide">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100 text-slide">Kovács-Farkas Dávid</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-100 text-slide">I'm a Frontend Developer</h2>
        <p className="text-gray-100 py-4 max-w-[700px] text-slide">
          Welcome to my website, you can see my work and find my contact details.
        </p>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
          Home
      </p>
    </div>
  );
}

export default Home;
