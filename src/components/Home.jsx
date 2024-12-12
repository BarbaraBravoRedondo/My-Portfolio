import { useEffect, useState, useMemo } from 'react';
import Diplomas from './Diplomas';
import Stack from './Stack';
import picture from '../images/me.jpg';
import '../styles/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const greetings = useMemo(
    () => [
      'Hello World!',
      'Hola Mundo!',
      'Ciao Mondo!',
      'Salut le Monde!',
      'Hallo Welt!',
      'Olá Mundo!',
      'こんにちは世界！',
      '你好，世界！',
      '안녕하세요 세계!',
      'Привет, мир!',
    ],
    []
  );

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
  }, [greetings]);

  const smoothScrollDown = () => {
    const stackSection = document.getElementById('stack');
    if (stackSection) {
      const targetPosition = stackSection.getBoundingClientRect().top + window.scrollY;
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition - headerHeight;
      const duration = 2000; 
      let startTime = null;
  
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    }
  };
  
  
  const handleMouseOver = () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
      circle.classList.add('center');
    });
  };

  const handleMouseOut = () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
      circle.classList.remove('center');
    });
  };

  return (
    <div className="home-container">
      <h2 className="home-container_world">&lt; {currentGreeting}/&gt;</h2>

      <div className="home-container_topContainer">

        <div className="profile">
          <div className='profile_circles'>
          <div className='circle profile_circles_1'></div>
          <div className='circle profile_circles_2'></div>
          <div className=' circle profile_circles_3'></div>
          <img className=" circle profile_circles_imgA" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} src={picture} alt="Profile-picture" />
        </div></div>
        <article className="home-container__txt font-light">
          <p className="home-container__txt__name">Bárbara Bravo Redondo</p>
          <p className="home-container__txt__subtitle">-Jr.Full-stack developer-</p>
          <p className="home-container__txt__resume">
          &quot;Curious by nature, I thrive in collaborative environments that foster creativity and continuous learning &quot;
          </p>
        </article>
      </div>

      <button onClick={smoothScrollDown} id="arrow-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <Stack id="stack" />
      <Diplomas />
    </div>
  );
};

export default Home;
