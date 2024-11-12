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
  ];

  useEffect(() => {
    // Kártyák animálása
    gsap.utils.toArray('.skill-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: card, 
          start: 'top 80%', 
          end: 'top 20%', 
          scrub: true, // Görgetés közben folyamatosan animálódik
          toggleActions: 'play none reverse none', // Ha belép a viewportba, akkor elindul, ha elhagyja, visszafelé animálódik
        },
        delay: index * 0.1, // Késleltetés a kártyák megjelenésére
      });
    });
  }, []);

  return (
    <div name='skills' className='w-full h-full bg-[rgb(11,9,9)] text-gray-100 relative'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto mt-2.5"
                src={skill.src}
                alt={skill.title.toLowerCase()}
              />
              <p className="my-4">{skill.title}</p>
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