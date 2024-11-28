import React from 'react';
import WorkImg1 from '../assets/Website.png';
import WorkImg2 from '../assets/Chat_Angular.png';
import WorkImg3 from '../assets/Pizza_MERN.png';
import WorkImg4 from '../assets/Ionic-React.jpg';
import WorkImg5 from '../assets/Blog.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';  

const Work = () => {
  return (
    <div name="work" className="w-full h-auto text-black bg-gray-100 relative flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Swiper
          spaceBetween={30}  
          loop={true}  
          pagination={{ clickable: true }}  
          grabCursor={true}  
          centeredSlides={true} 
          modules={[Autoplay]} 
          autoplay={{
            delay: 3000,  
            disableOnInteraction: false,  
            waitForTransition: true,  
          }}
          speed={1500} 
          className="w-full"  
          breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2,  
            },
            1024: {
              slidesPerView: 3,  
            },
          }}
        >

<SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg1})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md"
            ></div>
            <div className="p-2 mt-2">
              <span className="text-sm text-gray-400 tracking-wide">
                Website
              </span>
              <div className="pt-1">
                <p className="text-sm text-gray-400">
                I used React to create the website and styled it with Tailwind. 
                </p>
              </div>
              <div className="pt-1">
                <a href="https://github.com/GogoMogo1989/website" className="text-sm text-gray-400 font-medium underline">
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg2})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md"
            ></div>
            <div className="p-2 mt-2">
              <span className="text-sm text-gray-400 tracking-wide">
                Chat
              </span>
              <div className="pt-1">
                <p className="text-sm text-gray-400">
                I used Angular framework in the application, connected to the Mongodb database with Node.js-Express.js. After registration, users can chat live with each other and the history of the conversation is displayed. 
                </p>
              </div>
              <div className="pt-1">
                <a href="https://github.com/GogoMogo1989/chat-angular" className="text-sm text-gray-400 font-medium underline">
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg3})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md"
            ></div>
            <div className="p-2 mt-2 ">
              <span className="text-sm text-gray-400 tracking-wide">
                Pizzeria
              </span>
              <div className="pt-1">
                <p className="text-sm text-gray-400">
                The page was created using MERN (MongoDb-Express-React-Node) technology. The site is a fictitious pizzeria website where the user can order, with or without registration. The site includes an admin interface where orders can be managed or new products can be added, edited or deleted. If you are curious about the admin page (https://bestpizzakfd.netlify.app/adminlogin), you can register, secretkey: Silverland2024.
                </p>
              </div>
              <div className="pt-1">
                <a href="https://github.com/GogoMogo1989/pizza_MERN" className="text-sm text-gray-400 font-medium underline">
                  Code
                </a>
                <a href="https://bestpizzakfd.netlify.app/" className="text-sm text-gray-400 font-medium underline pl-1">
                  Demo
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg5})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md"
            ></div>
            <div className="p-2 mt-2">
              <span className="text-sm text-gray-400 tracking-wide">
                Blog
              </span>
              <div className="pt-1">
                <p className="text-sm text-gray-400">
                I used MERN technology (MongoDB-Express-React-Node.js) to create this blog. You can register on the site and then create, edit and delete blog posts. 
                </p>
              </div>
              <div className="pt-1">
                <a href="https://github.com/GogoMogo1989/blog2" className="text-sm text-gray-400 underline">
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg4})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md"
            ></div>
            <div className="p-2 mt-2">
              <span className="text-sm text-gray-400 tracking-wide">
               Input
              </span>
              <div className="pt-1">
                <p className="text-sm text-gray-400">
                When making this page I practiced the properties of Ionic in React.
                </p>
              </div>
              <div className="pt-1">
                <a href="https://github.com/GogoMogo1989/ionic_practises" className="text-sm text-gray-400 font-medium underline">
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
        Projects
      </p>
    </div>
  );
};

export default Work;
