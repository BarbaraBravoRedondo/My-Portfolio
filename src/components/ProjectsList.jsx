import React, { useState } from 'react'; // Importa useState
import projectsData from '../data/Projects';
import TechIconos from './TechIconos';
import '../styles/ProjectList.scss';

import gnomes from '../images/gnomes.png';
import cards from '../images/cards.png';
import series from '../images/series.png';
import mario from '../images/mario.png';
import owen from '../images/owen-wilson.png';
import hangman from '../images/hangman.png';
import ramen from '../images/ramen.png';
import detective from '../images/detective.png';

function ProjectList() {
  const imgSrcMap = {
    gnomes,
    cards,
    mario,
    'owen-wilson': owen,
    hangman,
    series,
    ramen,
    detective,
  };

  // Estado para controlar el hover
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <main className="project-list">
      {projectsData.map((project) => {
        const imgSrc = imgSrcMap[project.nameimg] || '';

        return (
          <div
            key={project.id}
            className="project-item"
            onMouseEnter={() => setHoveredProjectId(project.id)} // Establece el ID del proyecto al pasar el mouse
            onMouseLeave={() => setHoveredProjectId(null)} // Restablece el ID al salir
          >
            <img
              className="project__imgP"
              src={imgSrc}
              alt={`Imagen del proyecto ${project.title}`}
            />
            <div className="project__overlay">
              <h2>{project.title}</h2>
              <div className="mvl-icons">
                <TechIconos tecnologies={project.tecnologies} />
              </div>
              <div className="project__overlay__repo">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.page}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
            <div
              className={`project__hover ${
                hoveredProjectId === project.id ? 'visible' : ''
              }`}
            >
              <p>{project.description}</p>

              <TechIconos
                className="dsk-icons"
                tecnologies={project.tecnologies}
              />
              <div className="hover-links">
                <a className='icons-repo' href={project.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={project.page}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default ProjectList;
