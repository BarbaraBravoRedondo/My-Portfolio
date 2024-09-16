import React from 'react';
import Diplomas from './Diplomas';
import Stack from './Stack';
import picture from '../images/me.jpg';
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <h2 className='about_world'>&lt; Hello World!/&gt;</h2>

      <div className='about_topContainer'>
        <div className="project">
          <img className="project__imgA" src={picture} alt="Profile" />
        </div>
        <article className="about__txt font-light">
          <div className="about__txt__parg">
            Hi, I'm Bárbara Bravo Redondo. I’m a flexible and hardworking professional with a passion for visual languages and clean code.
          </div>
          <p className="about__txt__parg">
            I honed my skills through the Adalab bootcamp and am now exploring full-stack development. I thrive in environments that challenge me and promote continuous growth.
          </p>
          <p className="about__txt__parg">
            My drive for learning and curiosity keeps me growing in the tech world.
          </p>
        </article>
      </div>

      <Stack/>
      <Diplomas/>
    </div>
  );
};

export default Home;
