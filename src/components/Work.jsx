import React from 'react';
import WorkImg from '../assets/Weather-Api.jpg';
import WorkImg2 from '../assets/Nasa.jpg';
import WorkImg3 from '../assets/Profile.jpg';
import WorkImg4 from '../assets/Ionic-React.jpg';
import WorkImg5 from '../assets/Blog.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper and SwiperSlide components
import { Swiper, SwiperSlide } from 'swiper/react';

const Work = () => {
  return (
    <div name="work" className="w-full h-screen text-black bg-gray-100 relative">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Add Swiper */}
        <Swiper
          spaceBetween={10}  // Képek közötti távolság
          slidesPerView={4}  // 4 kép látszik egyszerre
          loop={true}  // Végtelen görgetés
          autoplay={{
            delay: 2000, // Képváltás késleltetése 2 másodpercenként
            disableOnInteraction: false, // Az interakciók ne akadályozzák a görgetést
          }}
          
          direction="horizontal"  // Görgetés iránya
          className="w-full h-full"  // A Swiper teljes magasságra és szélességre kitölt
          
        >
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="w-full h-full bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <span className="text-2xl font-bold text-[#ccc6f6] tracking-wider">
                  React JS Weather-Api
                </span>
                <div className="pt-8">
                  <a href="https://gogomogo1989.github.io/weather/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/GogoMogo1989/weather">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg2})` }}
              className="w-full h-full bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <span className="text-2xl font-bold text-[#ccc6f6] tracking-wider">
                  Javascript NASA
                </span>
                <div className="pt-8">
                  <a href="https://gogomogo1989.github.io/nasa/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/GogoMogo1989/nasa">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg3})` }}
              className="w-full h-full bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <span className="text-2xl font-bold text-[#ccc6f6] tracking-wider">
                  Node JS Profile
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/profile">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg5})` }}
              className="w-full h-full bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <span className="text-2xl font-bold text-[#ccc6f6] tracking-wider">
                  MongoDB-Express-React-Node Blog
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/blog2">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg4})` }}
              className="w-full h-full bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <span className="text-2xl font-bold text-[#ccc6f6] tracking-wider">
                  Ionic-React Input
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/ionic_practises">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
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
