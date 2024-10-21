import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TechIconos.scss';

function TechIconos(props) {
  const tecnologies = props.tecnologies;

  const getIcon = (iconClass, techName) => (
    <i 
      className={`fa-brands fa-xl ${iconClass}`} 
      title={techName} 
      key={techName}
    ></i>
  );

  return (
    <section className="tech">
      {tecnologies.toLowerCase().includes('html') && getIcon('fa-html5', 'HTML')}
      {tecnologies.toLowerCase().includes('css') && getIcon('fa-css3', 'CSS')}
      {tecnologies.toLowerCase().includes('react') && getIcon('fa-react', 'React')}
      {tecnologies.toLowerCase().includes('js') && getIcon('fa-js', 'JavaScript')}
      {tecnologies.toLowerCase().includes('node') && getIcon('fa-node-js', 'Node.js')}
      {tecnologies.toLowerCase().includes('api') && (
        <i 
          className="fa-solid fa-cloud"
          title="API" 
          key="API"
        ></i>
      )} {/* Usamos el icono de servidor para API */}
      {tecnologies.toLowerCase().includes('mysql') && (
        <i 
          className="fa-solid fa-database" 
          title="MySQL" 
          key="MySQL"
        ></i>
      )} {/* Usamos un icono de base de datos para MySQL */}

    </section>
  );
}
TechIconos.propTypes = {
  tecnologies: PropTypes.string.isRequired, // Se espera una cadena de texto
};
export default TechIconos;
