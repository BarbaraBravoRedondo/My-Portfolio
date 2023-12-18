import "../styles/About.scss";
import picture from "../images/me.jpg";

function About() {
  return (
    <main className="about">
      <article className="about__txt font-light">
        <p className="about__txt__parg">
        I'm a <b>flexible</b>, <b>hardworking</b>, and <b>multidisciplinary</b> individual in my career journey. .
        </p>
        <p className="about__txt__parg">
        I greatly value <b>visual languages</b>, paying attention to <b>pixel-perfect details</b>, and crafting <b>clean and organized code</b>. I embarked on a path in web development through the <b>Adalab bootcamp</b>, gaining solid proficiency in <b>front-end</b> technologies. Currently, I'm exploring <b>full-stack</b> technologies while continuing self-directed learning to delve deeper into specific areas.
        I'm excited to contribute my skills in an environment that offers new <b>challenges</b> and values <b>continuous growth</b>, where I can bring creativity and expertise to drive innovative projects forward.
        </p>
        <p className="about__txt__parg">
         My relentless pursuit of <b>learning</b> and insatiable <b>curiosity</b> propels me to keep discovering and growing in this exhilarating tech realm.
        </p>
      </article>
      <article className="project">
        <img className="project__img" src={picture} alt="" />
      </article>
    </main>
  );
}
About.defaultProps = {};

About.propTypes = {};
export default About;
