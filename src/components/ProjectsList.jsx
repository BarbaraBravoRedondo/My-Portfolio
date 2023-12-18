import projectsData from '../data/Projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import '../styles/ProjectList.scss';
import TechIconos from './TechIconos';

import { Navigation, Autoplay } from 'swiper';

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
      <Swiper 
      controlers
      spaceBetween={30} 
      slidesPerView={1} 
      loop 
      navigation
      autoplay={true}
      >
        {projectsData.map((project) => {
          const imgSrc = imgSrcMap[project.nameimg] || '';

          return (
            <SwiperSlide key={project.id}>
              <a
                className="link2 item project"
                href={project.github}
                title={`ir al proyecto ${project.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <section className="project__overlay project__circle">
                  <h2>{project.title}</h2>
                  <TechIconos tecnologies={project.tecnologies} />
                </section>
                <img
                  className="project__img project__circle"
                  src={imgSrc}
                  alt=""
                />
                <div className="project__dsk">
                  <TechIconos tecnologies={project.tecnologies} />
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}

export default ProjectList;
