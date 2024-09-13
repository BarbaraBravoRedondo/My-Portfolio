import '../styles/About.scss';
import '../styles/Experience.scss';

import cv from '../downloads/cv.pdf';
import experiences from '../data/Experience.json'; 

const sortExperiences = (experiences) => {
  return experiences.sort((a, b) => {
  
    const parseDate = (date) => {
      const [startDate] = date.split(' - ');

      const yearMonth = startDate.match(/\d{2}(\d{2})/);
      return yearMonth ? parseInt(yearMonth[1], 10) + parseInt(yearMonth[0], 10) * 100 : 0;
    };

 
    return parseDate(b.date) - parseDate(a.date);
  });
};

function About() {
  const sortedExperiences = sortExperiences(experiences);

  return (
    <main className="about">
      {/* <h2 className='about_world'>&lt; Hello World!/&gt;</h2>

      <div className='about_topContainer'>
        <div className="project">
          <img className="project__imgA" src={picture} alt="" />
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
</article> */}

      {/* </div> */}

      <a href={cv} download="CV-Barbara-Bravo-Redondo.pdf">
        <button className="btn">Download CV<i className="fa-solid fa-download fa-lg"></i></button>
      </a>

      <section className="main_sectionExperience" id="experience">
        <h3 className="main_sectionExperience_title">Experience</h3>
        <div className="main_sectionExperience_line"></div>
        <ul className="main_sectionExperience_list">
          {sortedExperiences.map((exp, index) => (
            <li className="main_sectionExperience_list-element" key={index}>
              <div className="main_sectionExperience_list-element-dot"></div>
              <p className="main_sectionExperience_list-element-date">
                {exp.date}
              </p>
              <h4 className="main_sectionExperience_list-element-job">
                {exp.job}
              </h4>
              <h5 className="main_sectionExperience_list-element-company">
                {exp.company}
              </h5>
              <p className="main_sectionExperience_list-element-description">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

About.defaultProps = {};

About.propTypes = {};

export default About;
