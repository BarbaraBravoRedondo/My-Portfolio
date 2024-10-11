import React, { useEffect, useState } from 'react';
import Diplomas from './Diplomas';
import Stack from './Stack';
import picture from '../images/me.jpg';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const greetings = [
    'Hello World!',
    'Hola Mundo!',
    'Ciao Mondo!',
    'Salut le Monde!',
    'Hallo Welt!',
    'Olá Mundo!',
    'こんにちは世界！', // Japonés
    '你好，世界！', // Chino
    '안녕하세요 세계!', // Coreano
    'Привет, мир!', // Ruso
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container ">
      <h2 className="home-container_world">&lt; {currentGreeting}/&gt;</h2>

      <div className="home-container_topContainer">
        <div className="project">
          <img className="project__imgA" src={picture} alt="Profile" />
        </div>
        <article className="home-container__txt font-light">
          <p className="home-container__txt__name">Bárbara Bravo Redondo</p>
          <p className="home-container__txt__subtitle">-Jr.Full-stack developer-</p>
          {/* <p className="home-container__txt__parg">
            I’m constantly growing in both frontend and backend development, with strong skills in teamwork, communication, and adaptability.
          </p> */}
          <p className="home-container__txt__resume">
            ''Curious by nature, I thrive in collaborative environments that
            foster creativity and continuous learning''
          </p>
        </article>
      </div>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <Stack />
      <Diplomas />
    </div>
  );
};

export default Home;
