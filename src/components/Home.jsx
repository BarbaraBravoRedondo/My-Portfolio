import React, { useEffect, useState } from 'react';
import Diplomas from './Diplomas';
import Stack from './Stack';
import picture from '../images/me.jpg';
import '../styles/Home.scss';

const Home = () => {
  const greetings = [
    "Hello World!",    // Inglés
    "Hola Mundo!",    // Español
    "Ciao Mondo!",     // Italiano
    "Salut le Monde!", // Francés
    "Hallo Welt!",    // Alemán
    "Olá Mundo!",     // Portugués
    "こんにちは世界！", // Japonés
    "你好，世界！",    // Chino
    "안녕하세요 세계!", // Coreano
    "Привет, мир!"    // Ruso
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prevGreeting => {
        const currentIndex = greetings.indexOf(prevGreeting);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2600); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="home-container">
      <h2 className='about_world'>&lt; {currentGreeting}/&gt;</h2>

      <div className='about_topContainer'>
        <div className="project">
          <img className="project__imgA" src={picture} alt="Profile" />
        </div>
        <article className="about__txt font-light">
          <p className="about__txt__parg">
         
           Hi there! <br></br>I'm <strong>Bárbara Bravo Redondo.</strong> <br></br>A junior full-stack developer passionate about problem-solving and creating clean, efficient code.
          </p>
          <p className="about__txt__parg">
            I’m constantly growing in both frontend and backend development, with strong skills in teamwork, communication, and adaptability.
          </p>
          <p className="about__txt__parg">
            Curious by nature, I thrive in collaborative environments that foster creativity and continuous learning.
          </p>
        </article>
      </div>

      <Stack />
      <Diplomas />
    </div>
  );
};

export default Home;
