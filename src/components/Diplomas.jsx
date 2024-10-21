import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/Diplomas.scss';

import Certificate1 from '../images/certificate1.jpg';
import Certificate2 from '../images/certificate2.jpg';
import Certificate3 from '../images/certificate8.png';
import Certificate4 from '../images/certificate6.jpg';
import Certificate5 from '../images/certificate7.jpg';
import Certificate6 from '../images/certificate9.png';
import Certificate7 from '../images/certificate10.png';

import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

const Diplomas = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      console.log('Autoplay stopped');
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
      console.log('Autoplay started');
    }
  };

  return (
    <div className="swiper-container">
      <h2 className="title">Certificates:</h2>
      <Swiper
        modules={[Navigation, Pagination, Thumbs, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        navigation
        rewind={true}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log('Swiper instance:', swiperRef.current);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="swiper"
      >
        <SwiperSlide>
          <img className="PicSlide" src={Certificate1} alt="Certificación 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="PicSlide" src={Certificate2} alt="Certificación 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="PicSlide" src={Certificate3} alt="Certificación 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="PicSlide" src={Certificate4} alt="Certificación 4" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img className="PicSlide" src={Certificate5} alt="Certificación 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="PicSlide" src={Certificate6} alt="Certificación 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="PicSlide" src={Certificate7} alt="Certificación 7" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress={true}
        className="swiper-thumbs"
      >
        <SwiperSlide>
          <img
            className="PicSlideD"
            src={Certificate1}
            alt="Miniatura Certificación 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="PicSlideD"
            src={Certificate2}
            alt="Miniatura Certificación 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="PicSlideD"
            src={Certificate3}
            alt="Miniatura Certificación 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="PicSlideD"
            src={Certificate4}
            alt="Miniatura Certificación 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Diplomas;
