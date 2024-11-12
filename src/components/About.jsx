import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.left-text', {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.left-text',
        start: 'top 90%',
        end: 'bottom center',
        toggleActions: 'play none none reset', 
      },
    });

    gsap.from('.right-text', {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.right-text',
        start: 'top 90%',
        end: 'bottom center',
        toggleActions: 'play none none reset', 
      },
    });
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[rgb(11,9,9)] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="left-text">
            <p className="sm:text-right text-4xl font-bold">Hi! I'm David, please look around.</p>
          </div>
          <div className="right-text">
            <p>
              I've always been interested in IT, which is why I decided to learn a new profession. In high school, I had already learned HTML, CSS, and JavaScript, and I really liked it, which is why I decided to become a frontend developer. I made some websites, hope you like them! If you want to contact me, please send me an email! You can find my contact details in the Contact section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
