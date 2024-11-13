import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Github from '../assets/github.png';
import Node from '../assets/node.png';
import React2 from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Ionic from '../assets/ionic.png';
import MongoDB from '../assets/MongoDB.png';
import Postman from '../assets/Postman.png';
import Angular from '../assets/Angular.png';
import Typescript from '../assets/typescript.png'
import videoBackground from '../assets/background2.mp4';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsData = [
    { src: HTML, title: 'HTML' },
    { src: CSS, title: 'CSS' },
    { src: Javascript, title: 'Javascript' },
    { src: Node, title: 'Node' },
    { src: Github, title: 'Github' },
    { src: React2, title: 'React' },
    { src: Tailwind, title: 'Tailwind' },
    { src: Ionic, title: 'Ionic' },
    { src: MongoDB, title: 'MongoDB' },
    { src: Postman, title: 'Postman' },
    { src: Angular, title: 'Angular'},
    { src: Typescript, title: 'Typescript'}
  ];

  useEffect(() => {
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2, 
        scrollTrigger: {
          trigger: card, 
          start: 'top 80%', 
          end: 'top 20%', 
          scrub: true, 
          toggleActions: 'play none reverse none', 
        },
      });
    });
  }, []);

  return (
    <div name='skills' className='w-full h-full text-gray-100 relative'>

      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="skill-card w-20 mx-auto mt-2.5"
                src={skill.src}
                alt={skill.title.toLowerCase()}
                title={skill.title}
              />
            </div>
          ))}
        </div>
        <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
          Skills
        </p>
      </div>
    </div>
  );
};

export default Skills;
