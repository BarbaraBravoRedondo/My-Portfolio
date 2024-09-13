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
            Hi, I'm <b>Bárbara Bravo Redondo</b>. I’m a <b>flexible</b> and <b>hardworking</b> professional with a passion for <b>visual languages</b> and <b>clean code</b>.
          </div>
          <p className="about__txt__parg">
            I honed my skills through the <b>Adalab bootcamp</b> and am now exploring <b>full-stack</b> development. I thrive in environments that challenge me and promote <b>continuous growth</b>.
          </p>
          <p className="about__txt__parg">
            My drive for <b>learning</b> and <b>curiosity</b> keeps me growing in the tech world.
          </p>
        </article>
      </div>

      <Stack/>
      <Diplomas/>
    </div>
  );
};

export default Home;
