// src/ProjectList.js
import React from 'react';
import projectsData from '../data/Projects'; // Asegúrate de que la ruta es correcta
import TechIconos from './TechIconos';
import '../styles/ProjectList.scss';

// Importa las imágenes
import gnomes from '../images/gnomes.png';
import cards from '../images/cards.png';
import series from '../images/series.png';
import mario from '../images/mario.png';
import owen from '../images/owen-wilson.png';
import hangman from '../images/hangman.png';

function ProjectList() {
  const imgSrcMap = {
    gnomes,
    cards,
    mario,
    'owen-wilson': owen,
    hangman,
    series,
  };

  return (
    <main className="project-list">
      {projectsData.map((project) => {
        const imgSrc = imgSrcMap[project.nameimg] || '';

        return (
          <div key={project.id} className="project-item">
            <img
              className="project__imgP"
              src={imgSrc}
              alt={`Imagen del proyecto ${project.title}`}
            />
            <div className="project__overlay">
              <h2>{project.title}</h2>
              <TechIconos tecnologies={project.tecnologies} />
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.page} target="_blank" rel="noopener noreferrer">
                WEB
              </a>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default ProjectList;
