import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {

  const [studies, setStudies] = useState([
    "CodeCool, 2022 - Frontend Developer",
    "University of Kodolányi János, 2013-2016 - Jazz-guitar faculty",
    "Egressy Béni Reformed Art Vocational School, 2009-2013 - Jazz-guitar faculty"
  ]);

  const [experience, setExperience] = useState([
    `2023 january - 2025 january`,
    `In my current job I work as a frontend developer using the
    Angular framework. As part of the project, I am responsible
    for the design and implementation of the front-end
    architecture of the application, as well as contributing to
    the design and implementation of new features. I also
    refactor existing code to improve performance and
    optimise the user experience. I work closely with backend
    developers and designers to ensure the application meets
    the latest industry standards and user expectations.`
  ]);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char">{char}</span>
    ));
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".resume-section",
      start: "top center", 
    });

    gsap.from(".section-title", {
      opacity: 0,
      x: -20,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      }
    });

    gsap.from(".char", {
      opacity: 0,
      x: -20,
      duration: 3,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      }
    });
  }, []);

  return (
    <div name="resumee" className="resume-section w-full min-h-screen bg-gray-100 text-black px-4 pt-10 sm:px-8 md:px-16 relative">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">

          <div className="sm:w-full md:w-1/2">
            <p className="section-title text-3xl sm:text-4xl md:text-5xl font-bold pb-4 sm:pl-4">{splitText("Studies")}</p>
            <div>
              {studies.map((line, idx) => (
                <p key={idx} className="pb-2 sm:pl-4">{splitText(line)}</p>
              ))}
            </div>
          </div>
          
          <div className="sm:w-full md:w-1/2">
            <p className="section-title text-3xl sm:text-4xl md:text-5xl font-bold pb-4 sm:pl-4">{splitText("Experience")}</p>
            <div>
              {experience.map((line, idx) => (
                <p key={idx} className="pb-2 sm:pl-4">{splitText(line)}</p>
              ))}
            </div>
          </div>
        </div>
      
        <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60 z-10">
          Resumee
        </p>
      </div>
    </div>
  );
};

export default Resume;
