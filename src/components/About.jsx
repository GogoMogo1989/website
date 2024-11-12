import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const [welcome, useWelcome] = useState(
    `Hi! I'm David, please look around.`
  );
  const [text, useText] = useState(
    `I've always been interested in IT, which is why I decided to learn a new profession. 
     In high school, I had already learned HTML, CSS, and JavaScript, and I really liked it, 
     which is why I decided to become a frontend developer. I made some websites, hope you like them! 
     If you want to contact me, please send me an email! You can find my contact details in the Contact section.`
  );

  useEffect(() => {
    gsap.from('.about-title', {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power3.out',
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        markers: false
      }
    });

    gsap.from('.about-text', {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power3.out',
      delay: 0.5, 
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
        markers: false
      }
    });
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[rgb(11,9,9)] text-gray-100 relative">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="about-title sm:text-right text-4xl font-bold pb-2 pl-4">
              {welcome}
            </p>
          </div>

          <div>
            <p className="about-text">
              {text}
            </p>
          </div>
        </div>


        <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
          About
        </p>
      </div>
    </div>
  );
};

export default About;
