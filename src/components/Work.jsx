import React from 'react';
import WorkImg from '../assets/Weather-Api.jpg';
import WorkImg2 from '../assets/Nasa.jpg';
import WorkImg3 from '../assets/Profile.jpg';
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
    <div name="work" className="w-full h-screen text-black bg-gray-100 relative flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Swiper
          spaceBetween={30}  // Kis hely a slide-ok között
          loop={true}  // Végtelen görgetés
          pagination={{ clickable: true }}  // Engedélyezi a képernyő alján a navigációs pontokat
          grabCursor={true}  // A kurzor mutatja, hogy a görgetés engedélyezett
          centeredSlides={true}  // A középső slide teljesen látszódik
          modules={[Autoplay]}  // Az autoplay modul betöltése
          autoplay={{
            delay: 3000,  // 3 másodpercet vár a képek váltása között
            disableOnInteraction: false,  // Ha a felhasználó interakcióba lép, akkor is folytatódik
            waitForTransition: true,  // Várjon, hogy a tranzíció befejeződjön, mielőtt a következő elindul
          }}
          speed={1500}  // Lassú csúsztatás, az érték milliszekundumban van, tehát itt 1500ms (1,5 másodperc) a tranzíció
          className="w-full"  // A Swiper teljes magasságra és szélességre kitölt
          breakpoints={{
            640: {
              slidesPerView: 1,  // Mobil nézet: 1 slide látszódik
            },
            768: {
              slidesPerView: 2,  // Kisebb tableten 2 slide látszódik
            },
            1024: {
              slidesPerView: 3,  // Nagyobb képernyőkön 3 slide látszódik
            },
          }}
        >
          {/* Minden egyes projekthez egy SwiperSlide */}
          <SwiperSlide>
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="w-full h-[400px] bg-cover bg-center rounded-md flex justify-center items-center transition-transform duration-500 ease-in-out"
            >
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  React JS Weather-Api
                </span>
                <div className="pt-8">
                  <a href="https://gogomogo1989.github.io/weather/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/GogoMogo1989/weather">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
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
              className="w-full h-[400px] bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Javascript NASA
                </span>
                <div className="pt-8">
                  <a href="https://gogomogo1989.github.io/nasa/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/GogoMogo1989/nasa">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
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
              className="w-full h-[400px] bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Node JS Profile
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/profile">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
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
              className="w-full h-[400px] bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  MongoDB-Express-React-Node Blog
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/blog2">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
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
              className="w-full h-[400px] bg-cover bg-center rounded-md flex justify-center items-center"
            >
              <div className="text-center p-4">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Ionic-React Input
                </span>
                <div className="pt-8">
                  <a href="https://github.com/GogoMogo1989/ionic_practises">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-100 text-gray-400 font-bold text-lg">
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
