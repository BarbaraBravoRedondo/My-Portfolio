
import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCloud } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import '../styles/TechIconos.scss';

function TechIconos(props) {
  const tecnologies = props.tecnologies.toLowerCase();

  return (
    <section className="tech">
      {tecnologies.includes('html') && <FaHtml5 className="footerIcons project__overlay__icon" title="HTML" />}
      {tecnologies.includes('css') && <FaCss3Alt className="footerIcons project__overlay__icon" title="CSS" />}
      {tecnologies.includes('react') && <FaReact className="footerIcons project__overlay__icon" title="React" />}
      {tecnologies.includes('js') && <SiJavascript className="footerIcons project__overlay__icon" title="JavaScript" />}
      {tecnologies.includes('node') && <FaNodeJs className="footerIcons project__overlay__icon" title="Node.js" />}
      {tecnologies.includes('api') && <FaCloud className="footerIcons project__overlay__icon" title="API" />}
      {tecnologies.includes('mysql') && <DiMysql className="footerIcons project__overlay__icon" title="MySQL" />}
      {tecnologies.includes('tailwind') && <SiTailwindcss className="footerIcons project__overlay__icon" title="TailwindCSS" />}
    </section>
  );
}

TechIconos.propTypes = {
  tecnologies: PropTypes.string.isRequired,
};

export default TechIconos;
