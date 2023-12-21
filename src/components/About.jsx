import '../styles/About.scss';
import '../styles/Experience.scss';
import picture from '../images/me.jpg';

function About() {
  return (
    <main className="about">
      <article className="about__txt font-light">
        <p className="about__txt__parg">
         Hi there! I'm <b>Bárbara Bravo Redondo</b>.<p>I'm a <b>flexible</b>, <b>hardworking</b>, and <b>multidisciplinary</b> individual in my career journey. .</p>
        </p>
        <p className="about__txt__parg">
          I greatly value <b>visual languages</b>, paying attention to <b>pixel-perfect details</b>, and crafting <b>clean and organized code</b>. I embarked on a path in web
          development through the <b>Adalab bootcamp</b>, gaining solid
          proficiency in <b>front-end</b> technologies. Currently, I'm exploring <b>full-stack</b> technologies while continuing self-directed learning
          to delve deeper into specific areas. I'm excited to contribute my
          skills in an environment that offers new <b>challenges</b> and values <b>continuous growth</b>, where I can bring creativity and expertise
          to drive innovative projects forward.
        </p>
        <p className="about__txt__parg">
          My relentless pursuit of <b>learning</b> and insatiable <b>curiosity</b> propels me to keep discovering and growing in this
          exhilarating tech realm.
        </p>
      </article>
      <article className="project">
        <img className="project__img" src={picture} alt="" />
      </article>
      <section className="main_sectionExperience" id="experience">
        <h3 className="main_sectionExperience_title">Experience</h3>
        <div className="main_sectionExperience_line"></div>
        <ul className="main_sectionExperience_list">
          <li className="main_sectionExperience_list-element">
            <div className="main_sectionExperience_list-element-dot"></div>
            <p className="main_sectionExperience_list-element-date">
              Feb23 - Aug23
            </p>
            <h4 className="main_sectionExperience_list-element-job">
              Administrative
            </h4>
            <h5 className="main_sectionExperience_list-element-company">
              QUIRONSALUD
            </h5>
            <p className="main_sectionExperience_list-element-description">
              Within a healthcare setting, my role involved managing appointment
              schedules, maintaining detailed patient records, and facilitating
              communication with insurance providers. I ensured seamless
              administrative operations, enabling efficient patient care and
              smooth insurance-related processes within the healthcare facility.
            </p>
          </li>
          <li className="main_sectionExperience_list-element">
            <div className="main_sectionExperience_list-element-dot"></div>
            <p className="main_sectionExperience_list-element-date">
              Feb22 - Jan23
            </p>
            <h4 className="main_sectionExperience_list-element-job">
              Aux Administrative
            </h4>
            <h5 className="main_sectionExperience_list-element-company">
              FIDELIS (HM Puerta de Hierro)
            </h5>
            <p className="main_sectionExperience_list-element-description">
              At a healthcare facility, I effectively managed record-keeping
              processes, supervised inventory, and meticulously handled
              documentation within the radiography department. My role was
              crucial in maintaining organized and accurate records, ensuring
              seamless operations and compliance with regulatory standards.
            </p>
          </li>
          <li className="main_sectionExperience_list-element">
            <div className="main_sectionExperience_list-element-dot"></div>
            <p className="main_sectionExperience_list-element-date">
              Nov20 - Jan22
            </p>
            <h4 className="main_sectionExperience_list-element-job">
              INKONITO - ZUMA GROUP (UK)
            </h4>
            <h5 className="main_sectionExperience_list-element-company">
              Manager
            </h5>
            <p className="main_sectionExperience_list-element-description">
              I oversaw operations, focusing on monitoring inventory and
              optimizing budgets. Managing a team of 20, I streamlined staff
              activities, enhancing efficiency and service quality. My role
              extended to optimizing inventory and budgets, ensuring
              cost-effectiveness while maintaining service excellence in the
              hospitality sector.
            </p>
          </li>
          <li className="main_sectionExperience_list-element">
            <div className="main_sectionExperience_list-element-dot"></div>
            <p className="main_sectionExperience_list-element-date">
              Sep17 - Jul20
            </p>
            <h4 className="main_sectionExperience_list-element-job">
              Assistant Mangerr
            </h4>
            <h5 className="main_sectionExperience_list-element-company">
              BYRON S.L (UK)
            </h5>
            <p className="main_sectionExperience_list-element-description">
              {' '}
              Focused on cash-out activities, daily report generation, and stock
              management, I supervised operational staff. Additionally, I took
              charge of forecasting control to optimize resource utilization and
              efficiency.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
About.defaultProps = {};

About.propTypes = {};
export default About;
