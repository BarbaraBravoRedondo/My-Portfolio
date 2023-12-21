import projectsData from '../data/Projects';
import TechIconos from './TechIconos';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//  import "swiper/modules/navigation/navigation"
 import { Navigation } from 'swiper'
import '../styles/ProjectList.scss';

// Importa las imágenes necesarias para tus proyectos aquí...
import gnomes from '../images/gnomes.png';
import cards from '../images/cards.png';
import series from '../images/series.png';
import mario from '../images/mario.png';
import owen from '../images/owen-wilson.png';
import hangman from '../images/hangman.png';

function ProjectList() {
  const imgSrcMap = {
    gnomes: gnomes,
    cards: cards,
    mario: mario,
    'owen-wilson': owen,
    hangman: hangman,
    series: series,
    // Añade aquí más imágenes según sea necesario
  };

  return (
    <main>
      <Carousel 
        showIndicators={false}
        showThumbs={false}
      

        spaceBetween={50}
        slidesPerView={1}
        showStatus={false} 
        autoplay={{ delay:300}}
        loop
        navigation={true}
        emulateTouch={true}
        onSlideChange={() =>console.log("slide change")}
        onSwiper={swiper =>console.log(swiper)}
      
      >
        {projectsData.map((project) => {
          const imgSrc = imgSrcMap[project.nameimg] || '';

          return (
            <div key={project.id}>
            <div className="link2 item project">
              <a
                href={project.github}
                title={`ir al proyecto ${project.title}`}
                target="_blank"
                rel="noreferrer"
                className="project__overlay project__circle"
              >
                <h2>{project.title}</h2>
                <TechIconos tecnologies={project.tecnologies} />
                <a href={project.page} target="_blank" rel="noopener noreferrer">WEB</a>
              </a>
              <img
                className="project__img project__circle"
                src={imgSrc}
                alt=""
              />
              <div className="project__dsk">
                <TechIconos tecnologies={project.tecnologies} />
                <a
                  href={project.page}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web
                </a>
              </div>
            </div>
          </div>
          );
        })}
      </Carousel>
    </main>
  );
}

export default ProjectList;
